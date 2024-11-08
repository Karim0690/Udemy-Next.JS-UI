"use client";

import StarRating from "../RatingStars/RatingStars";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const CourseLargeCard = ({ course }) => {
  const { locale } = useParams();
  return (
    <>
      <Link href={`/${locale}/course/${course.slug}`}>
        <div className="flex border-b justify-start border-gray-200 group">
          <div className="flex w-full gap-3">
            <div className="w-40 md:w-80 lg:w-80 xl:w-[15] py-4">
              <div className="relative w-full">
                <div className="absolute z-10 w-full h-44 bg-black opacity-25 hidden group-hover:block"></div>
                <Image
                  src={course.courseImage}
                  width={480}
                  height={270}
                  alt="course"
                  className="border border-gray-200 w-80 h-24 md:h-44 object-fit"
                />
              </div>
            </div>
            <div className="w-full ml-4 pb-4 pt-3">
              <h3 className="text-base text-gray-700 font-bold">
                {locale === "en" ? course.title : course.title_Ar}
              </h3>
              <p className="text-sm text-gray-900">
                {locale === "en" ? course.subtitle : course.subtitle_Ar}
              </p>
              <p className="text-xs text-gray-600">{course.instructor.name}</p>
              <div className="flex h-10">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-black">
                    {course.rating.average}
                  </p>
                  <StarRating rating={course.rating.average} />
                  <p className="text-xs text-gray-500">
                    ({course.rating.count})
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-500">
                <p>
                  {course.duration.toFixed(0)} total hours . {course.level}
                </p>
              </div>
            </div>
          </div>
          <div className="w-[10%] mt-2">
            <p className="text-lg text-gray-700 font-bold">E£{course.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseLargeCard;
