"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

function InstructorLandingPage({ session }) {
  const [courses, setCourses] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sort, setSort] = useState("-createdAt");
  const [isLoading, setIsLoading] = useState(false);
  const { locale } = useParams();

  const fetchCourses = async (keyword = "", sort = "-createdAt") => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${
          session.user._id
        }/instructor?${keyword && `keyword=${keyword}`}&${
          sort === "draft" || sort === "public"
            ? `courseState=${sort}`
            : `sort=${sort}`
        }`,
        {
          headers: {
            Authorization: session.accessToken,
          },
        }
      );
      if (data.message === "success") {
        setCourses(data.data);
      } else {
        setCourses(null);
      }
    } catch (error) {
      setCourses(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses(searchKeyword, sort);
  }, [sort]);

  const handleSearch = () => {
    fetchCourses(searchKeyword, sort);
  };
  const t = useTranslations("CoursesPage");

  return (
    <div
      className={`mx-5 ${
        locale === "en"
          ? "md:ml-20 lg:ml-24 lg:mr-10"
          : "md:mr-20 lg:mr-24 lg:ml-10"
      }`}
    >
      <div className="flex justify-between items-center my-10">
        <h1 className="font-serif text-4xl font-bold text-gray-700 mb-6">
          {t("courses")}
        </h1>
        <Link href={"course/create/1"}>
          <button className="bg-[#a435f0] hover:bg-[#8b2dc9] text-white p-3 font-bold md:hidden">
            {t("newCourse")}
          </button>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-1 items-center gap-6 justify-between md:justify-normal">
          <div className="flex min-w-[250px]">
            <input
              type="text"
              placeholder={t("search")}
              className="border border-black p-3 outline-none"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black text-white p-3"
              onClick={() => {
                handleSearch();
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8 h-6" />
            </button>
          </div>
          <div className="flex items-center border text-3xl border-black font-sans hover:cursor-pointer hover:bg-gray-200 w-28 p-2">
            <select
              id="sort-options"
              name="sort"
              required
              className="block w-full py-1 text-base focus:outline-none bg-transparent text-gray-800 font-bold"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="-createdAt">{t("newest")}</option>
              <option value="createdAt">{t("oldest")}</option>
              <option value="title">{t("A-Z")}</option>
              <option value="-title">{t("Z-A")}</option>
              <option value="public">Public</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
        <Link href={"course/create/1"}>
          <button className="bg-[#a435f0] hover:bg-[#8b2dc9] text-white p-3 font-bold hidden md:block">
            {t("newCourse")}
          </button>
        </Link>
      </div>

      {/* Course Card */}
      {isLoading ? (
        <div className="flex-1 flex justify-center items-center">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      ) : courses ? (
        courses.map((course) => (
          <div
            key={course._id}
            className="border border-gray-300 mt-6 w-full flex gap-4"
          >
            <Image
              src={
                course.courseImage ||
                "https://s.udemycdn.com/course/200_H/placeholder.jpg"
              }
              width="118"
              height="118"
              alt={course.title}
              className="w-[130px] h-[118px]"
            />
            <div className="relative flex flex-1 group hover:cursor-pointer">
              <h1 className="invisible text-violet-800 group-hover:visible group-hover:opacity-100 absolute font-bold text-lg text-center m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {t("edit/manage")}
              </h1>

              <div className="group-hover:opacity-5 w-full flex gap-10">
                <div className="md:w-1/4 flex flex-col justify-between py-4">
                  <Link href={`course/${course._id}/manage/goals`}>
                    <h1 className="font-bold">
                      {locale === "en" ? course.title : course.title_Ar}
                    </h1>
                  </Link>

                  <div className="flex gap-4 ">
                    <p
                      className={`text-xs ${
                        course.courseState === "draft" && "font-bold"
                      }`}
                    >
                      {t("draft")}
                    </p>
                    <p
                      className={`text-xs ${
                        course.courseState === "public" && "font-bold"
                      }`}
                    >
                      {t("public")}
                    </p>
                  </div>
                </div>
                <div className="items-center my-auto flex-1 w-full hidden md:flex">
                  <Link
                    href={`course/${course._id}/manage/goals`}
                    className="flex flex-1"
                  >
                    <h1 className="font-bold">{t("finish")}</h1>
                    <div className="mt-2 mx-6 bg-gray-200 w-3/4 h-2">
                      <div
                        className="bg-[#5022C3] h-full"
                        style={{ width: `${course.progress || 0}%` }}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="mt-6 text-gray-700 text-center">{t("noCourse")}</p>
      )}
    </div>
  );
}

export default InstructorLandingPage;
