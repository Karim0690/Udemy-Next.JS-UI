import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Become_Instractor() {
  const t = useTranslations("LandingPage");

  return (
    <>
      <div className="mt-[6.4rem] mb-[4rem]">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="mr-24 hidden lg:block">
              <Image
                src="https://s.udemycdn.com/home/non-student-cta/instructor-2x-v3.jpg"
                alt="Volkswagen logo gray and white logo"
                width={400}
                height={400}
              />
            </div>
            <div className="mb-10 block lg:hidden">
              <Image
                src="https://s.udemycdn.com/home/non-student-cta/instructor-mobile-v3.jpg"
                alt="Volkswagen logo gray and white logo"
                width={600}
                height={450}
              />
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left w-full max-w-[560px] lg:max-w-[430px]">
              <h3 className="font-bold text-3xl text-gray-800 mb-4">
                {t("becomeInstructor")}
              </h3>
              <div className="mb-4 text-[16px] lg:text-lg text-gray-600">
                {t("becomeInstructor1")}
              </div>
              <button className="bg-[#2D2F31] border-black border-2 border-solid h-12 w-[90%] lg:w-[45%]">
                <span className="text-white font-bold px-2">
                  {t("becomeInstructorButton")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
