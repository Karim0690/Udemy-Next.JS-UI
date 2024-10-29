import { useTranslations } from "next-intl";
import React from "react";

export default function Topics_Categories() {
  const t = useTranslations("LandingPage");

  return (
    <>
      <div className="px-8 bg-gray-50 py-16 font-sans">
        <h1 className="font-semibold tracking-normal text-2xl md:text-3xl my-8 text-gray-800">
          {t("Featured")}
        </h1>
        <div className="flex justify-between flex-wrap">
          {/* Development */}
          <div className="pr-1 w-[50%] md:w-[25%]">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {t("Development")}
            </h3>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                {t("python")}
              </a>
              <div className="text-sm text-gray-500">
                36,354,994 {t("learners")}
              </div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                {t("web")}
              </a>
              <div className="text-sm text-gray-500">
                11,415,615 {t("learners")}
              </div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                {t("ml")}
              </a>
              <div className="text-sm text-gray-500">
                7,070,015 {t("learners")}
              </div>
            </div>
          </div>
          {/* Business */}
          <div className="pl-1 w-[50%] md:w-[25%]">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {t("Business")}
            </h3>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                {t("fa")}
              </a>
              <div className="text-sm text-gray-500">
                1,195,282 {t("learners")}
              </div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                SQL
              </a>
              <div className="text-sm text-gray-500">
                5,977,561 {t("learners")}
              </div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                PMP
              </a>
              <div className="text-sm text-gray-500">
                1,733,398 {t("learners")}
              </div>
            </div>
          </div>
          {/* IT */}
          <div className="pr-1 md:pr-0 pl-0 md:pl-1 w-[50%] md:w-[25%]">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {t("IT")}
            </h3>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                {t("aws")}
              </a>
              <div className="text-sm text-gray-500">
                6,123,456 {t("learners")}
              </div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                {t("Hacking")}
              </a>
              <div className="text-sm text-gray-500">
                10,931,066 {t("learners")}
              </div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                {t("Cyber")}
              </a>
              <div className="text-sm text-gray-500">
                3,998,037 {t("learners")}
              </div>
            </div>
          </div>
          {/* Design */}
          <div className="pl-1 w-[50%] md:w-[25%]">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {t("Design")}
            </h3>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                {t("Photoshop")}
              </a>
              <div className="text-sm text-gray-500">
                10,909,736 {t("learners")}
              </div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                {t("Graphic")}
              </a>
              <div className="text-sm text-gray-500">
                3,381,052 {t("learners")}
              </div>
            </div>
            <div className="mb-4">
              <a
                href="#"
                className="underline font-bold text-base text-[#5022c3]"
              >
                {t("drawing")}
              </a>
              <div className="text-sm text-gray-500">
                2,410,849 {t("learners")}
              </div>
            </div>
          </div>
          <a href="https://www.example.com" className="mt-6 inline-block">
            <button className="hover:bg-gray-300 border-black border border-solid h-10 px-3 ">
              <span className="text-black font-semibold">
                {t("TopicsExplore")}
              </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
