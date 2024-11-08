"use client";
import Image from "next/image";
import React, { useState } from "react";
import CoursePrice from "../CorusePrice/CoursePrice";
import HeartButton from "../HeartButton/HeartButton";
import { useTranslations } from "next-intl";

const StudentsAlsoBought = ({ courses }) => {
  const t = useTranslations("CoursePage")
  const [showMore, setShowMore] = useState(false);
  const itemsToShow = showMore ? courses.length : 3;

  const toggleShowMore = () => setShowMore(!showMore);

  // Check if courses are available
  if (!courses || courses.length === 0) {
    return <div></div>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl mb-2 font-bold text-slate-800">
        Students also bought
      </h2>
      <div className="flex flex-auto flex-col">
        {courses.slice(0, itemsToShow).map((course, index) => {
          const dateString = course.updatedAt; // Use updatedAt from the course
          const date = new Date(dateString);

          // Format the date
          const day = String(date.getUTCDate()).padStart(2, "0");
          const month = String(date.getUTCMonth() + 1).padStart(2, "0");
          const year = date.getUTCFullYear();

          const formattedDate = `${month}/${year}`;

          return (
            <div
              key={course.id || index}
              className="flex md:items-center border-b p-1 md:p-4 rounded-lg"
            >
              <Image
                src={course.courseImage || "/placeholder.jpg"}
                alt={course.title || "Course Image"}
                width={40}
                height={40}
                className="mr-5 text-xs w-14 h-14"
              />
              <div className="md:flex flex-1">
                <div className="flex flex-1 flex-col items-start justify-between">
                  <h3 className="text-sm font-bold w-4/5 text-slate-900 mb-2">
                    {course.title}
                  </h3>
                  <div className="flex text-sm items-center">
                    <h2 className="text-green-700 font-bold text-sm">
                      {Number(course.duration).toFixed(1)} Total hours .{" "}
                    </h2>
                    <h2> Updated {formattedDate}</h2>
                  </div>
                </div>
                <div className="md:flex">
                  <div className="flex flex-col md:flex-row">
                    <div className="text-xs">
                      <span className="text-yellow-600 mr-5 font-extrabold text-sm">
                        {course.rating?.average || "No rating"}⭐
                      </span>
                      <span className="mr-7">👥{course.enrollments || 0}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700">
                      <CoursePrice price={Number(course.price)} />
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <HeartButton className=" ml-4 p-0 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {courses.length > 3 && (
        <button
          onClick={toggleShowMore}
          className="px-4 w-full mb-9 py-4 border-b border-x border bg-[#FFFFFF] hover:bg-[#E3E7EA]"
          aria-label={showMore ? "Show less courses" : "Show more courses"}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default StudentsAlsoBought;
