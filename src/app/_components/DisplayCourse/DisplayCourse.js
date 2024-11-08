// "use client";
import AboutLearning from "@/app/_components/AboutLearning/AboutLearning";
import CourseComment from "@/app/_components/CourseComment/CourseComment";
import CourseCommentReview from "@/app/_components/CourseCommentReview/CourseCommentReview";
import CourseContent from "@/app/_components/CourseContent/CourseContent";
import CourseHeader from "@/app/_components/CourseHeader/CourseHeader";
import CourseInstructorDetails from "@/app/_components/CourseInstructorDetails/CourseInstructorDetails";
import CourseSideBar from "@/app/_components/CourseSideBar/CourseSideBar";
import FrequentlyBoughtTogother from "@/app/_components/FrequentlyBoughtTogother/FrequentlyBoughtTogother";
import MoreCoursesByInstructor from "@/app/_components/MoreCoursesByInstructor/MoreCoursesByInstructor";
import ReqAndDesc from "@/app/_components/ReqAndDesc/ReqAndDesc";
import StudentsAlsoBought from "@/app/_components/StudentsAlsoBought/StudentsAlsoBought";
import Tags from "@/app/_components/Tags/Tags";
import TopCompanies from "@/app/_components/TopCompanies/TopCompanies";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import axios from "axios";
import { BsFileEarmark } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";
// import React, { useEffect, useState } from "react";
import { PiMonitorPlayBold } from "react-icons/pi";
import { RiFolderDownloadLine } from "react-icons/ri";

const DisplayCourse = async ({ slug, locale }) => {
  let courseTitle;
  let courses = [];

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/course/courseTitle/${slug}`
    );
    // console.log(data.data.course);

    if (data.status === "success") {
      courseTitle = data.data.course;
    }
  } catch (error) {
    console.error(error);
  }

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/course/`
    );
    // console.log(data.data.courses);

    if (data.status === "success") {
      courses = data.data.courses;
    }
  } catch (error) {
    console.error(error);
  }

  const excludedCourseId = courseTitle._id;

  const relatedCourses = courses.filter(
    (course) =>
      course.relatedTopic === courseTitle.relatedTopic._id &&
      course._id !== excludedCourseId
  );  

  return (
    <div className="relative">
      <div className="w-full md:z-30 lg:z-[1] mx-auto fixed lg:top-0 lg:bottom-auto md:bottom-0 bg-[#2D2F31] text-white shadow-sm">
        <div className="px-4 py-1 hidden md:block">
          <div>
            <h1 className="font-bold text-base">
              {locale === "en" ? courseTitle.title : courseTitle.title_Ar}
            </h1>
          </div>
          <div className="text-sm mt-1">
            <span className="bg-[#ECEB98] px-3 py-1  text-[#3D3C0A]  mr-4 text-sm">
              {locale === "en" ? "Bestseller" : "الافضل مبيعاً"}
            </span>
            <span className="text-yellow-500 mr-2 font-extrabold text-sm">
              {courseTitle.rating.average}⭐
            </span>
            <span className="text-indigo-400 font-semibold underline underline-offset-2">
            ({courseTitle.rating.count} {locale==="en"?"ratings":"تقيم"})
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#2D2F31] hidden lg:block">
        <div
          className={`${locale === "en" ? "ml-36 " : "mr-36"} pb-10 w-[50%]`}
        >
          <CourseHeader
            title={locale === "en" ? courseTitle.title : courseTitle.title_Ar}
            description={
              locale === "en" ? courseTitle.subtitle : courseTitle.subtitle_Ar
            }
            category={courseTitle.category}
            subcategory={courseTitle.subcategory}
            topics={courseTitle.topics}
            rating={courseTitle.rating.average}
            numberOfRates={courseTitle.rating.count}
            numberOfStudent={courseTitle.enrollments}
            instructorName={
              courseTitle.instructor ? courseTitle.instructor.name : "unknown"
            }
            price={courseTitle.price}
            locale={locale}
          />
        </div>
      </div>
      <div
        className={`lg:w-[360px] lg:my-4 lg:absolute lg:top-4 ${
          locale === "en" ? "lg:right-36" : "lg:left-28"
        }  md:mx-14`}
      >
        <div className="mt-5 mb-7 mx-4 lg:hidden">
          <Breadcrumb>
            <BreadcrumbList>
              <div className="hidden md:flex md:items-center md:justify-between">
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-violet-600 font-bold hidden mr-2 md:block">
                    {locale === "en"
                      ? courseTitle.category.name
                      : courseTitle.category.nameAr}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </div>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-violet-600 font-bold ">
                  {locale === "en"
                    ? courseTitle.subcategory.name
                    : courseTitle.subcategory.nameAr}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-violet-600 font-bold ">
                  {locale==="en"? courseTitle.topics[0].name:courseTitle.topics[0].nameAr} 
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <CourseSideBar
          course={courseTitle}
          courseImg={courseTitle.courseImage}
          price={courseTitle.price}
          locale={locale}
        />
      </div>
      <div className="grid grid-cols-12 gap-1 ">
        <div className="md:col-start-2 lg:col-end-8 md:col-end-12 col-start-1 col-end-13 mx-2 md:mx-0">
          <div className="mt-11">
            <AboutLearning learningObjective={locale==="en"?courseTitle.learningObjective:courseTitle.learningObjective_Ar} />
          </div>
          <h2 className="text-3xl mt-9 font-bold text-slate-800">
            {locale==="en"?"Explore related topics":"استكشاف المواضيع ذات الصلة"}
          </h2>
          <Tags tags={courseTitle.topics} locale={locale} />

          <h2 className="text-3xl mt-20 font-bold text-slate-800">
            {locale==="en"?"This course includes:":"تتضمن هذه الدورة:"}
          </h2>
          <div>
            <ul className=" grid grid-cols-2 gap-3 mt-5">
              <li className="flex items-center mb-2 font-light ">
                <PiMonitorPlayBold className=" mr-3" />
                <span>
                  {(courseTitle.duration.toFixed() / 60).toFixed(1)} {locale==="en"?"hours on-demand videos":"ساعات فيديو حسب الطلب"} 
                </span>
              </li>
              <li className="flex items-center mb-2 font-light">
                <MdOutlineSmartphone className=" mr-3" />
                <span>{locale==="en"?"Access on mobile and TV":"إمكانية الوصول عبر الهاتف المحمول والتلفزيون"}</span>
              </li>
              <li className="flex items-center mb-2 font-light">
                <BsFileEarmark className=" mr-3" />
                <span>
                  {courseTitle.numOfArticle ? courseTitle.numOfArticle : 0}{" "}
                  {locale==="en"?"article":"مقاله"}
                </span>
              </li>
              <li className="flex items-center mb-2 font-light">
                <FaTrophy className=" mr-3" />
                <span>
                  {courseTitle.numOfCertificate
                    ? courseTitle.numOfCertificate
                    : 0}{" "}
                    {locale==="en"?"Certificate of completion":"شهادة اتمام الدورة"}           
                </span>
              </li>
              <li className="flex items-center mb-2 font-light">
                <RiFolderDownloadLine className=" mr-3" />
                <span>
                  {courseTitle.numOfResources ? courseTitle.numOfResources : 0}{" "}
                  {locale==="en"?"downloadable resources":"مصادر للتحميل"}
                  
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <TopCompanies />
          </div>
          <div>
            <CourseContent
              sections={courseTitle.sections}
              duration={(courseTitle.duration.toFixed() / 60).toFixed(1)}
              locale={locale}
            />
          </div>
          <div>
            {" "}
            <ReqAndDesc
              requirments={locale==="en"? courseTitle.requirements:courseTitle.requirements_Ar}
              description={locale==="en"?courseTitle.description:courseTitle.description_Ar}
              courseFor={locale==="en"?courseTitle.courseFor:courseTitle.courseFor_Ar}
            />{" "}
          </div>
          <div>
            {" "}
            <StudentsAlsoBought courses={relatedCourses} />
          </div>

          {/* <div>
            <FrequentlyBoughtTogother courses={courses} />
          </div> */}

          <div>
            <CourseInstructorDetails instructor={courseTitle.instructor} locale={locale} />{" "}
          </div>
          {/*
          <div>
            <CourseComment course={courseTitle} />{" "}
          </div>
          <div>
            {" "}
            <MoreCoursesByInstructor course={courseTitle} />{" "}
          </div>
              */}
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps({ params }) {
//     const { id } = params;

//     // Fetching the course data
//     const course = await fetchdata(id);

//     // Handling course not found
//     if (!course) {
//       return {
//         notFound: true
//       };
//     }

//     return {
//       props: {
//         course, // Passing the fetched course data to the DisplayCourse
//       },
//     };
//   }

export default DisplayCourse;
