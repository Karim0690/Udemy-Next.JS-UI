"use client";
import React, { useState } from "react";
import CoursesSlider from "../CoursesSlider/CoursesSlider";

const FilterSlider = () => {
  const [activeTab, setActiveTab] = useState("MostPopular");
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
                Most Popular
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
                New
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
                Trending
              </div>
            </li>
          </ul>
        </div>
        <div className=" text-black mt-10">
          {activeTab === "MostPopular" && <CoursesSlider settings={settings} />}

          {activeTab === "New" && <CoursesSlider />}

          {activeTab === "Trending" && <CoursesSlider />}
        </div>
      </div>
    </>
  );
};

export default FilterSlider;
