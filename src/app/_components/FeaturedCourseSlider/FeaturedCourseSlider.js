import StarRating from "@/app/_components/RatingStars/RatingStars";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: "-30px",
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
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
}

const FeaturedCourseSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const courses = [
    {
      title: "Learn Generative AI in Software Testing",
      image: "https://img-c.udemycdn.com/course/480x270/6124701_8c3c_2.jpg",
      instructor: "Rahul Shetty",
      stars: 4.6,
      price: 799.99,
      updated: "Septemper 2024",
      duration: "4 total hours",
      lecture: "23 lectures",
      level: "All Levels",
      persons: 487,
      description:
        "Learn Prompt engineering skills to generate Test Artifacts, Automation codes and demo of AI powered Testing tools.",
    },
    {
      title: "Complete web development course",
      image: "https://img-c.udemycdn.com/course/480x270/6035102_7d1a.jpg",
      instructor: "Hitesh Choudhary",
      stars: 4.8,
      price: 799.99,
      updated: "Septemper 2024",
      duration: "60 total hours",
      lecture: "167 lectures",
      persons: 745,
      level: "All Levels",
      description:
        "Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc",
    },
    {
      title: "Unreal Engine 5 C++: Make Your Own Action Combat Game",
      image: "https://img-c.udemycdn.com/course/480x270/6079077_9a3c.jpg",
      instructor: "GameDev.tv Team and 1 other",
      stars: 4.7,
      price: 799.99,
      updated: "Septemper 2024",
      duration: "15.5 total hours",
      lecture: "121 lectures",
      persons: 20,

      level: "intermediate",
      description:
        "Master Dynamic Combat, AI Challenges, and C++ Techniques to Create Your Own Epic Action Games in UE5",
    },
  ];
  return (
    <>
      <Slider {...settings} className="flex">
        {courses.map((course, index) => (
          <div key={index + 1} className="flex p-6 justify-start">
            <div className="flex">
              <div className="w-1/2 lg:w-[40%] lg:mr-10">
                <Image
                  src={course.image}
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
                      {course.description}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">
                      By {course.instructor}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <div className="text-xs text-green-800">
                        Updated <strong>{course.updated}</strong>
                      </div>
                      <div className="lg:ml-2 text-xs text-gray-500">
                        <p>
                          {course.duration} . {course.lecture} . {course.level}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap lg:gap-1 lg:mb-1">
                      <div className="flex items-center gap-1 lg:gap-2">
                        <p className="text-sm font-bold text-black">
                          {course.stars}
                        </p>
                        <StarRating rating={course.stars} />
                        <p className="text-xs text-gray-500">
                          ({course.persons})
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
        ))}
      </Slider>
    </>
  );
};

export default FeaturedCourseSlider;
