"use client";
import React from "react";
import CoursesSlider from "../CoursesSlider/CoursesSlider";
import { useTranslations } from "next-intl";

function LandingPageSection5() {
  const t = useTranslations("LandingPage");

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="mx-10 mt-20">
        <div>
          <h1 className="text-3xl font-bold text-gray-700">
            {t("learnersView")}
          </h1>
        </div>
      </div>
      <div className="mx-auto py-8">
        <div>
          <div className="p-6 text-black">
            <div>
              <div className="">
                <CoursesSlider settings={settings} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageSection5;
