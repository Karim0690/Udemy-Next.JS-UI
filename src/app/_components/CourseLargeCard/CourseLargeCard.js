import Image from "next/image";
import React from "react";
import StarRating from "../RatingStars/RatingStars";

const CourseLargeCard = () => {
  return (
    <>
      <div className="flex border-b border-gray-200">
        <div className="flex w-full gap-3">
          <div className="w-[50%] lg:w-[50%] xl:w-[15] py-4">
            <Image
              src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
              width={480}
              height={270}
              alt=""
              className="border border-gray-200 w-[100%]"
            />
          </div>
          <div className="w-full ml-4 pb-4 pt-3">
            <h3 className="text-base text-gray-700 font-bold">
              The Complete Python Bootcamp From Zero to Hero in Python
            </h3>
            <p className="text-sm text-gray-900">
              Learn Python like a Professional Start from the basics and go all
              the way to creating your own applications and games
            </p>
            <p className="text-xs text-gray-600">
              Jose Portilla, Pierian Training
            </p>
            <div className="flex h-10">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-black">4.6</p>
                <StarRating rating={4.6} />
                <p className="text-xs text-gray-500">(618,179)</p>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              <p>22 total hours . 155 lectures . All Levels</p>
            </div>
          </div>
        </div>
        <div className="w-[10%]">
          <p className="text-lg text-gray-700 font-bold">E£1,799.99</p>
        </div>
      </div>
    </>
  );
};

export default CourseLargeCard;
