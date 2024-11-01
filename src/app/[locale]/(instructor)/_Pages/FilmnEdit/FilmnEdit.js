import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const FilmnEdit = () => {
  const t = useTranslations("FilmnEdit");
  return (
    <>
      <div className="bg-[#f7f9fa] py-4 p-4 lg:pr-6 lg:pl-12 flex flex-col lg:flex-row lg:items-center">
        <div className="flex-[8]">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            {t("readyToShareKnowledge")}
          </h2>
          <p className="text-gray-800 text-lg mt-6">{t("thisIsYourMoment")}</p>
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
              {t("youAreInGoodCompany")}
            </h2>
            <p className="text-base text-gray-800 mt-2">
              {t("chatAndGetProductionHelp")}
            </p>
          </div>
          <div className="my-4">
            <button className="text-base p-3 border border-black font-bold hover:bg-gray-300">
              {t("joinTheCommunity")}
            </button>
          </div>
        </div>
      </div>
      <div className="p-7 lg:p-14 max-w-[57rem]">
        <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">{t("tips")}</h2>
        <div className="text-base">
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            {t("take_breaks_review")}
          </h3>
          <p className="text-gray-800">{t("check_for_changes")}</p>
          {/*  */}
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            {t("build_rapport")}
          </h3>
          <p className="text-gray-800">{t("students_want_to_know")}</p>
          {/*  */}
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            {t("being_on_camera")}
          </h3>
          <p className="text-gray-800">{t("make_eye_contact")}</p>
          {/*  */}
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            {t("set_up_for_editing_success")}
          </h3>
          <p className="text-gray-800">{t("edit_out_unwanted_parts")}</p>
          {/*  */}
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            {t("create_audio_marks")}
          </h3>
          <p className="text-gray-800">{t("clap_for_audio_spike")}</p>
          {/*  */}
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            {t("for_screencasts_clean_up")}
          </h3>
          <p className="text-gray-800">{t("clean_up_screencasts")}</p>
          {/*  */}
        </div>
        {/* ****************************** */}
        <div className="mt-12 text-base">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            {t("requirements")}
          </h2>
          <ul className="list-disc mt-8 ml-6 text-gray-800">
            <li className="my-1">{t("requirements_list.film_hd")},</li>
            <li className="my-1">{t("requirements_list.audio_channels")},</li>
            <li className="my-1">{t("requirements_list.audio_quality")}</li>
          </ul>
        </div>
        {/* ****************************** */}
        <div className="mt-12 text-base">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            {t("resources")}
          </h2>
          <div className="my-8">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                {t("createTestVideo")}
              </span>
            </h3>
            <p> {t("getFeedbackBeforeFilming")}</p>
          </div>
          <div className="my-8">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                {t("teachingCenterGuideToQualityAV")}
              </span>
            </h3>
            <p>{t("filmAndEditWithConfidence")} </p>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                {t("udemyTrustAndSafety")}
              </span>
            </h3>
            <p> {t("ourPoliciesForInstructorsAndStudents")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmnEdit;
