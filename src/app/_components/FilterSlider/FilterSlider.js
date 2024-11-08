"use client";

import CoursesSlider from "../CoursesSlider/CoursesSlider";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const FilterSlider = ({courses}) => {
  const [activeTab, setActiveTab] = useState("MostPopular");
  const t = useTranslations("Categories");
  

  return (
    <>
      {/* Course cards */}
      <div className=" mx-12  font-sans">
        <div className="text-sm font-bold text-center text-gray-500">
          <ul className="flex border-b-2 border-gray-200 ">
            <li>
              <div
                className={`inline-block p-4 rounded-t-lg hover:cursor-pointer ${
                  activeTab === "MostPopular"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("MostPopular")}
              >
                {t("popular")}
              </div>
            </li>

            <li>
              <div
                className={`inline-block p-4  rounded-t-lg hover:cursor-pointer ${
                  activeTab === "New"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("New")}
              >
                {t("new")}
              </div>
            </li>

            <li>
              <div
                className={`inline-block p-4  rounded-t-lg hover:cursor-pointer ${
                  activeTab === "Trending"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("Trending")}
              >
                {t("trending")}
              </div>
            </li>
          </ul>
        </div>
        <div className=" text-black mt-10">
          {activeTab === "MostPopular" && <CoursesSlider courses={courses}/>}

          {activeTab === "New" && <CoursesSlider courses={courses}/>}

          {activeTab === "Trending" && <CoursesSlider courses={courses}/>}
        </div>
      </div>
    </>
  );
};

export default FilterSlider;
