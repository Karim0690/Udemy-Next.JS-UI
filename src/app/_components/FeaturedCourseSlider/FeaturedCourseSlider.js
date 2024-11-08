"use client";

import StarRating from "@/app/_components/RatingStars/RatingStars";
import Image from "next/image";
import React, { Component, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const SampleNextArrow = ({ onClick, isHidden }) => (
  <div
    className={`custom-next-arrow ${isHidden ? "hidden" : "hidden lg:flex"}`}
    style={{
      // display: isHidden ? "none" : "none lg:flex",
      justifyContent: "center",
      alignItems: "center",
      top: "130px",
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
      top: "130px",
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

const FeaturedCourseSlider = ({ courses }) => {
  let featuredCourses;
  if (courses) {
    featuredCourses = courses.slice(1, 4);
  }

  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const { locale } = useParams();
  // const courses = [
  //   {
  //     title: "Learn Generative AI in Software Testing",
  //     image: "https://img-c.udemycdn.com/course/480x270/6124701_8c3c_2.jpg",
  //     instructor: "Rahul Shetty",
  //     stars: 4.6,
  //     price: 799.99,
  //     updated: "Septemper 2024",
  //     duration: "4 total hours",
  //     lecture: "23 lectures",
  //     level: "All Levels",
  //     persons: 487,
  //     description:
  //       "Learn Prompt engineering skills to generate Test Artifacts, Automation codes and demo of AI powered Testing tools.",
  //   },
  //   {
  //     title: "Complete web development course",
  //     image: "https://img-c.udemycdn.com/course/480x270/6035102_7d1a.jpg",
  //     instructor: "Hitesh Choudhary",
  //     stars: 4.8,
  //     price: 799.99,
  //     updated: "Septemper 2024",
  //     duration: "60 total hours",
  //     lecture: "167 lectures",
  //     persons: 745,
  //     level: "All Levels",
  //     description:
  //       "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
  //   },
  //   {
  //     title: "Unreal Engine 5 C++: Make Your Own Action Combat Game",
  //     image: "https://img-c.udemycdn.com/course/480x270/6079077_9a3c.jpg",
  //     instructor: "GameDev.tv Team and 1 other",
  //     stars: 4.7,
  //     price: 799.99,
  //     updated: "Septemper 2024",
  //     duration: "15.5 total hours",
  //     lecture: "121 lectures",
  //     persons: 20,

  //     level: "intermediate",
  //     description:
  //       "Master Dynamic Combat, AI Challenges, and C++ Techniques to Create Your Own Epic Action Games in UE5",
  //   },
  // ];
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
        slidesPerView={1}
        className="mx-auto bg-gray-100"
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={({ isBeginning, isEnd }) => {
          setIsBeginning(isBeginning);
          setIsEnd(isEnd);
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {featuredCourses &&
          featuredCourses.map((course) => (
            <SwiperSlide key={course._id}>
              <Link href={`/${locale}/course/${course.slug}`}>
                <div className="flex p-6 justify-start">
                  <div className="flex gap-5">
                    <div className="w-1/2 lg:w-[40%] lg:mr-10">
                      <Image
                        src={course.courseImage}
                        width={480}
                        height={270}
                        alt={course.title}
                        className="mr-10"
                      />
                    </div>
                    <div className="w-[50%] flex ml-5 lg:ml-0">
                      <div className="flex flex-col lg:justify-between">
                        <div>
                          <h1 className="font-bold text-lg lg:text-2xl">
                            {course.title}
                          </h1>
                          <p className="text-sm lg:text-base text-gray-700 mb-1">
                            {course.subtitle}
                          </p>
                          <p className="text-xs text-gray-500 mb-1">
                            By {course.instructor.name}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            <div className="text-xs text-green-800">
                              Updated{" "}
                              <strong>
                                {" "}
                                {course.updatedAt
                                  .slice(0, 10)
                                  .split("-")
                                  .reverse()
                                  .join("-")}
                              </strong>
                            </div>
                            <div className="lg:ml-2 text-xs text-gray-500">
                              <p>
                                {course.duration.toFixed(0)} . {course.level}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap lg:gap-1 lg:mb-1">
                            <div className="flex items-center gap-1 lg:gap-2">
                              <p className="text-sm font-bold text-black">
                                {course.rating.average}
                              </p>
                              <StarRating rating={course.rating.average} />
                              <p className="text-xs text-gray-500">
                                ({course.rating.count})
                              </p>
                              <div className="bg-[#fcbca0] px-1">
                                <span className="text-xs font-bold text-[#612012]">
                                  Hot & New
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-base lg:text-2xl font-bold text-gray-900 ">
                          E£{course.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCourseSlider;
