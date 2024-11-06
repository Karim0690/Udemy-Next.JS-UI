"use client";

import CourseComponentCard from "../CourseComponentCard/CourseComponentCard";
import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CoursePopper from "../coursePoper/CoursePopper";
import styles from "./CourseSlider.module.css";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navigation } from "swiper/modules";

const SampleNextArrow = ({ onClick, isHidden }) => (
  <div
    className={`custom-next-arrow ${isHidden ? "hidden" : "hidden lg:flex"}`}
    style={{
      // display: isHidden ? "none" : "none lg:flex",
      justifyContent: "center",
      alignItems: "center",
      top: "60px",
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
      top: "60px",
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

const CoursesSlider = ({ courses }) => {
  const { locale } = useParams();
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  console.log(courses);

  // const [course, setCourse] = useState([]);

  // const fetchCourses = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `${process.env.NEXT_PUBLIC_LOCAL_API}/course/public/courses`
  //     );
  //     if (data.status === "success") {
  //       setCourse(data.data.courses); // Save the fetched data
  //     }
  //   } catch (err) {
  //     console.error("Error fetching courses:", err);
  //   }
  // };

  // useEffect(() => {
  //   fetchCourses(); // Call the fetch function
  // }, []);

  return (
    <div className={`my-10 p-4`}>
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
          slidesPerView={5}
          slidesPerGroup={4}
          className={`mx-auto ${styles.customSlider}`}
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
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
          {courses &&
            courses.map((course, index) => (
              <SwiperSlide key={course._id}>
                <div className="group flex">
                  <div className="relative z-10">
                    <Link href={`/${locale}/course/${course.slug}`}>
                      <CourseComponentCard
                        image={course.courseImage}
                        title={course.title}
                        instructor={course.instructor}
                        rate={course.rating.average}
                        price={course.price}
                      />
                    </Link>
                  </div>
                  <div
                    className={`absolute z-50 -top-24 w-[350px] ${
                      locale === "en" ? "left-full" : "right-full"
                    }  hidden group-hover:block`}
                  >
                    <CoursePopper
                      courseTitle={course.title}
                      courseId={course._id}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
export default CoursesSlider;

const courseData = [
  {
    image: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg",
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    instructor: "Jose Portilla, Pierian Training",
    rate: "4.6",
    price: "E£299.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu, Developer and Lead Instructor",
    rate: "4.7",
    price: "E£349.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg",
    title: "Automate the Boring Stuff with Python Programming",
    instructor: "Al Sweigart",
    rate: "4.6",
    price: "E£399.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla, Pierian Training",
    rate: "4.4",
    price: "E£349.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg",
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    instructor: "Jose Portilla, Pierian Training",
    rate: "4.6",
    price: "E£299.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu, Developer and Lead Instructor",
    rate: "4.7",
    price: "E£349.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg",
    title: "Automate the Boring Stuff with Python Programming",
    instructor: "Al Sweigart",
    rate: "4.6",
    price: "E£399.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla, Pierian Training",
    rate: "4.4",
    price: "E£349.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg",
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    instructor: "Jose Portilla, Pierian Training",
    rate: "4.6",
    price: "E£299.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/2776760_f176_10.jpg",
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu, Developer and Lead Instructor",
    rate: "4.7",
    price: "E£349.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg",
    title: "Automate the Boring Stuff with Python Programming",
    instructor: "Al Sweigart",
    rate: "4.6",
    price: "E£399.99",
  },
  {
    image: "https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg",
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla, Pierian Training",
    rate: "4.4",
    price: "E£349.99",
  },
];
