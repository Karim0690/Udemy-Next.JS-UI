"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Spinner } from "@material-tailwind/react";

function InstructorLandingPage() {
  const [courses, setCourses] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sort, setSort] = useState("-createdAt");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourses = async (keyword = "", sort = "-createdAt") => {
    setIsLoading(true);
    console.log(keyword);

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_LOCAL_API
        }/course/66aa2d5a201f806f92eebb25/instructor?${
          keyword ? `keyword=${keyword}` : ""
        }&${sort ? `sort=${sort}` : ""}`,
      );
      const data = await response.json();
      setCourses(data.data || []);
    } catch (error) {
      console.error("Error fetching instructor courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses(searchKeyword, sort);
  }, [sort, searchKeyword]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchCourses(searchKeyword, sort);
  };

  return (
    <div className="mx-5 md:ml-20 lg:ml-24 lg:mr-10">
      <div className="flex justify-between items-center my-10">
        <h1 className="font-serif text-4xl font-bold text-gray-700 mb-6">
          Courses
        </h1>
        <Link href={"course/create/1"}>
          <button className="bg-[#a435f0] hover:bg-[#8b2dc9] text-white p-3 font-bold md:hidden">
            New Course
          </button>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-1 items-center justify-between md:justify-normal">
          <form onSubmit={handleSearch} className="flex min-w-[250px]">
            <input
              type="text"
              placeholder="Search your courses"
              className="border border-black p-3 outline-none"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit" className="bg-black text-white p-3">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8 h-6" />
            </button>
          </form>
          <div className="flex items-center border text-3xl border-black font-sans hover:cursor-pointer hover:bg-gray-200 ml-4 w-28 p-2">
            <select
              id="sort-options"
              name="sort"
              required
              className="block w-full py-2 text-base focus:outline-none bg-transparent text-gray-800 font-bold"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="-createdAt">Newest</option>
              <option value="createdAt">Oldest</option>
              <option value="title">A-Z</option>
              <option value="-title">Z-A</option>
            </select>
          </div>
        </div>
        <Link href={"course/create/1"}>
          <button className="bg-[#a435f0] hover:bg-[#8b2dc9] text-white p-3 font-bold hidden md:block">
            New Course
          </button>
        </Link>
      </div>

      {/* Course Card */}
      {isLoading ? (
        <div className="flex-1 flex justify-center items-center">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      ) : courses.length > 0 ? (
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
                Edit/Manage Course
              </h1>

              <div className="group-hover:opacity-5 w-full flex gap-10">
                <div className="md:w-1/4 flex flex-col justify-between py-4">
                  <h1 className="font-bold">{course.title}</h1>
                  <div className="flex gap-4 ">
                    <p className="text-xs font-bold">Draft</p>
                    <p className="text-xs">Public</p>
                  </div>
                </div>
                <div className="items-center my-auto flex-1 w-full hidden md:flex">
                  <Link
                    href={`course/${course._id}/manage/goals`}
                    className="flex flex-1"
                  >
                    <h1 className="font-bold">Finish your course</h1>
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
        <p className="mt-6 text-gray-700 text-center">No courses available.</p>
      )}
    </div>
  );
}

export default InstructorLandingPage;
