import axios from "axios";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const Page = async ({ params: { locale } }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/");
  }
  let courses = [];
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/user/enrolled/${session.user._id}`
    );
    if (data.message === "success") {
      courses = data.user.enrolledCourses; // Return the course data directly
    } else {
      throw new Error("Failed to fetch enrolled courses");
    }
  } catch (err) {
    console.error(err);
  }

  return (
    <>
      <div className="bg-[#2d2f31] text-white pt-6">
        <div className="container mx-auto">
          <h1 className="text-4xl my-6 font-bold">My Learning</h1>
          <p className="w-fit pr-1 py-2 border-b-8 border-gray-200 font-bold">
            All courses
          </p>
        </div>
      </div>
      <div className="h-screen container mx-auto p-6">
        <div className="flex flex-wrap justify-start gap-x-6 gap-y-6">
          {courses.map((course) => (
            <div key={course._id} className="group cursor-pointer">
              <div className="relative">
                <div className="hidden w-full h-full bg-black opacity-25 absolute group-hover:block"></div>
                <div className="hidden absolute w-full h-full justify-center items-center group-hover:flex">
                  <IoPlayCircleOutline className="text-white text-6xl" />
                </div>
                <Image
                  src={course.courseImage}
                  width={350}
                  height={100}
                  alt={course.title}
                  className="border-2 w-60 h-40"
                />
              </div>
              <h2 className="font-semibold my-2">
                {locale === "en" ? course.title : course.title_Ar}
              </h2>
              <p className="text-xs text-gray-500 pb-3 border-b-4">
                {course.instructor ? course.instructor.name : "No instructor"}
              </p>
              <p>START COURSE</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
