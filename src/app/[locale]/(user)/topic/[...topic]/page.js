import CourseLargeCard from "@/app/_components/CourseLargeCard/CourseLargeCard";
import CoursesSlider from "@/app/_components/CoursesSlider/CoursesSlider";
import FilterAccordion from "@/app/_components/FilterAccordion/FilterAccordion";
import FilterSlider from "@/app/_components/FilterSlider/FilterSlider";
import InstructorSlider from "@/app/_components/InstructorSlider/InstructorSlider";
import TopicsSlider from "@/app/_components/TopicsSlider/TopicsSlider";
import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";

const Page = ({ params }) => {
  let { topic } = params;
  topic = topic ? topic[0] : null;

  return (
    <>
      <div className="mx-12 mt-12">
        <h1 className="font-bold text-3xl text-gray-800">
          <span className="capitalize">{topic}</span> Courses
        </h1>
        <div className="text-sm font-bold text-gray-600 mt-2">
          <span className="capitalize">{topic}</span> ralates to{" "}
          <span className="text-base font-bold text-[#5022C3] hover:cursor-pointer hover:text-[#503392]">
            Development
          </span>
          <span className="text-base font-bold text-[#5022C3] hover:cursor-pointer hover:text-[#503392]">
            ,{" "}
          </span>
          <span className="text-base font-bold text-[#5022C3] hover:cursor-pointer hover:text-[#503392]">
            IT & Software
          </span>
        </div>
        <div className="text-sm font-bold text-gray-600 mt-2"></div>
        <div className="mt-16">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">
            Courses to get you started
          </h3>
          <p className="text-gray-600 mb-2">
            Explore courses from experienced, real-world experts.
          </p>
        </div>
      </div>
      <FilterSlider />
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-4">
          <span className="capitalize">{topic}</span> students also learn
        </h3>
        <TopicsSlider />
      </div>
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-4">
          Top courses in <span className="capitalize">{topic}</span> and{" "}
          <span className="font-bold text-[#5022C3] underline underline-offset-4 hover:cursor-pointer hover:text-[#5a39a7]">
            jQuery
          </span>
        </h3>
        <CoursesSlider />
      </div>
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-4">
          Top <span className="capitalize">{topic}</span> courses in{" "}
          <span className="font-bold text-[#5022C3] underline underline-offset-4 hover:cursor-pointer hover:text-[#5a39a7]">
            Programming Languages
          </span>
        </h3>
        <CoursesSlider />
      </div>
      {/* Popular Instructor*/}
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          Popular Instructor
        </h3>
        <p className="text-gray-600 mb-2">
          Many learners enjoyed this highly rated course for its engaging
          content.
        </p>
        <InstructorSlider />
      </div>
      {/*  */}
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          All <span className="capitalize">{topic}</span> courses
        </h3>
        <p className="text-gray-800 text-base mb-2 w-[60%]">
          Join more than 12 million learners and train up on JavaScript on
          Udemy. Choose from a wide range of top-rated JavaScript courses. From
          back-end development to app or website building, we’ve got you
          covered. Our real-world experts can lead you through hands-on projects
          to apply your skills.
        </p>
      </div>
      {/* Course Cards */}
      <div className="mx-12 mt-12 mb-12">
        <div className="flex items-center border border-gray-200 text-gray-800 mb-6 p-4">
          <IoIosInformationCircle style={{ fontSize: "32px" }} />
          <p className="font-bold text-base text-gray-800 ml-6">
            Not sure? All courses have a 30-day money-back guarantee
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center border border-black font-sans hover:cursor-pointer hover:bg-gray-200 p-4">
              <IoFilterOutline style={{ fontSize: "18px" }} />
              <span className="font-bold ml-2">Filter</span>
            </div>
            <div className="flex items-center border text-3xl border-black font-sans hover:cursor-pointer hover:bg-gray-200 ml-4 w-40 p-2">
              <div className="relative w-full">
                <select
                  id="sort-options"
                  name="sort"
                  required
                  className="block w-full px-2 pt-5 text-base focus:outline-none bg-transparent text-gray-800"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="highest-rated">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <label
                  htmlFor="sort-options"
                  className="absolute text-xs font-bold text-gray-700 transition-all left-3 top-0 peer-focus:text-xs peer-focus:top-1 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 hover:text-gray-600"
                >
                  Sort by
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-2 mb-12">
          <div className="w-[25%] hidden lg:block pt-4">
            <FilterAccordion />
          </div>
          <div className="w-full lg:ml-6">
            {Array.from({ length: 16 }, (_, i) => (
              <CourseLargeCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
