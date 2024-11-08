"use client";

import CoursesSlider from "../CoursesSlider/CoursesSlider";
import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

function LandingPageSection5() {
  const t = useTranslations("LandingPage");
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/course/public/courses`
        );
        if (data.status === "success") {
          setCourses(data.data.courses);
        } else {
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <div className="mx-10 mt-20">
        <div>
          <h1 className="text-3xl font-bold text-gray-700">
            {t("learnersView")}
          </h1>
        </div>
      </div>
      <div className="mx-auto py-8">
        <div>
          <div className="p-6 text-black">
            <div>
              {loading ? (
                <div className="text-center py-10">
                  <p className="text-lg">Loading courses...</p>
                </div>
              ) : (
                <CoursesSlider courses={courses} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageSection5;
