import React from "react";
import DragnDrop from "../Goals/DragnDrop/DragnDrop";
import CourseStructure from "../CourseStructure/CourseStructure";
import SetupnTest from "../SetupnTest/SetupnTest";
import FilmnEdit from "../FilmnEdit/FilmnEdit";
import { IoMdInformationCircle } from "react-icons/io";
import Accessibility from "../Accessibility/Accessibility";
import CourseLandingPage from "../CourseLandingPage/CourseLandingPage";
import Price from "../Price/Price";
import Promotions from "../Promotions/Promotions";
import CourseMessages from "../CourseMessages/CourseMessages";
import Curriculum from "../Curriculum/Curriculum";

const CourseManagmentContent = ({
  path,
  course,
  formData,
  setFormData,
  setBasics,
  setMessages,
}) => {
  return (
    <>
      <div className="bg-white shadow-2xl w-full flex-1">
        {path == "goals" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-4 lg:px-14">
              <div>
                <h2 className="text-2xl text-gray-800 font-bold font-serif">
                  Intended learners
                </h2>
              </div>
            </div>
            <div className="py-9 px-4 lg:px-14 max-w-[56rem]">
              <p className="mb-20">
                The following descriptions will be publicly visible on your{" "}
                <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                  Course Landing Page
                </span>{" "}
                and will have a direct impact on your course performance. These
                descriptions will help learners decide if your course is right
                for them.
              </p>
              <DragnDrop
                course={course}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        {path == "course-structure" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14">
              <div>
                <h2 className="text-2xl text-gray-800 font-bold font-serif">
                  Course structure
                </h2>
              </div>
            </div>
            <CourseStructure />
          </div>
        ) : (
          ""
        )}
        {path == "setup" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14">
              <div>
                <h2 className="text-2xl text-gray-800 font-bold font-serif">
                  Setup & test video
                </h2>
              </div>
            </div>
            <SetupnTest />
          </div>
        ) : (
          ""
        )}
        {path == "film" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 md:px-14">
              <div>
                <h2 className="text-2xl text-gray-800 font-bold font-serif">
                  Film & Edit
                </h2>
              </div>
            </div>
            <FilmnEdit />
          </div>
        ) : (
          ""
        )}
        {path == "curriculum" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-14">
              <div>
                <h2 className="text-2xl text-gray-800 font-bold font-serif">
                  Curriculum
                </h2>
              </div>
            </div>
            <Curriculum />
          </div>
        ) : (
          ""
        )}
        {path == "captions" ? (
          <div>
            <div className="border-b border-gray-200 py-6 md:py-9 px-7 lg:px-14 md:flex">
              <div className="flex flex-1 gap-2 flex-wrap items-center">
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold font-serif">
                    Captions
                  </h2>
                </div>
                <div className="flex gap-4">
                  <div className="">
                    <select
                      id="lang-options"
                      name="lang"
                      required
                      className="block w-[130px] border border-black py-3 text-base focus:outline-none bg-transparent text-gray-800 font-bold"
                    >
                      <option value="en">English (US)</option>
                      <option value="ar">Arabic</option>
                    </select>
                  </div>
                  <div className="hidden lg:flex items-center gap-1">
                    0/0 Published lectures captions{" "}
                    <IoMdInformationCircle className="text-xl" />
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="border font-bold border-black text-base p-3">
                  Disable
                </button>
              </div>
            </div>
            <div className="text-base py-4 lg:py-9 px-7 lg:px-10">
              <p className="text-gray-800">
                Learners of all levels of language proficiency highly value
                subtitles as it helps follow, understand and memorize the
                content. Also having subtitles to ensure the content is
                accessible for those that are deaf or hard of hearing is
                crucial.{" "}
                <span className="text-[#5022c3] hover:text-[#3b198f]">
                  Learn more
                </span>
                .
              </p>
              <div className="border border-gray-300 my-10 p-2 md:p-4 flex items-start md:items-center gap-2">
                <IoMdInformationCircle className="text-4xl w-[10%]" />
                <p className="font-bold w-[80%]">
                  When you add video lectures to your course via the{" "}
                  <span className="text-[#5022c3] hover:text-[#3b198f] underline underline-offset-4">
                    Curriculum
                  </span>{" "}
                  you will be able to add captions to those videos here.
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {path == "accessibility" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14 flex gap-4 items-center">
              <h2 className="text-2xl text-gray-800 font-bold font-serif">
                Accessibility
              </h2>
            </div>
            <Accessibility />
          </div>
        ) : (
          ""
        )}
        {path == "basics" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 md:px-14 flex gap-4 items-center">
              <h2 className="text-2xl text-gray-800 font-bold font-serif">
                Course Landing Page
              </h2>
            </div>
            <CourseLandingPage
              course={course}
              setBasics={setBasics}
            />
          </div>
        ) : (
          ""
        )}
        {path == "pricing" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14 flex gap-4 items-center">
              <h2 className="text-2xl text-gray-800 font-bold font-serif">
                Pricing
              </h2>
            </div>
            <Price id={course._id} price={course.price} />
          </div>
        ) : (
          ""
        )}
        {path == "promotions" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14 flex gap-4 items-center">
              <h2 className="text-2xl text-gray-800 font-bold font-serif">
                Promotions
              </h2>
            </div>
            <Promotions />
          </div>
        ) : (
          ""
        )}
        {path == "communications" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14 flex gap-4 items-center">
              <h2 className="text-2xl text-gray-800 font-bold font-serif">
                Course messages
              </h2>
            </div>
            <CourseMessages course={course} setMessages={setMessages} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CourseManagmentContent;
