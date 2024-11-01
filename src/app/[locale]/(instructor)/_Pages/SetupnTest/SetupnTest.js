import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const SetupnTest = () => {
  const t = useTranslations("SetupnTest");
  return (
    <>
      <div className="bg-[#f7f9fa] py-4 p-6 lg:pr-6 lg:pl-12 flex flex-col lg:flex-row lg:items-center">
        <div className="flex-[8]">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            {t("arrange_your_ideal_studio")}
          </h2>
          <p className="text-gray-800 text-lg mt-6">
            {t("important_to_get_audio_video_setup")}
          </p>
        </div>
        <div className="text-center md:flex md:justify-between mt-8 lg:block lg:flex-[4] items-center shadow p-4 lg:ml-6 lg:text-center bg-white">
          <Image
            src="https://s.udemycdn.com/instructor/manage/video-help.jpg"
            width={120}
            height={90}
            alt=""
            className="mx-auto mb-4 md:hidden lg:block w-[120px]"
          />
          <div>
            <h2 className="text-lg font-bold text-[#1a1d23]">
              {t("free_expert_video_help")}
            </h2>
            <p className="text-base text-gray-800 mt-2">
              {t("personalized_advice_audio_video")}
            </p>
          </div>

          <div className="my-4">
            <button className="text-base p-3 border border-black font-bold hover:bg-gray-300">
              {t("create_test_video")}
            </button>
          </div>
        </div>
      </div>
      <div className="p-7 lg:p-14 max-w-[57rem]">
        <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">{t("tips")}</h2>
        <div>
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            {t("equipment_can_be_easy")}
          </h3>
          <p className="text-base text-gray-800">
            {t("you_dont_need_to_buy_fancy_equipment")}
          </p>

          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            {t("students_need_to_hear_you")}
          </h3>
          <p className="text-base text-gray-800">
            {t("good_microphone_is_important")}
          </p>

          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            {t("make_a_studio")}
          </h3>
          <p className="text-base text-gray-800">{t("clean_up_background")}</p>

          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            {t("light_the_scene_and_your_face")}
          </h3>
          <p className="text-base text-gray-800">
            {t("turn_off_overhead_lights")}
          </p>

          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            {t("reduce_noise_and_echo")}
          </h3>
          <p className="text-base text-gray-800">
            {t("turn_off_fans_or_air_vents")}
          </p>

          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            {t("mix_and_match_your_lecture_types")}
          </h3>
          <p className="text-base text-gray-800">
            {t("alternate_between_filming")}
          </p>

          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            {t("be_creative")}
          </h3>
          <p className="text-base text-gray-800">
            {t("students_wont_see_behind_the_scenes")}
          </p>
        </div>
        {/* ****************************** */}
        <div className="mt-12 text-base">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            {t("requirements")}
          </h2>
          <ul className="list-disc mt-8 ml-6 text-gray-800">
            <li className="my-1">{t("film_and_export_hd")}</li>
            <li className="my-1">{t("audio_channels")}</li>
            <li className="my-1">{t("audio_quality")}</li>
          </ul>
        </div>
        {/* ****************************** */}
        <div className="mt-12 text-base">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">Resources</h2>
          <div className="my-8 ">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                {t("teaching_center_guide")}
              </span>
            </h3>
            <p>{t("make_home_studio_budget")}</p>
          </div>
          <div className="my-8">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                {t("udemy_trust_safety")}
              </span>
            </h3>
            <p>{t("policies_for_instructors_students")}</p>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                {t("join_the_community")}
              </span>
            </h3>
            <p>{t("place_to_talk_with_instructors")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetupnTest;
