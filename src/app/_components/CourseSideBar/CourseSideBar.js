// components/Sidebar.js
import React from 'react';
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import CoursePrice from '../CorusePrice/CoursePrice';
import HeartButton from '../HeartButton/HeartButton';
import { Input } from '@/components/ui/input';

const CourseSideBar = ({ courseImg, price }) => {
  const img = courseImg;
  return (
    <div className="">

      <div className="flex flex-col bg-white shadow-2xl w-full">
        <div className="mb-4 w-full">
          <button className="relative w-full h-40 overflow-hidden rounded-lg">
            <Image
              src={courseImg}
              alt="Course Preview"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform hover:scale-105 w-full"
            />
            <span className="absolute inset-0 font-extrabold flex mb-3 items-end justify-center text-white bg-black bg-opacity-15 hover:bg-opacity-50 transition-opacity duration-200">
              Preview this course
            </span>
          </button>

        </div>

        <div className="flex-grow px-6">
          <h2 className="text-3xl font-semibold">Subscribe to Udemy’s top courses</h2>
          <p className="text-sm text-gray-700 mb-4">
            Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
          </p>
          <div className="flex justify-center">
            <Button className="w-99 mb-2  bg-purple-700 h-14 text-slate-100 mx-auto font-bold" variant="brand">
              Try Personal Plan for free
            </Button>

          </div>
          <div className="text-sm text-gray-500 text-center">Starting at E£204.00 per month after trial</div>
          <div className="text-sm text-gray-500 text-center mt-2">Cancel anytime</div>
        </div>

        <div className="flex items-center justify-center mt-5">
          <div className="border-t border-gray-300 flex-grow mr-3"></div>
          <span className="text-gray-500">or</span>
          <div className="border-t border-gray-300 flex-grow ml-3"></div>
        </div>


        <div className=" mt-4 p-6">
          <p className="text-xl font-bold  text-gray-900"><CoursePrice price={price} /></p>
          <div className="flex mt-3 space-x-6">
            <Button className="w-full py-6 px-6 text-lg border-2 border-black basis-3/4">
              Add to cart
            </Button>

            <HeartButton className="basis-1/4 " />
          </div>
          <div className="text-sm text-gray-500 text-center mt-5">30-Day Money-Back Guarantee</div>
          <div className="text-sm text-gray-500 text-center mt-2">Full Lifetime Access</div>

          <div className="flex justify-between mt-5">
            <Button className="underline decoration-indigo-500" variant="link">Share</Button>
            <Button variant="ghost">Gift this course</Button>
            <Button variant="ghost">Apply Coupon</Button>
          </div>
          <div className="flex mt-12">
            <Input type="text" placeholder="Enter Coupon" className="h-12" />
            <Button className="hover:bg-slate-600 bg-slate-700  text-slate-200 h-12  font-bold ">Apply</Button>
          </div>

        </div>
      </div>    </div>


  );
};

export default CourseSideBar;
