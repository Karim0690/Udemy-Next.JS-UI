"use client";

import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { useParams } from "next/navigation";
import { Grid, Navigation } from "swiper/modules";
import styles from "./topicsSlider.module.css"

// Custom Next Arrow
const SampleNextArrow = ({ onClick, isHidden }) => (
  <div
    className={`custom-next-arrow ${isHidden ? "hidden" : ""}`}
    style={{
      display: isHidden ? "none" : "flex",
      justifyContent: "center",
      alignItems: "center",
      right: "-30px",
      backgroundColor: "#252525",
      position: "absolute",
      zIndex: 10,
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      top: "45px",
    }}
    onClick={onClick}
  >
    <FaChevronRight style={{ color: "white", fontSize: "16px" }} />
  </div>
);

// Custom Previous Arrow
const SamplePrevArrow = ({ onClick, isHidden }) => (
  <div
    className={`custom-prev-arrow ${isHidden ? "hidden" : ""}`}
    style={{
      display: isHidden ? "none" : "flex",
      justifyContent: "center",
      alignItems: "center",
      left: "-30px",
      backgroundColor: "#252525",
      position: "absolute",
      zIndex: 10,
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      top: "45px",
    }}
    onClick={onClick}
  >
    <FaChevronLeft style={{ color: "white", fontSize: "16px" }} />
  </div>
);

const TopicsSlider = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const { locale } = useParams();

  return (
    <div className="relative">
      <SamplePrevArrow
        onClick={() => {
          if (locale === "ar") {
            if (swiperRef.current) swiperRef.current.slideNext();
          } else {
            if (swiperRef.current) swiperRef.current.slidePrev();
          }
        }}
        isHidden={locale === "ar" ? isEnd : isBeginning} // Update isHidden based on locale
      />
      <SampleNextArrow
        onClick={() => {
          if (locale === "ar") {
            if (swiperRef.current) swiperRef.current.slidePrev();
          } else {
            if (swiperRef.current) swiperRef.current.slideNext();
          }
        }}
        isHidden={locale === "ar" ? isBeginning : isEnd} // Update isHidden based on locale
      />
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        grid={{ rows: 2 }}
        slidesPerGroup={4}
        speed={500}
        modules={[Grid, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="text-center w-full h-[160px] mx-auto "
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            grid: { rows: 1 },
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: { rows: 2 },
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            grid: { rows: 2 },
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 3,
            grid: { rows: 2 },
          },
          1280: {
            slidesPerView: 5,
            slidesPerGroup: 4,
            grid: { rows: 2 },
          },
        }}
      >
        {topics.map((topic, index) => (
          <SwiperSlide
            key={index}
            className={`border border-gray-300 py-4 mb-2 flex items-center justify-center ${styles.height}`}
          >
            <h1 className="font-bold text-base text-gray-800">{topic}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const topics = [
  "Python",
  "Web Development",
  "Data Science",
  "JavaScript",
  "React JS",
  "Java",
  "Unreal Engine",
  "Machine Learning",
  "C# (Programming Language)",
  "Unity",
  "C++ (Programming Language)",
  "SQL",
  "Google Flutter",
  "Angular",
  "Artificial Intelligence (AI)",
  "Generative AI (GenAI)",
  "Docker",
  "Deep Learning",
];

export default TopicsSlider;
