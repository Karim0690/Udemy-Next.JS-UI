"use client";

import { BreadcrumbDemo } from "@/app/_components/Breadcrumb/Breadcrumb";
import FeaturedCourseSlider from "@/app/_components/FeaturedCourseSlider/FeaturedCourseSlider";
import FilterSlider from "@/app/_components/FilterSlider/FilterSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseLargeCard from "@/app/_components/CourseLargeCard/CourseLargeCard";
import FilterAccordion from "@/app/_components/FilterAccordion/FilterAccordion";
import InstructorSlider from "@/app/_components/InstructorSlider/InstructorSlider";
import TopicsSlider from "@/app/_components/TopicsSlider/TopicsSlider";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";

const Page = ({ params }) => {
  const category = params.categories;
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const t = useTranslations("Categories");
  const { locale } = useParams();
  const [courses, setCourses] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/category/slug/${category}`
        );
        if (data.message === "success") {
          setCategoryData(data.result); // Set category data for the page
        } else {
          console.error("Failed to fetch category data");
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    if (category) {
      fetchCategoryData();
    }
  }, [category]);

  // Fetch courses based on categoryData
  useEffect(() => {
    if (categoryData && categoryData._id) {
      const fetchCourses = async () => {
        try {
          setLoading(true); // Show loading state while fetching
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_LOCAL_API}/course/public/courses?category=${categoryData._id}`
          );
          if (data.status === "success") {            
            setCourses(data.data.courses); // Store the fetched courses
          } else {
            console.error("Failed to fetch courses");
          }
        } catch (error) {
          console.error("Error fetching courses:", error);
        } finally {
          setLoading(false); // Hide loading state once the fetching is done
        }
      };
      fetchCourses();
    }
  }, [categoryData]);

  return (
    <>
      <div className="hidden lg:block bg-white border border-b-gray-300 font-sans ">
        <BreadcrumbDemo category={category} locale={locale} />
      </div>
      <div className="mx-12 mt-12">
        <h1 className="font-bold text-3xl text-gray-800">
          <span className="capitalize">{category}</span> {t("courses")}
        </h1>
        <div className="mt-16">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">
            {t("coursesStart")}
          </h3>
          <p className="text-gray-600 mb-2">{t("coursesStarts")}</p>
        </div>
      </div>
      <FilterSlider courses={courses} />
      {/* Featured Courses*/}
      <div className="mx-12 mt-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          {t("featured")}
        </h3>
        <p className="text-gray-600 mb-2">{t("featureds")}</p>
        {/* Course Card */}
        <div className="border border-gray-200 font-sans hover:cursor-pointer hover:bg-slate-50">
          <FeaturedCourseSlider />
        </div>
      </div>
      {/* Popular Topics*/}
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          {t("popTopics")}
        </h3>
        <TopicsSlider />
      </div>
      {/* Popular Instructor*/}
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          {t("popularInstructor")}
        </h3>
        <p className="text-gray-600 mb-2">{t("popularInstructors")}</p>
        <InstructorSlider />
      </div>
      {/* All Courses */}
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-4">
          {t("all")} <span className="capitalize">{category}</span>{" "}
          {t("courses")}
        </h3>
        <div className="flex items-center border border-gray-200 text-gray-800 mb-6 p-4">
          <IoIosInformationCircle style={{ fontSize: "32px" }} />
          <p className="font-bold text-base text-gray-800 ml-6">{t("money")}</p>
        </div>
        {/* Course Cards */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-3 border border-black font-sans hover:cursor-pointer hover:bg-gray-200 p-4"
              onClick={toggleFilter}
            >
              <IoFilterOutline style={{ fontSize: "18px" }} />
              <span className="font-bold">{t("filter")}</span>
            </div>
            <div className="flex items-center border text-3xl border-black font-sans hover:cursor-pointer hover:bg-gray-200 ml-4 w-40 p-2">
              <div className="relative w-full">
                <select
                  id="sort-options"
                  name="sort"
                  required
                  className="block w-full px-2 pt-5 text-base focus:outline-none bg-transparent text-gray-800"
                >
                  <option value="popularity">{t("popular")}</option>
                  <option value="highest-rated">{t("high")}</option>
                  <option value="newest">{t("newest")}</option>
                </select>
                <label
                  htmlFor="sort-options"
                  className="absolute text-xs font-bold text-gray-700 transition-all left-3 top-0 peer-focus:text-xs peer-focus:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 hover:text-gray-600"
                >
                  {t("sort")}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2 mb-12">
          <div
            className={`w-[25%] ${
              isFilterVisible ? "lg:block" : "lg:hidden"
            } hidden pt-4`}
          >
            <FilterAccordion t={t} />
          </div>
          <div className="w-full lg:mr-6 lg:ml-6">
            {Array.from({ length: 16 }, (_, i) => (
              <CourseLargeCard key={i} />
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Page;
