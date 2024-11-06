import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { getServerSession } from "next-auth";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const Page = async ({ params: { locale } }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("userenrolledCourse");
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
      courses = data.user.enrolledCourses;
    } else {
      throw new Error("Failed to fetch enrolled courses");
    }
  } catch (err) {
    console.error(err);
  }
  return (
    <div>
      <div className="bg-[#2d2f31]">
        <div className="container mx-auto py-8">
          <h1 className="text-4xl text-white font-bold font-serif">
            {session.user.name}
          </h1>
        </div>
      </div>
      <div className="p-4 container mx-auto my-4">
        <Avatar className="bg-[#2d2f31] w-28 h-28 text-white font-bold text-3xl">
          <AvatarImage src={session.user.profilePic} />
          <AvatarFallback>
            {session.user.name.charAt(0).toUpperCase() +
              session.user.name.charAt(1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col items-center bg-gray-50 p-4">
        <h1 className="font-semibold text-lg my-3">{t("courses_enrolled")}</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 mb-10">
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
              <p>{t("start_course")} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
