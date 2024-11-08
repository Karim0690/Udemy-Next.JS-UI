"use client";

import { BreadcrumbDemo } from "@/app/_components/Breadcrumb/Breadcrumb";
import FeaturedCourseSlider from "@/app/_components/FeaturedCourseSlider/FeaturedCourseSlider";
import FilterSlider from "@/app/_components/FilterSlider/FilterSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CourseLargeCard from "@/app/_components/CourseLargeCard/CourseLargeCard";
import FilterAccordion from "@/app/_components/FilterAccordion/FilterAccordion";
import InstructorSlider from "@/app/_components/InstructorSlider/InstructorSlider";
import TopicsSlider from "@/app/_components/TopicsSlider/TopicsSlider";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import CategorisedCourses from "@/app/_components/CategorisedCourses/CategorisedCourses";

const Page = ({ params }) => {
  const category = params.categories;
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const t = useTranslations("Categories");
  const { locale } = useParams();
  const [coursesAllData, setCoursesAllData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/category/slug/${category}`
        );
        if (data.message === "success") {
          setCategoryData(data.result); // Set category data for the page
        } else {
          console.error("Failed to fetch category data");
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    if (category) {
      fetchCategoryData();
    }
  }, [category]);

  // Fetch courses based on categoryData
  useEffect(() => {
    if (categoryData && categoryData._id) {
      const fetchCourses = async () => {
        try {
          setLoading(true); // Show loading state while fetching
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_LOCAL_API}/course/public/courses?category=${categoryData._id}`
          );
          if (data.status === "success") {
            setCourses(data.data.courses); // Store the fetched courses
            setCoursesAllData(data.data);
          } else {
            console.error("Failed to fetch courses");
          }
        } catch (error) {
          console.error("Error fetching courses:", error);
        } finally {
          setLoading(false); // Hide loading state once the fetching is done
        }
      };
      fetchCourses();
    }
  }, [categoryData]);

  return (
    <>
      <div className="hidden lg:block bg-white border border-b-gray-300 font-sans ">
        <BreadcrumbDemo category={category} locale={locale} />
      </div>
      <div className="mx-12 mt-12">
        <h1 className="font-bold text-3xl text-gray-800">
          <span className="capitalize">{category}</span> {t("courses")}
        </h1>
        <div className="mt-16">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">
            {t("coursesStart")}
          </h3>
          <p className="text-gray-600 mb-2">{t("coursesStarts")}</p>
        </div>
      </div>
      <FilterSlider courses={courses} />
      {/* Featured Courses*/}
      <div className="mx-12 mt-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          {t("featured")}
        </h3>
        <p className="text-gray-600 mb-2">{t("featureds")}</p>
        {/* Course Card */}
        <div className="border border-gray-200 font-sans hover:cursor-pointer hover:bg-slate-50">
          <FeaturedCourseSlider courses={courses}/>
        </div>
      </div>
      {/* Popular Topics*/}
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          {t("popTopics")}
        </h3>
        <TopicsSlider />
      </div>
      {/* Popular Instructor
      <div className="mx-12 mt-12 mb-12">
        <h3 className="font-bold text-2xl text-gray-800 mb-2">
          {t("popularInstructor")}
        </h3>
        <p className="text-gray-600 mb-2">{t("popularInstructors")}</p>
        <InstructorSlider />
      </div> */}
      {/* All Courses */}
      <CategorisedCourses category={categoryData} />
    </>
  );
};

export default Page;
