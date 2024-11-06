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
import axios from "axios";

function CourseHeader({ course }) {
  // <div className="w-full  mx-auto   bg-[#2D2F31] text-white shadow-sm h-14 flex items-center">

  return (
    <div className="flex justify-between items-center w-ful h-14 bg-[#2D2F31] text-white px-4">
      <div className="flex items-center gap-2 justify-center">
        <Image
          className="sm:hidden md:block"
          alt="Udemy"
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
          <h1 className="md:text-lg sm:text-base  hover:text-gray-400 ">
            {course.title}
          </h1>
        </Link>
      </div>
      <div className=" items-center justify-center sm:hidden md:flex gap-2">
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center justify-center gap-2">
              <RadialProgress percentage={100} />
              <div className="flex items-center hover:text-stone-300">
                <p>progress</p>
                <IoIosArrowDown />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-white text-base font-semibold">
            15 of 32 complete.
          </PopoverContent>
        </Popover>
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="flex items-center justify-center bg-[#2D2F31] hover:bg-[#3D3F41] border-2 p-2 gap-2">
              <p>Share</p> <FaShare />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Share this course</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
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
  );
}

const page = async ({ params }) => {
  const { title, id } = params;
  let course;
  let sections;

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/course/courseTitle/${title}`
    );
    // console.log(data.data.course);

    if (data.status === "success") {
      course = data.data.course;
      sections = course.sections;
      // console.log(sections);
    }
  } catch (error) {
    console.error(error);
  }
  // console.log();

  return (
    <>
      <CourseHeader course={course} />
      <div>
        <div>
          <VideoCoursePlayer className="w-full" sections={sections} />
        </div>
      </div>
      <div>
        <TabsCourseView />
      </div>
    </>
  );
};

export default page;
