"use client";

import InstructorCard from "../InstructorCard/InstructorCard";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useParams } from "next/navigation";
import { Navigation } from "swiper/modules";

const InstructorSlider = () => {
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
        ref={swiperRef}
        spaceBetween={5}
        slidesPerView={4}
        slidesPerGroup={3}
        className="h-[150px] lg:h-[200px] mx-auto "
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={({ isBeginning, isEnd }) => {
          setIsBeginning(isBeginning);
          setIsEnd(isEnd);
        }}
      >
        {instructors.map((instructor, index) => (
          <SwiperSlide key={index}>
            <InstructorCard {...instructor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstructorSlider;
const SampleNextArrow = ({ onClick, isHidden }) => (
  <div
    className={`custom-next-arrow ${isHidden ? "hidden" : "hidden lg:flex"}`}
    style={{
      // display: isHidden ? "none" : "none lg:flex",
      justifyContent: "center",
      alignItems: "center",
      top: "50px",
      right: "-10px",
      backgroundColor: "#252525",
      position: "absolute",
      zIndex: "10",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    }}
    onClick={onClick}
  >
    <FaChevronRight style={{ color: "white", fontSize: "16px" }} />
  </div>
);

// Custom Previous Arrow
const SamplePrevArrow = ({ onClick, isHidden }) => (
  <div
    className={`custom-prev-arrow ${isHidden ? "hidden" : "hidden lg:flex"}`}
    style={{
      // display: isHidden ? "none" : "none lg:flex",
      justifyContent: "center",
      alignItems: "center",
      top: "50px",
      left: "-30px",
      backgroundColor: "#252525",
      position: "absolute",
      zIndex: "10",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    }}
    onClick={onClick}
  >
    <FaChevronLeft style={{ color: "white", fontSize: "16px" }} />
  </div>
);

const instructors = [
  {
    image: "https://img-c.udemycdn.com/user/100x100/31334738_a13c_3.jpg",
    name: "Dr. Angela Yu, Developer and Lead Instructor",
    lable: "Python, Data Science",
    rating: 4.7,
    courses: 7,
    students: "2,884,610",
  },
  {
    image: "https://img-c.udemycdn.com/user/100x100/13952972_e853.jpg",
    name: "Academind by Maximilian Schwarzmüller",
    lable: "React JS, React Hooks",
    rating: 4.6,
    courses: 47,
    students: "3,069,472",
  },
  {
    image: "https://img-c.udemycdn.com/user/100x100/9685726_67e7_4.jpg",
    name: "Jose Portilla",
    lable: "Python, Data Science",
    rating: 4.6,
    courses: 87,
    students: "4,012,459",
  },
  {
    image: "https://img-c.udemycdn.com/user/100x100/7799204_2091_5.jpg",
    name: "Jonas Schmedtmann",
    lable: "JavaScript, React JS",
    rating: 4.7,
    courses: 7,
    students: "2,030,524",
  },
  {
    image: "https://img-c.udemycdn.com/user/100x100/4466306_6fd8_3.jpg",
    name: "Colt Steele",
    lable: "Web Development, MySQL",
    rating: 4.7,
    courses: 30,
    students: "1,777,338",
  },
  {
    image: "https://img-c.udemycdn.com/user/100x100/13952972_e853.jpg",
    name: "Maximilian Schwarzmüller",
    lable: "Angular, Next.js",
    rating: 4.6,
    courses: 62,
    students: "3,106,260",
  },
];
