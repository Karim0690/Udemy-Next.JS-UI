import RadialProgress from "@/app/_components/RadialProgress/RadialProgress";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "next-cloudinary/dist/cld-video-player.css";
import CourseContentSideBar from "@/app/_components/CourseContentSideBar/CourseContentSideBar";
import Rating from "@/app/_components/Rating/Rating";
import RatingComponent from "@/app/_components/RatingComponent/RatingComponent";
import TabsCourseView from "@/app/_components/TabsCourseView/TabsCourseView";
import VideoCoursePlayer from "@/app/_components/VideoCoursePlayer/VideoCoursePlayer";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
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
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";
import { getServerSession } from "next-auth/next";
import { CldVideoPlayer } from "next-cloudinary";
import { FaShare } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function CourseHeader({ course, session }) {
  // <div className="w-full  mx-auto   bg-[#2D2F31] text-white shadow-sm h-14 flex items-center">
  // console.log("user name is here : "+session.user._id);

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
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex items-center justify-center bg-[#2D2F31] hover:bg-[#3D3F41]  p-2 gap-2">
              {" "}
              <FaStar /> leave a rating{" "}
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white ">
            <AlertDialogHeader>
              <AlertDialogDescription className="text-center text-lg text-bold mx-auto">
                {/* Select Rating
          <Rating className="w-2/4"/> */}

                <RatingComponent
                  courseId={course._id}
                  userId={session.user._id}
                  className="w-full "
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>

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

  const session = await getServerSession(authOptions);
  // console.log("=========================");
  // console.log(session);
  // console.log("=========================");

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
      <CourseHeader course={course} session={session} />
      <div>
        <div>
          <VideoCoursePlayer className="w-full" sections={sections} />
        </div>
      </div>
      <div>
        <TabsCourseView course={course} />
      </div>
    </>
  );
};

export default page;
