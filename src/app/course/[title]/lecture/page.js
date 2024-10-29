import RadialProgress from "@/app/_components/RadialProgress/RadialProgress";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "next-cloudinary/dist/cld-video-player.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { CldVideoPlayer } from "next-cloudinary";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import VideoCoursePlayer from "@/app/_components/VideoCoursePlayer/VideoCoursePlayer";
import CourseContentSideBar from "@/app/_components/CourseContentSideBar/CourseContentSideBar";
import TabsCourseView from "@/app/_components/TabsCourseView/TabsCourseView";

const page = () => {
  return (
    <>
      <div className="w-full  mx-auto   bg-[#2D2F31] text-white shadow-sm h-14 flex items-center">
        <div className="px-2 py-3 w-full">
          <div className="flex justify-between items-center	">
            <div className="flex items-center">
              <Image
                className="mr-3 mb-2  sm:hidden md:block"
                src={
                  "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                }
                height={40}
                width={80}
              />
              <Separator
                orientation="vertical"
                className="h-7 w-[1px] sm:hidden md:block bg-gray-400"
              />
              <Link href="#" className="text-sm hover:text-gray-400 ">
                <h1 className="ml-3 mt-1  md:text-lg sm:text-base  hover:text-gray-400 ">
                  Tailwind CSS From Scratch | Learn By Building Projects
                </h1>
              </Link>
            </div>
            <div className="flex items-center sm:hidden md:block">
              <Popover>
                <PopoverTrigger>
                  <div className="flex items-center">
                    <RadialProgress percentage={100} />
                    <div className="flex items-center ml-3 mb-2 hover:text-stone-300">
                      <p className="mt-1 mx-3">progress</p>
                      <IoIosArrowDown className="mt-3" />
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="bg-white text-base font-semibold">
                  15 of 32 complete.
                </PopoverContent>
              </Popover>
              <AlertDialog>
                <AlertDialogTrigger>
                  <div className="flex items-center justify-center w-20 h-8 mx-5  bg-[#2D2F31] hover:bg-[#3D3F41] border-2">
                    <p className="mr-3 ">Share</p> <FaShare />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Share this course</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <VideoCoursePlayer className="w-full" />
          <div className=" sm:hidden  lg:block ">
            <CourseContentSideBar className="" />
          </div>
        </div>
      </div>
      <div>
        <TabsCourseView />
      </div>
    </>
  );
};

export default page;
