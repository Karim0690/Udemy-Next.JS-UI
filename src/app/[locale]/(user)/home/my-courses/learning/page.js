import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
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
        <div className="container mx-auto px-4 lg:px-0">
          <h1 className="text-4xl my-6 font-bold">
            {locale === "en" ? "My Learning" : "تعليمي"}
          </h1>
          <p className="w-fit pr-1 py-2 border-b-8 border-gray-200 font-bold">
            {locale === "en" ? "All Courses" : "جميع الدورات"}
          </p>
        </div>
      </div>
      <div className="h-screen container mx-auto p-6">
        {courses.length > 0 ? (
          <div className="flex flex-wrap justify-start gap-x-6 gap-y-6">
            {courses.map((course) => (
              <div key={course._id} className="group cursor-pointer w-72 h-80">
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
                    className="border-2 w-72 h-40"
                  />
                </div>
                <h2 className="font-semibold my-2 overflow-hidden text-ellipsis whitespace-nowrap">
                  {locale === "en" ? course.title : course.title_Ar}
                </h2>
                <p className="text-xs text-gray-500 pb-3 border-b-4">
                  {course.instructor ? course.instructor.name : "No instructor"}
                </p>
                <p>{locale === "en" ? "START COURSE" : "أبدأ الدورة"}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col my-20 justify-center items-center">
            <h2 className="font-bold text-lg">
              {locale === "en"
                ? "Start learning from over 250,000 courses today."
                : "ابدأ التعلم من أكثر من 250,000 دورة تدريبية اليوم."}
            </h2>
            <p>
              {locale === "en"
                ? "when you purchase a course, it will appear here."
                : "عند شراء الدورة التدريبية، ستظهر هنا."}

              <Link href="/">
                <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f]">
                  {locale === "en" ? "Browse now." : "تصفح الآن."}
                </span>
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
