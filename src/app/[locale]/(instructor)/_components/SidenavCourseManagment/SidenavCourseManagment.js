"use client";

import useCourseStore from "@/app/store/courseStore";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const SidenavCourseManagment = ({ path, course }) => {
  const t = useTranslations("SidebarCourse");
  const { locale } = useParams();
  const { fetchCourse } = useCourseStore();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const objectives =
    course.learningObjective.length > 0 &&
    course.courseFor.length > 0 &&
    course.requirements.length > 0;
  let basics =
    course.title &&
    course.subtitle &&
    course.description &&
    course.language &&
    course.category &&
    course.subcategory &&
    course.topics &&
    course.courseImage &&
    course.promotionalVideo;
  const curriculum = course.duration >= 30;
  const handleCourseStructureClick = async (field) => {
    try {
      // Make a PATCH request to the API
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${course._id}`,
        {
          [field]: true,
        }
      );

      if (response.status === 200) {
      } else {
        console.error("Failed to update course structure:", response.status);
      }
    } catch (error) {
      console.error("Error updating course structure:", error);
    }
  };

  const calculateProgress = async () => {
    const totalPaths = 11; // Total number of paths: goals, basics, communications
    let completedPaths = 0;

    if (objectives) completedPaths += 1; // Goals
    if (basics) completedPaths += 1; // Basics
    if (curriculum) completedPaths += 1; // curriculum
    if (course.courseStructure) completedPaths += 1; // courseStructure
    if (course.setupAndTest) completedPaths += 1; // setupAndTest
    if (course.filmAndEdite) completedPaths += 1; // filmAndEdite
    if (course.captions) completedPaths += 1; // captions
    if (course.accessibility) completedPaths += 1; // accessibility
    if (course.price) completedPaths += 1; // price
    if (course.promotions) completedPaths += 1; // promotions
    if (course.welcomeMessage && course.congratesMessage) completedPaths += 1; // promotions
    let progress = (completedPaths / totalPaths) * 100;
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${course._id}`,
        { progress }
      );
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };
  calculateProgress();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const submitCourse = async () => {
    fetchCourse(course._id);
    if (course.progress === 100) {
      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/public/${course._id}`
      );
      if (data.message === "success") {
        router.push(`/${locale}/instructor/course`);
      }
    } else {
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <div className="px-2 flex justify-between flex-wrap lg:block mb-4 lg:mb-0">
        <button onClick={toggleMenu} className="lg:hidden">
          <GiHamburgerMenu className="text-[#5022c3]  text-2xl" />
        </button>
        <ul
          className={`py-6 ${
            isMenuOpen
              ? "flex flex-wrap items-start border-t mt-4 w-full order-3 lg:order-3"
              : "hidden"
          }  lg:block`}
        >
          <li>
            <div className="text-[#2D2F31] font-bold py-2 pl-4 border-l-4 border-transparent">
              {t("plan-your-course")}
            </div>
            <ul>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "goals"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                }`}
              >
                <Link
                  href="goals"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {objectives ? (
                      <BsCheckCircle className=" text-xl" />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span>{t("intended_learners")}</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path === "course-structure"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                } `}
              >
                <Link
                  href="course-structure"
                  className="flex items-center gap-3 py-1 px-4"
                  onClick={() => handleCourseStructureClick("courseStructure")}
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {course.courseStructure ? (
                      <BsCheckCircle className=" text-xl" />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span>{t("course-structure")}</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "setup"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                }`}
              >
                <Link
                  href="setup"
                  className="flex items-center gap-3 py-1 px-4"
                  onClick={() => handleCourseStructureClick("setupAndTest")}
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {course.setupAndTest ? (
                      <BsCheckCircle className=" text-xl " />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span>{t("setup-and-test")}</span>
                </Link>
              </li>
            </ul>
          </li>
          {/*  */}
          <li className="lg:mt-6">
            <div className="text-[#2D2F31] font-bold py-2 pl-4 border-l-4 border-transparent">
              {t("create-your-contetn")}
            </div>
            <ul>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "film"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                }`}
              >
                <Link
                  href="film"
                  className="flex items-center gap-3 py-1 px-4"
                  onClick={() => handleCourseStructureClick("filmAndEdite")}
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {course.filmAndEdite ? (
                      <BsCheckCircle className=" text-xl " />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span> {t("film-and-edit")}</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "curriculum"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                }`}
              >
                <Link
                  href="curriculum"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {curriculum ? (
                      <BsCheckCircle className=" text-xl" />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span> {t("curriculum")}</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "captions"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                }`}
              >
                <Link
                  href="captions"
                  className="flex items-center gap-3 py-1 px-4"
                  onClick={() => handleCourseStructureClick("captions")}
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {course.captions ? (
                      <BsCheckCircle className=" text-xl " />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span>{t("captions")}</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "accessibility"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                }`}
              >
                <Link
                  href="accessibility"
                  className="flex items-center gap-3 py-1 px-4"
                  onClick={() => handleCourseStructureClick("accessibility")}
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {course.accessibility ? (
                      <BsCheckCircle className=" text-xl " />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span>{t("accessibility")}</span>
                </Link>
              </li>
            </ul>
          </li>
          {/*  */}
          <li className="lg:mt-6">
            <div className="text-[#2D2F31] font-bold py-2 pl-4 border-l-4 border-transparent">
              {t("publish-your-course")}
            </div>
            <ul>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "basics"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                }`}
              >
                <Link
                  href="basics"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {basics ? (
                      <BsCheckCircle className=" text-xl" />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span>{t("course-landing-page")}</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "pricing"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                }`}
              >
                <Link
                  href="pricing"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {course.price !== "" ? (
                      <BsCheckCircle className=" text-xl " />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span>{t("price")}</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "promotions"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                }`}
              >
                <Link
                  href="promotions"
                  className="flex items-center gap-3 py-1 px-4"
                  onClick={() => handleCourseStructureClick("promotions")}
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {course.promotions ? (
                      <BsCheckCircle className=" text-xl " />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span>{t("promotions")}</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path === "messages"
                    ? locale === "ar"
                      ? "border-r-4 border-black"
                      : "border-l-4 border-black"
                    : "border-none"
                }`}
              >
                <Link
                  href="messages"
                  className="flex items-center gap-3 py-1 px-4"
                >
                  <span
                    className="side-nav--completion--KfXbf"
                    aria-label="Completed"
                  >
                    {course.welcomeMessage && course.congratesMessage ? (
                      <BsCheckCircle className=" text-xl " />
                    ) : (
                      <BsCircle className=" text-xl" />
                    )}
                  </span>
                  <span>{t("course-message")}</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex justify-end flex-1 order-2 lg:order-3">
          {course.courseState === "draft" && (
            <button
              className="bg-[#a435f0] hover:bg-[#8710d8] font-bold lg:w-full py-1 px-2 md:p-2 text-white text-base"
              onClick={() => {
                submitCourse();
              }}
            >
              {t("submit-for-review")}
            </button>
          )}
        </div>
      </div>
      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>Your Course isn&apos;t complete</DialogTitle>
              <DialogDescription className="text-gray-400 my-6">
                You Didn&apos;t finished your coures yet to publish it
              </DialogDescription>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-violet-700"
              >
                Back to your course
              </button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default SidenavCourseManagment;
