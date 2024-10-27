import Image from "next/image";
import React from "react";

const CourseStructure = () => {
  return (
    <>
      <div className="bg-[#f7f9fa] py-4 p-4 lg:pr-6 lg:pl-12 flex flex-col lg:flex-row lg:items-center">
        <div className="flex-[8] ">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            There&apos;s a course in you. Plan it out.
          </h2>
          <p className="text-gray-800 text-lg mt-6">
            Planning your course carefully will create a clear learning path for
            students and help you once you film. Think down to the details of
            each lecture including the skill you&apos;ll teach, estimated video
            length, practical activities to include, and how you&apos;ll create
            introductions and summaries.
          </p>
        </div>
        <div className="text-center md:flex md:justify-between mt-8 lg:block lg:flex-[4] items-center shadow p-4 lg:ml-6 lg:text-center bg-white">
          <Image
            src="https://s.udemycdn.com/instructor/manage/library-help.jpg"
            width={120}
            height={90}
            alt=""
            className="mx-auto mb-4 md:hidden lg:block w-[120px]"
          />
          <div>
            <h2 className="text-lg font-bold text-[#1a1d23]">
              Our library of resources
            </h2>
            <p className="text-base text-gray-800 mt-2">
              Tips and guides to structuring a course students love
            </p>
          </div>
          <div className="my-4">
            <button className="text-base p-3 border border-black font-bold hover:bg-gray-300">
              Teaching Center
            </button>
          </div>
        </div>
      </div>
      <div className="p-7 lg:p-14 max-w-[57rem]">
        <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
          Tips
        </h2>
        <div className="text-base">
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            Start with your goals.
          </h3>
          <p className="text-gray-800">
            Setting goals for what learners will accomplish in your course (also
            known as{" "}
            <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
              learning objectives
            </span>
            ) at the beginning will help you determine what content to include
            in your course and how you will teach the content to help your
            learners achieve the goals.
          </p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            Create an outline.
          </h3>
          <p className="text-gray-800">
            Decide what skills you’ll teach and how you’ll teach them. Group
            related lectures into sections. Each section should have at least 3
            lectures, and include at least one assignment or practical activity.
            <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
              Learn more
            </span>
            .
          </p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            Introduce yourself and create momentum.
          </h3>
          <p className="text-gray-800">
            People online want to start learning quickly. Make an introduction
            section that gives learners something to be excited about in the
            first 10 minutes.
          </p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            Sections have a clear learning objective.
          </h3>
          <p className="text-gray-800">
            Introduce each section by describing the section&apos;s{" "}
            <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
              goal and why it’s important
            </span>
            . Give lectures and sections titles that reflect their content and
            have a logical flow.
          </p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            Lectures cover one concept.
          </h3>
          <p className="text-gray-800">
            A good lecture length is 2-7 minutes to keep students interested and
            help them study in short bursts. Cover a single topic in each
            lecture so learners can easily find and re-watch them later.
          </p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            Mix and match your lecture types.
          </h3>
          <p className="text-gray-800">
            Alternate between filming yourself, your screen, and slides or other
            visuals. Showing yourself can help learners feel connected.
          </p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            Practice activities create hands-on learning.
          </h3>
          <p className="text-gray-800">
            Help learners{" "}
            <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
              apply your lessons
            </span>
            to their real world with projects, assignments, coding exercises, or
            worksheets.
          </p>
        </div>
        {/* ****************************** */}
        <div className="mt-12 text-base">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            Requirements
          </h2>
          <ul className="list-disc mt-8 ml-6 text-gray-800">
            <li className="my-1">
              See the{" "}
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                complete list
              </span>{" "}
              of course quality requirements
            </li>
            <li className="my-1">
              Your course must have at least five lectures
            </li>
            <li className="my-1">
              All lectures must add up to at least 30+ minutes of total video
            </li>
            <li className="my-1">
              Your course is composed of valuable educational content and free
              of promotional or distracting materials
            </li>
          </ul>
        </div>
        {/* ****************************** */}
        <div className="mt-12 text-base">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">Resources</h2>
          <div className="my-8">
            <h3 className=" font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                Udemy Trust & Safety
              </span>
            </h3>
            <p>Our policies for instructors and students</p>
          </div>
          <div className="my-8">
            <h3 className=" font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                Join the instructor community
              </span>
            </h3>
            <p>A place to connect with other instructors</p>
          </div>
          <div className="mt-8">
            <h3 className=" font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                Official Udemy Course: How to Create an Online Course
              </span>
            </h3>
            <p>
              Learn about course creation from the Udemy Instructor Team and
              experienced instructors
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseStructure;
