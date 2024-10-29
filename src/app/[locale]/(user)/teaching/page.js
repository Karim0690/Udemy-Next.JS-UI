import LearningMenu from "../../../_components/LearningMenu/LearningMenu";
import { TeachingAccordion } from "../../../_components/TeachingAccordion/TeachingAccordion";
import TeachingSlider from "../../../_components/TeachingSlider/TeachingSlider";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Page = ({ params: { locale } }) => {
  const t = useTranslations("Teaching");

  const reasons = [
    {
      icon: "https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg",
      title: t("reasons11"),
      description: t("reasons12"),
    },
    {
      icon: "https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg",
      title: t("reasons21"),
      description: t("reasons22"),
    },
    {
      icon: "https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg",
      title: t("reasons31"),
      description: t("reasons32"),
    },
  ];
  return (
    <>
      <div className="relative">
        <Image
          src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg"
          width={1800}
          height={600}
          alt=""
          className="hidden md:block w-full md:h-[28rem] lg:h-[36rem] object-cover"
        />
        <Image
          src="https://s.udemycdn.com/teaching/billboard-mobile-v3.jpg"
          width={650}
          height={650}
          alt=""
          className="block md:hidden w-full align-middle"
        />
        <div
          className={`relative md:absolute flex-1 ${
            locale === "ar" ? "left-0 md:ml-0 lg:ml-0" : "md:ml-10 lg:ml-20"
          }  md:top-1/2 transform md:-translate-y-1/2 p-4 sm:w-full md:w-[18rem] lg:w-[23rem]`}
        >
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-2">
            {t("banner1")}
          </h1>
          <p className="text-gray-700 text-sm md:text-base lg:text-xl">
            {t("banner2")}
          </p>
          <button className="py-3 px-6 mt-3 w-full bg-[#2D2F31] text-white text-sm md:text-xs lg:text-sm font-extrabold hover:bg-gray-700">
            {t("bannerButton")}
          </button>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col justify-center items-center my-28">
        <h1 className="font-bold text-xl lg:text-5xl text-gray-800 mb-4">
          {t("reasons")}
        </h1>
        <div className="flex flex-col md:flex-row justify-center lg:justify-between text-center w-full px-10 md:px-0 lg:px-20">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`flex flex-col items-center max-w-[340px] ${
                index === 1 || index === 2
                  ? "lg:ml-0 md:ml-10 mt-10 md:mt-0"
                  : ""
              }`}
            >
              <Image
                src={reason.icon}
                width={100}
                height={100}
                alt=""
                className="mb-4"
              />
              <h2 className="font-bold text-lg sm:text-xl text-gray-800 mb-1">
                {reason.title}
              </h2>
              <p className="text-gray-800 text-base sm:text-base w-full">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="font-sans	flex flex-wrap justify-evenly items-center my-20 bg-[#5022c3] px-1 py-10 sm:py-12 sm:px-0 lg:p-16 text-white text-center gap-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl sm:text-4xl mb-2">73{t("M")}</h1>
          <h2 className="text-sm sm:text-base">{t("Students")}</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl sm:text-4xl mb-2">75+</h1>
          <h2 className="text-sm sm:text-base">{t("Languages")}</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl sm:text-4xl mb-2">1{t("B")}</h1>
          <h2 className="text-sm sm:text-base">{t("Enrollments")}</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl sm:text-4xl mb-2">180+</h1>
          <h2 className="text-sm sm:text-base">{t("Countries")}</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl sm:text-4xl mb-2">16,000+</h1>
          <h2 className="text-sm sm:text-base">{t("Enterprise")}</h2>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center my-20 p-10 text-center">
        <h1 className="font-bold text-2xl md:text-5xl text-gray-800 mb-4">
          {t("Begin")}
        </h1>
        <div className="hidden lg:block">
          <LearningMenu />
        </div>
        <div className="block lg:hidden w-full">
          <TeachingAccordion />
        </div>
      </div>

      <TeachingSlider />

      <div className="flex flex-col lg:flex-row justify-between items-center my-20 text-center relative py-10 lg:py-20 md:px-6 lg:px-20 overflow-hidden">
        <Image
          src="https://s.udemycdn.com/teaching/support-1-v3.jpg"
          width={460}
          height={460}
          alt=""
          className="block md:block lg:absolute -left-24"
        />

        <div className="flex flex-col justify-center items-center w-full px-5">
          <div className="w-1/2">
            <h3 className="mb-6 text-lg md:text-4xl font-bold text-gray-800">
              {t("doAlone")}
            </h3>
            <p className="text-sm md:text-lg mb-6 md:mx-10 ">
              {t("doAlonet1")} <strong>{t("doAlonet2")}</strong>{" "}
              {t("doAlonet3")} <strong>{t("doAlonet4")}</strong>{" "}
              {t("doAlonet5")} <strong>{t("doAlonet6")}</strong>.
            </p>
            <span className="text-sm md:text-md font-bold underline text-[#5022c3] hover:text-purple-950 decoration-purple-800 decoration-1 underline-offset-4">
              {t("doAlonet7")}
            </span>
          </div>
        </div>

        <Image
          src="https://s.udemycdn.com/teaching/support-2-v3.jpg"
          width={460}
          height={460}
          alt=""
          className="hidden lg:block absolute -right-16"
        />
      </div>

      <div className="bg-[#f7f9fa]">
        <div className="flex flex-col justify-center items-center px-[2.4rem] py-[6rem] text-gray-800 text-center ">
          <h2 className="font-bold md:text-4xl text-2xl mb-4">{t("become")}</h2>
          <p className="text-[12px] md:text-2xl  mb-1 md:w-[580px] text-gray-700">
            {t("join")}
          </p>
          <button className="py-4 px-6 mt-5 w-[350px] bg-[#2D2F31] text-white text-sm font-extrabold hover:bg-gray-700">
            {t("bannerButton")}
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
