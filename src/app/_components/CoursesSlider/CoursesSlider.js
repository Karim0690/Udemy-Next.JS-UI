"use client";

import CourseComponentCard from "../CourseComponentCard/CourseComponentCard";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Navigation } from "swiper/modules";

const SampleNextArrow = ({ onClick, isHidden }) => (
  <div
    className={`custom-next-arrow ${isHidden ? "hidden" : "hidden lg:flex"}`}
    style={{
      // display: isHidden ? "none" : "none lg:flex",
      justifyContent: "center",
      alignItems: "center",
      top: "100px",
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
      top: "100px",
      left: "-11px",
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

const CoursesSlider = () => {
  const { locale } = useParams();
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className={`bg-gray-100 my-10 p-10`}>
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
          slidesPerGroup={2}
          className="h-[200px] lg:h-[280px] mx-auto "
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
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
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
              title="The Complete Python Bootcamp From Zero to Hero in Python"
              instractour="Jose Portilla, Pierian Training"
              rate="4.6"
              price="E£299.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg"
              title="100 Days of Code: The Complete Python Pro Bootcamp"
              instractour="Dr. Angela Yu, Developer and Lead Instructor"
              rate="4.7"
              price="E£349.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg"
              title="Automate the Boring Stuff with Python Programming"
              instractour="Al Sweigart"
              rate="4.6"
              price="E£399.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg"
              title="Python for Data Science and Machine Learning Bootcamp"
              instractour="Jose Portilla, Pierian Training"
              rate="4.4"
              price="E£349.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
              title="The Complete Python Bootcamp From Zero to Hero in Python"
              instractour="Jose Portilla, Pierian Training"
              rate="4.6"
              price="E£299.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg"
              title="100 Days of Code: The Complete Python Pro Bootcamp"
              instractour="Dr. Angela Yu, Developer and Lead Instructor"
              rate="4.7"
              price="E£349.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg"
              title="Automate the Boring Stuff with Python Programming"
              instractour="Al Sweigart"
              rate="4.6"
              price="E£399.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg"
              title="Python for Data Science and Machine Learning Bootcamp"
              instractour="Jose Portilla, Pierian Training"
              rate="4.4"
              price="E£349.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg"
              title="The Complete Python Bootcamp From Zero to Hero in Python"
              instractour="Jose Portilla, Pierian Training"
              rate="4.6"
              price="E£299.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg"
              title="100 Days of Code: The Complete Python Pro Bootcamp"
              instractour="Dr. Angela Yu, Developer and Lead Instructor"
              rate="4.7"
              price="E£349.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg"
              title="Automate the Boring Stuff with Python Programming"
              instractour="Al Sweigart"
              rate="4.6"
              price="E£399.99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CourseComponentCard
              image="https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg"
              title="Python for Data Science and Machine Learning Bootcamp"
              instractour="Jose Portilla, Pierian Training"
              rate="4.4"
              price="E£349.99"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default CoursesSlider;
