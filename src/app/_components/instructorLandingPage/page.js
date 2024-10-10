"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";

function InstructorLandingPage() {
  // State for progress
  const [progress] = useState(20); // Example progress value

  return (
    <div className="mx-5 md:ml-20 lg:ml-24 lg:mr-10">
      <div className="flex justify-between items-center my-10">
        <h1 className="font-serif text-4xl font-bold text-gray-700 mb-6">
          Courses
        </h1>
        <button className="bg-[#a435f0] hover:bg-[#8b2dc9] text-white p-3 font-bold md:hidden">
          New Course
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-1 items-center justify-between md:justify-normal">
          <div className="flex min-w-[250px]">
            <input
              type="text"
              placeholder="Search your courses"
              className="border border-black p-3 outline-none"
            />
            <div className="bg-black text-white p-3">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="w-8 h-6" />
            </div>
          </div>
          <div className="flex items-center border text-3xl border-black font-sans hover:cursor-pointer hover:bg-gray-200 ml-4 w-28 p-2">
            <select
              id="sort-options"
              name="sort"
              required
              className="block w-full py-2 text-base focus:outline-none bg-transparent text-gray-800 font-bold"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="published-first">Published first</option>
              <option value="unpublished-first">Unpublished first</option>
            </select>
          </div>
        </div>
        <button className="bg-[#a435f0] hover:bg-[#8b2dc9] text-white p-3 font-bold hidden md:block">
          New Course
        </button>
      </div>

      {/* Course Card */}
      <div className="border border-gray-300 mt-6 w-full flex gap-4">
        <Image
          src="https://s.udemycdn.com/course/200_H/placeholder.jpg"
          width="118"
          height="118"
          alt=""
        />
        <div className="relative flex flex-1 group hover:cursor-pointer">
          <h1 className="invisible text-violet-800 group-hover:visible group-hover:opacity-100 absolute font-bold text-lg text-center m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Edit/Manage Course
          </h1>
          <div className="group-hover:opacity-5 w-full flex gap-10">
            <div className="md:w-1/4 flex flex-col justify-between py-4">
              <h1 className="font-bold">Learn JavaScript from Zero to Hero</h1>
              <div className="flex gap-4 ">
                <p className="text-xs font-bold">DRAFT</p>
                <p className="text-xs">Public</p>
              </div>
            </div>
            <div className="items-center my-auto flex-1 w-full hidden md:flex">
              <h1 className="font-bold">Finish your course</h1>
              <div className="mt-2 mx-6 bg-gray-200 w-3/4 h-2">
                <div
                  className="bg-[#5022C3] h-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Course Card */}
      <div className="border border-gray-300 mt-6 w-full flex gap-4">
        <Image
          src="https://s.udemycdn.com/course/200_H/placeholder.jpg"
          width="118"
          height="118"
          alt=""
        />
        <div className="relative flex flex-1 group hover:cursor-pointer">
          <h1 className="invisible text-violet-800 group-hover:visible group-hover:opacity-100 absolute font-bold text-lg text-center m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Edit/Manage Course
          </h1>
          <div className="group-hover:opacity-5 w-full flex gap-10">
            <div className="md:w-1/4 flex flex-col justify-between py-4">
              <h1 className="font-bold">Learn JavaScript from Zero to Hero</h1>
              <div className="flex gap-4 ">
                <p className="text-xs font-bold">DRAFT</p>
                <p className="text-xs">Public</p>
              </div>
            </div>
            <div className="items-center my-auto flex-1 w-full hidden md:flex">
              <h1 className="font-bold">Finish your course</h1>
              <div className="mt-2 mx-6 bg-gray-200 w-3/4 h-2">
                <div
                  className="bg-[#5022C3] h-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Another Course Card */}
      <div className="border border-gray-300 mt-6 w-full flex gap-4">
        <Image
          src="https://s.udemycdn.com/course/200_H/placeholder.jpg"
          width="118"
          height="118"
          alt=""
        />
        <div className="relative flex flex-1 group hover:cursor-pointer">
          <h1 className="invisible text-violet-800 group-hover:visible group-hover:opacity-100 absolute font-bold text-lg text-center m-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Edit/Manage Course
          </h1>
          <div className="group-hover:opacity-5 w-full flex gap-10">
            <div className="md:w-1/4 flex flex-col justify-between py-4">
              <h1 className="font-bold">Learn JavaScript from Zero to Hero</h1>
              <div className="flex gap-4 ">
                <p className="text-xs font-bold">DRAFT</p>
                <p className="text-xs">Public</p>
              </div>
            </div>
            <div className="items-center my-auto flex-1 w-full hidden md:flex">
              <h1 className="font-bold">Finish your course</h1>
              <div className="mt-2 mx-6 bg-gray-200 w-3/4 h-2">
                <div
                  className="bg-[#5022C3] h-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorLandingPage;
