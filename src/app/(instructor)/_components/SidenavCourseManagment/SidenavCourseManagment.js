"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";
import axios from "axios";

const SidenavCourseManagment = ({ path, course }) => {
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
  return (
    <>
      <div className="px-2 lg:px-0 lg:pr-6 flex justify-between flex-wrap lg:block mb-4 lg:mb-0">
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
              Plan your course
            </div>
            <ul>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "goals"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
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
                  <span>Intended learners</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "course-structure"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
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
                  <span>Course structure</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "setup"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
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
                  <span>setup & test video</span>
                </Link>
              </li>
            </ul>
          </li>
          {/*  */}
          <li className="lg:mt-6">
            <div className="text-[#2D2F31] font-bold py-2 pl-4 border-l-4 border-transparent">
              create your content
            </div>
            <ul>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "film"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
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
                  <span>Film & edit</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "curriculum"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
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
                  <span>Curriculum</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "captions"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
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
                  <span>Captions (optional)</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "accessibility"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
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
                  <span>Accessibility (optional)</span>
                </Link>
              </li>
            </ul>
          </li>
          {/*  */}
          <li className="lg:mt-6">
            <div className="text-[#2D2F31] font-bold py-2 pl-4 border-l-4 border-transparent">
              Publish your course
            </div>
            <ul>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "basics"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
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
                  <span>Course landing page</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "pricing"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
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
                  <span>Pricing</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "promotions"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
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
                  <span>Promotions</span>
                </Link>
              </li>
              <li
                className={`py-1 hover:bg-gray-50 ${
                  path == "communications"
                    ? "border-l-4 border-black "
                    : "border-l-4 border-transparent"
                }`}
              >
                <Link
                  href="communications/messages"
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
                  <span>Course messages</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex justify-end flex-1 order-2 lg:order-3">
          <button className="bg-[#a435f0] hover:bg-[#8710d8] font-bold lg:w-full py-1 px-2 md:p-2 text-white text-base">
            Submit for Review
          </button>
        </div>
      </div>
    </>
  );
};

export default SidenavCourseManagment;
