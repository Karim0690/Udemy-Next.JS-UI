import Accessibility from "../Accessibility/Accessibility";
import CourseLandingPage from "../CourseLandingPage/CourseLandingPage";
import CourseMessages from "../CourseMessages/CourseMessages";
import CourseStructure from "../CourseStructure/CourseStructure";
import Curriculum from "../Curriculum/Curriculum";
import FilmnEdit from "../FilmnEdit/FilmnEdit";
import DragnDrop from "../Goals/DragnDrop/DragnDrop";
import Price from "../Price/Price";
import Promotions from "../Promotions/Promotions";
import SetupnTest from "../SetupnTest/SetupnTest";
import { useTranslations } from "next-intl";
import React from "react";
import { IoMdInformationCircle } from "react-icons/io";

const CourseManagmentContent = ({
  path,
  course,
  formData,
  setFormData,
  setBasics,
  setMessages,
}) => {
  const t = useTranslations("CourseManagmentContent");
  return (
    <>
      <div className="bg-white shadow-2xl w-full flex-1">
        {" "}
        {path == "goals" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-4 lg:px-14">
              <div>
                <h2 className="text-2xl text-gray-800 font-bold font-serif">
                  {" "}
                  {t("intended_learners")}{" "}
                </h2>{" "}
              </div>{" "}
            </div>{" "}
            <div className="py-9 px-4 lg:px-14 max-w-[56rem]">
              <p className="mb-20">
                {" "}
                {t("public_descriptions")}{" "}
                <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                  {" "}
                  {t("course_landing_page")}{" "}
                </span>{" "}
                {t("course_impact_description")}{" "}
              </p>{" "}
              <DragnDrop
                course={course}
                formData={formData}
                setFormData={setFormData}
              />{" "}
            </div>{" "}
          </div>
        ) : (
          ""
        )}{" "}
        {path == "course-structure" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14">
              <div>
                <h2 className="text-2xl text-gray-800 font-bold font-serif">
                  {" "}
                  {t("course_structure")}{" "}
                </h2>{" "}
              </div>{" "}
            </div>{" "}
            <CourseStructure />
          </div>
        ) : (
          ""
        )}{" "}
        {path == "setup" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14">
              <div>
                <h2 className="text-2xl text-gray-800 font-bold font-serif">
                  {" "}
                  {t("setup_test_video")}{" "}
                </h2>{" "}
              </div>{" "}
            </div>{" "}
            <SetupnTest />
          </div>
        ) : (
          ""
        )}{" "}
        {path == "film" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 md:px-14">
              <div>
                <h2 className="text-2xl text-gray-800 font-bold font-serif">
                  {" "}
                  {t("film_edit")}{" "}
                </h2>{" "}
              </div>{" "}
            </div>{" "}
            <FilmnEdit />
          </div>
        ) : (
          ""
        )}{" "}
        {path == "curriculum" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-14">
              <div>
                <h2 className="text-2xl text-gray-800 font-bold font-serif">
                  {" "}
                  {t("curriculum")}{" "}
                </h2>{" "}
              </div>{" "}
            </div>{" "}
            <Curriculum />
          </div>
        ) : (
          ""
        )}{" "}
        {path == "captions" ? (
          <div>
            <div className="border-b border-gray-200 py-6 md:py-9 px-7 lg:px-14 md:flex">
              <div className="flex flex-1 gap-2 flex-wrap items-center">
                <div>
                  <h2 className="text-2xl text-gray-800 font-bold font-serif">
                    {" "}
                    {t("captions")}{" "}
                  </h2>{" "}
                </div>{" "}
                <div className="flex gap-4">
                  <div className="">
                    <select
                      id="lang-options"
                      name="lang"
                      required
                      className="block w-[130px] border border-black py-3 text-base focus:outline-none bg-transparent text-gray-800 font-bold"
                    >
                      <option value="en"> {t("english_us")} </option>{" "}
                      <option value="ar"> {t("arabic")} </option>{" "}
                    </select>{" "}
                  </div>{" "}
                  <div className="hidden lg:flex items-center gap-1">
                    {" "}
                    {t("published_lectures_captions")}{" "}
                    <IoMdInformationCircle className="text-xl" />
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="mt-4 md:mt-0">
                <button className="border font-bold border-black text-base p-3">
                  {" "}
                  {t("disable")}{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="text-base py-4 lg:py-9 px-7 lg:px-10">
              <p className="text-gray-800">
                {" "}
                {t("subtitles_importance")}{" "}
                <span className="text-[#5022c3] hover:text-[#3b198f]">
                  {" "}
                  {t("learn_more")}{" "}
                </span>
                .{" "}
              </p>{" "}
              <div className="border border-gray-300 my-10 p-2 md:p-4 flex items-start md:items-center gap-2">
                <IoMdInformationCircle className="text-4xl w-[10%]" />
                <p className="font-bold w-[80%]">
                  {" "}
                  {t("add_video_lectures")}{" "}
                  <span className="text-[#5022c3] hover:text-[#3b198f] underline underline-offset-4">
                    {" "}
                    {t("curriculum")}{" "}
                  </span>{" "}
                  {t("add_captions_info")}{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ) : (
          ""
        )}{" "}
        {path == "accessibility" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14 flex gap-4 items-center">
              <h2 className="text-2xl text-gray-800 font-bold font-serif">
                {" "}
                {t("accessibility")}{" "}
              </h2>{" "}
            </div>{" "}
            <Accessibility />
          </div>
        ) : (
          ""
        )}{" "}
        {path == "basics" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 md:px-14 flex gap-4 items-center">
              <h2 className="text-2xl text-gray-800 font-bold font-serif">
                {" "}
                {t("course_landing_page")}{" "}
              </h2>{" "}
            </div>{" "}
            <CourseLandingPage course={course} setBasics={setBasics} />{" "}
          </div>
        ) : (
          ""
        )}{" "}
        {path == "pricing" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14 flex gap-4 items-center">
              <h2 className="text-2xl text-gray-800 font-bold font-serif">
                {" "}
                {t("pricing")}{" "}
              </h2>{" "}
            </div>{" "}
            <Price id={course._id} price={course.price} />{" "}
          </div>
        ) : (
          ""
        )}{" "}
        {path == "promotions" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14 flex gap-4 items-center">
              <h2 className="text-2xl text-gray-800 font-bold font-serif">
                {" "}
                {t("promotions")}{" "}
              </h2>{" "}
            </div>{" "}
            <Promotions />
          </div>
        ) : (
          ""
        )}{" "}
        {path == "messages" ? (
          <div>
            <div className="border-b border-gray-200 py-9 px-7 lg:px-14 flex gap-4 items-center">
              <h2 className="text-2xl text-gray-800 font-bold font-serif">
                {" "}
                {t("course_messages")}{" "}
              </h2>{" "}
            </div>{" "}
            <CourseMessages course={course} setMessages={setMessages} />{" "}
          </div>
        ) : (
          ""
        )}{" "}
      </div>{" "}
    </>
  );
};

export default CourseManagmentContent;
