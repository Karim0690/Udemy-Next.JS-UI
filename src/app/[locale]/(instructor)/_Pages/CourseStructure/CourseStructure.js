import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const CourseStructure = () => {
  const t = useTranslations("CourseStructure");
  return (
    <>
      <div className="bg-[#f7f9fa] py-4 p-4 lg:pr-6 lg:pl-12 flex flex-col lg:flex-row lg:items-center">
        <div className="flex-[8] ">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            {t("course_plan")}
          </h2>
          <p className="text-gray-800 text-lg mt-6">{t("course_planning")}</p>
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
              {t("library_resources")}
            </h2>
            <p className="text-base text-gray-800 mt-2">{t("tips_guides")}</p>
          </div>
          <div className="my-4">
            <button className="text-base p-3 border border-black font-bold hover:bg-gray-300">
              {t("teaching_center")}
            </button>
          </div>
        </div>
      </div>
      <div className="p-7 lg:p-14 max-w-[57rem]">
        <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">{t("tips")}</h2>
        <div className="text-base">
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            {t("start_with_goals")}
          </h3>
          <p className="text-gray-800">
            {t("setting_goals")}
            <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
              {t("learning_objectives")}
            </span>
            {t("content_inclusion")}
          </p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            {t("create_outline")}
          </h3>
          <p className="text-gray-800">
            {t("decide_skills")}
            <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
              {t("learn_more")}
            </span>
            .
          </p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            {t("introduce_yourself")}
          </h3>
          <p className="text-gray-800">{t("introduction_section")}</p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            {t("section_learning_objective")}
          </h3>
          <p className="text-gray-800">
            {t("section_description")}
            <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
              {t("section_goal_importance")}
            </span>
            {t("lectures_sections_titles")}
          </p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            {t("lectures_cover_one_concept")}
          </h3>
          <p className="text-gray-800">{t("good_lecture_length")}</p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            {t("mix_and_match_lecture_types")}
          </h3>
          <p className="text-gray-800">{t("alternate_lecture_formats")}</p>
          {/*  */}
          <h3 className=" font-bold text-[#1a1d23] mt-10 mb-1">
            {t("practice_activities")}
          </h3>
          <p className="text-gray-800">
            {t("help_learners")}{" "}
            <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
              {t("apply_lessons")}
            </span>
            {t("real_world_application")}
          </p>
        </div>
        {/* ****************************** */}
        <div className="mt-12 text-base">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            {t("requirements")}
          </h2>
          <ul className="list-disc mt-8 ml-6 text-gray-800">
            <li className="my-1">
              {t("see_the")}{" "}
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                {t("complete_list")}
              </span>{" "}
              {t("course_quality_requirements")}
            </li>
            <li className="my-1">{t("at_least_five_lectures")}</li>
            <li className="my-1">{t("total_video_duration")}</li>
            <li className="my-1">{t("valuable_content")}</li>
          </ul>
        </div>
        {/* ****************************** */}
        <div className="mt-12 text-base">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">Resources</h2>
          <div className="my-8">
            <h3 className=" font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                {t("udemy_trust_safety")}
              </span>
            </h3>
            <p>{t("trust_safety_description")}</p>
          </div>
          <div className="my-8">
            <h3 className=" font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                {t("join_instructor_community")}
              </span>
            </h3>
            <p>{t("instructor_community_description")}</p>
          </div>
          <div className="mt-8">
            <h3 className=" font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                {t("official_udemy_course")}
              </span>
            </h3>
            <p>{t("course_creation_description")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseStructure;
