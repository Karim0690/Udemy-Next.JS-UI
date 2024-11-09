import Rating from "../Rating/Rating";
// import RatingsProgress from "../RatingsProgress/RatingsProgress";
import ReviewFeedback from "../ReviewFeedback/ReviewFeedback";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { BsPatchExclamationFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const TabsCourseViewClient = ({ course, reviews }) => {
  return (
    <Tabs defaultValue="reviews" className="w-full">
      <TabsList>
        <TabsTrigger value="content" className="md:hidden">
          Content
        </TabsTrigger>
        <TabsTrigger value="overview" className="text-base focus:font-semibold">
          Overview
        </TabsTrigger>
        <TabsTrigger value="reviews" className="text-base focus:font-semibold">
          Reviews
        </TabsTrigger>
      </TabsList>

      <TabsContent value="content">
        Make changes to your content here.
      </TabsContent>

      <TabsContent value="overview">
        <div className="pl-7 pr-22 m-11">
          <h3 className="text-2xl font-semibold">{course.title}</h3>

          <div className="flex items-center justify-start mt-9 gap-7">
            <div className="flex items-start flex-col">
              <div className="flex">
                <p className="text-[#4D3105] text-lg font-bold pr-2 pb-1">
                  {course.rating.average}
                </p>
                <div className="pt-2">
                  <FaStar className="text-[#B4690E]" />
                </div>
              </div>
              <p className="text-sm font-thin text-slate-500">
                {course.rating.count} ratings
              </p>
            </div>

            <div className="flex items-start flex-col">
              <p className="text-[#3B3D3F] text-lg font-bold mr-2">55,02</p>
              <p className="text-sm font-thin text-slate-500">Students</p>
            </div>

            <div className="flex items-start flex-col">
              <p className="text-[#3B3D3F] text-lg font-bold mr-2">
                {parseFloat(course.duration.toFixed(1))} hours
              </p>
              <p className="text-sm font-thin text-slate-500">Total</p>
            </div>
          </div>

          <div className="flex mt-11">
            <BsPatchExclamationFill className="mt-1" />
            <p className="ml-5 font-thin"> Last updated September 2024 </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reviews">
        <div className="pl-7 pr-22 m-11">
          <h2 className="text-2xl font-extrabold">Student feedback</h2>
          <div className="flex items-center mt-11 gap-11">
            <div className="flex items-center flex-col">
              <h2 className="text-7xl text-[#B4690E] font-extrabold">
                {course.rating.average}
              </h2>
              <Rating ratingValue={4.6} readOnly={true} />
              <p className="text-base font-semibold text-[#B4690E]">
                Course Rating
              </p>
            </div>
            {/* <RatingsProgress /> */}
          </div>

          <h2 className="text-2xl font-extrabold mt-16">Reviews</h2>
          <div className="flex w-full max-w-md items-center mt-5">
            <Input type="text" placeholder="Search Reviews" />
            <Button type="submit">
              <IoSearchSharp />
            </Button>
          </div>

          {/* Render reviews dynamically */}
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div
                key={index}
                className="flex mt-11 border-b border-b-stone-300 w-[900px] p-5"
              >
                <Avatar className="w-[50px] h-[50px]">
                  <AvatarImage src={review.user.avatar} />
                  <AvatarFallback className="bg-black text-white font-bold text-2xl">
                    {review.user.name.charAt(0).toUpperCase() +
                      review.user.name.charAt(1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex items-start ml-5 flex-col">
                  <p className="text-lg font-bold text-[#3B3D3F]">
                    {review.user.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <Rating ratingValue={review.rating} readOnly={true} />
                    <p className="font-thin text-sm text-stone-500">
                      {review.timeAgo}
                    </p>
                  </div>
                  <p className="text-sm text-slate-800 w-9/12 mt-3">
                    {review.comment}
                  </p>
                  <ReviewFeedback />
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available</p>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsCourseViewClient;
