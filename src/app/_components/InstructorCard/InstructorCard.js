import React from "react";
import InstructorRating from "../RatingStars/InstructorRating";
import Image from "next/image";

const InstructorCard = ({ image, name, lable, rating, courses, students }) => {
  return (
    <>
      <div className="flex border border-gray-100 p-4 w-[305px] h-[160px] hover:bg-slate-50 gap-3">
        <div className="w-[30%]">
          <Image
            src={image}
            width={64}
            height={64}
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="w-full">
          <h1 className="font-bold ">{name}</h1>
          <p className="text-gray-800 text-sm">{lable}</p>
          <div className="flex items-center">
            <p className="font-semibold mr-1">{rating}</p>
            <InstructorRating />
            <p className="ml-1 text-[#4d3105] text-sm">Instructor rating</p>
          </div>
          <div className="flex items-center text-sm">
            <p className="font-semibold mr-1">{students}</p>
            <p className="text-sm">Students</p>
          </div>
          <div className="flex items-center text-sm">
            <p className="font-semibold mr-1">{courses}</p>
            <p className="text-sm">courses</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
