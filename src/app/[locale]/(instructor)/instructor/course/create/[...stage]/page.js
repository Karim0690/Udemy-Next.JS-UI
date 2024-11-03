"use client";

import useCourseStore from "@/app/store/courseStore";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { LuMonitorPlay } from "react-icons/lu";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { toast } from "sonner";

const Page = () => {
  const t = useTranslations("CreateCourse");
  const path = usePathname();
  const router = useRouter();
  const page = parseInt(path.split("/")[4]);
  const progress = (page - 1) * 0.25 + 0.25;
  const [decodedToken, setDecodedToken] = useState({});
  let [steps, setStep] = useState(0);
  const [courseDetails, setCourseDetails] = useState({
    title: "",
    instructor: "",
    category: "",
  });
  const [selectedOption, setSelectedOption] = useState("");
  const { categories, fetchCategories } = useCourseStore();

  const showToast = (message, isError = false) => {
    const toastId = toast("", {
      description: (
        <div className="flex flex-col">
          <div className="flex items-center gap-5">
            {isError ? (
              <TbAlertOctagonFilled className="text-6xl" />
            ) : (
              <IoMdCheckmarkCircle className="text-4xl" />
            )}
            <span className={`font-bold "text-black"`}>{message}</span>
          </div>
          <button
            className="mt-5 mx-14 bg-gray-800 text-white w-20 p-3"
            onClick={() => toast.dismiss(toastId)}
          >
            {t(dismiss)}
          </button>
        </div>
      ),
      style: {
        background: isError ? "#fcbca0" : "#acd2cc",
        fontSize: "16px",
        color: "#1c1c1c",
        padding: "12px",
        borderRadius: "0",
        border: isError ? "1px solid #f5c6cb" : "1px solid #ccc",
      },
    });
  };
  const decodeToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        setCourseDetails((prevData) => ({
          ...prevData,
          instructor: decoded._id,
        }));
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    } else {
      console.log("No token found in local storage.");
    }
  };
  useEffect(() => {
    fetchCategories();
    decodeToken();

    const savedCourseDetails = localStorage.getItem("courseDetails");
    if (savedCourseDetails) {
      setCourseDetails(JSON.parse(savedCourseDetails));
    }
  }, []);

  const options = [
    {
      key: "busy_now",
      text: "I’m very busy right now (0-2 hours)",
    },
    {
      key: "work_on_side",
      text: "I’ll work on this on the side (2-4 hours)",
    },
    {
      key: "lots_of_flexibility",
      text: "I have lots of flexibility (5+ hours)",
    },
    {
      key: "undecided_time",
      text: "I haven’t yet decided if I have time",
    },
  ];

  const translatedOptions = options.map((option) => ({
    key: option.key,
    translatedText: t(option.key), 
  }));

  // karim options __________________
  // const options = [
  //   "I’m very busy right now (0-2 hours)",
  //   "I’ll work on this on the side (2-4 hours)",
  //   "I have lots of flexibility (5+ hours)",
  //   "I haven’t yet decided if I have time",
  // ];

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 60) {
      setCourseDetails({ ...courseDetails, title: newTitle });
    }
    setStep(2);
  };

  const handleContinue = () => {
    if (validateCurrentStep()) {
      localStorage.setItem("courseDetails", JSON.stringify(courseDetails));
      if (page < 4) {
        router.push(`/instructor/course/create/${page + 1}`);
      }
    }
  };

  const handleSubmit = async () => {
    // Save course details to database
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/course`,
      courseDetails,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    // Redirect to course page
    if (data.message === "success") {
      router.push(`/instructor/course`);
      showToast("Your changes have been saved successfully");
      localStorage.removeItem("courseDetails");
    } else {
      showToast("Failed to save course", true);
    }
  };

  const validateCurrentStep = () => {
    if (page === 2 && !courseDetails.title) {
      // showToast("Please enter a course title.", true);
      return false;
    }
    if (page === 3 && !courseDetails.category) {
      // showToast("Please enter a course category.", true);
      return false;
    }
    return true;
  };
  const isValidStep = validateCurrentStep();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="shadow-md">
        <div className="px-8 flex items-center h-16">
          <Image
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            width={75}
            height={28}
            alt="Udemy Logo"
          />
          <div className="mx-4 border-l border-gray-300 flex flex-1 items-center px-4">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="text-xl text-gray-700">{`Step ${page} of 4`}</span>
            </div>
          </div>
          <Link href={"/instructor/course"}>
            <button className="text-[#5022c3] font-semibold">
              {t("exit")}
            </button>
          </Link>
        </div>
        <div className="bg-gray-300 h-1">
          <div
            className="h-full bg-[#5022c3] origin-[left] transition-transform duration-150 ease-in-out"
            style={{ transform: `scaleX(${progress})` }}
          ></div>
        </div>
      </div>
      <div className="container flex flex-col flex-1 mx-auto py-20 px-8">
        <div className="flex justify-center">
          {/* First  Step */}
          {page == 1 && (
            <div>
              <h1 className="text-3xl font-bold text-gray-700 font-serif">
                {t("first_question")}
              </h1>
              <form className="mt-20">
                <fieldset className="mx-auto">
                  <legend className="flex items-center pb-1 absolute h-[1px] w-[1px] overflow-hidden">
                    {t("type_of_course")}
                  </legend>
                  <div className="flex justify-center">
                    {/* First Option: Course */}
                    <label
                      className={`cursor-pointer relative w-56 h-72 min-h-72 border p-4 hover:bg-slate-50  ${
                        steps === 1
                          ? "border-black border-4"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="course-type"
                        value="1"
                        checked={steps === 1}
                        onChange={() => setStep(1)}
                        className="absolute h-[1px] w-[1px] overflow-hidden"
                      />
                      <span className="flex flex-col items-center mt-6 text-center">
                        <LuMonitorPlay className="text-3xl" />
                        <span className="block mt-4 font-bold text-gray-700">
                          {t("course")}
                        </span>
                        <span className="block mt-2 text-gray-800 text-sm">
                          {t("create_learning_experiences")}
                        </span>
                      </span>
                    </label>
                    {/* Second Option: Practice Test */}
                    {/* 
                    <label
                      className={`cursor-pointer ml-4 relative w-56 h-72 min-h-72 border p-4 hover:bg-slate-50 text-center ${
                        steps === 2
                          ? "border-black border-4"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="course-type"
                        value="2"
                        checked={steps === 2}
                        onChange={() => setStep(2)}
                        className="absolute h-[1px] w-[1px] overflow-hidden"
                      />
                      <span className="flex flex-col items-center text-center mt-6">
                        <CiViewList className="text-3xl font-bold" />
                        <span className="block mt-4 font-bold text-gray-700">
                          Practice Test
                        </span>
                        <span className="block mt-2 text-gray-800 text-sm">
                          Help students prepare for certification exams by
                          providing practice questions.
                        </span>
                      </span>
                    </label> */}
                  </div>
                </fieldset>
              </form>
            </div>
          )}
          {/* Second Step */}
          {page === 2 && (
            <div>
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-gray-700 font-serif">
                  {t("working_title")}
                </h1>
                <p className="text-base text-gray-700 mt-4">
                  {t("good_title_message")}
                </p>
              </div>
              <div className="relative px-3 mt-20 w-[600px]">
                <input
                  className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-title"
                  type="text"
                  placeholder="e.g. Learn Photoshop CS6 from Scratch"
                  value={courseDetails.title}
                  onChange={handleTitleChange}
                />
                <span className="absolute right-4 bottom-3 pr-4 text-gray-600">{`${
                  60 - courseDetails.title.length
                }`}</span>
              </div>
            </div>
          )}
          {/* Third Step */}
          {page === 3 && (
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-gray-700 font-serif">
                  {t("best_fit_category")}
                </h1>
                <p className="text-base text-gray-700 mt-4">
                  {t("category_change_message")}
                </p>
              </div>
              <div className="px-2 mt-20 w-[600px] border border-black">
                <select
                  id="sort-options"
                  name="category"
                  required
                  className="block  w-full  py-3 text-base focus:outline-none bg-transparent text-gray-700 "
                  value={courseDetails.category}
                  onChange={(e) => {
                    setCourseDetails({
                      ...courseDetails,
                      category: e.target.value,
                    });
                    setStep(3);
                  }}
                >
                  <option value="">{t("choose_category")} </option>
                  {categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
          {/* Fourth Step */}
          {page === 4 && (
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-gray-700 font-serif">
                  {t("time_commitment")}
                </h1>
                <p className="text-base text-gray-700 mt-4">
                  {t("time_commitment_message")}
                </p>
              </div>
              <div className="flex flex-col space-y-4 mt-20 w-[60%]">
                {translatedOptions.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-3 border border-black cursor-pointer transition-colors `}
                  >
                    <input
                      type="radio"
                      name="time-commitment"
                      value={option.key}
                      checked={selectedOption === option.key}
                      onChange={() => setSelectedOption(option.key)}
                      className="mr-4 cursor-pointer"
                    />
                    <span className="text-gray-900 font-bold">
                      {option.translatedText}
                    </span>{" "}
                  </label>
                ))}
              </div>

              {/* karim options___________________ */}
              {/* <div className="flex flex-col space-y-4 mt-20 w-[60%]">
                {options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-3 border border-black cursor-pointer transition-colors `}
                  >
                    <input
                      type="radio"
                      name="time-commitment"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => setSelectedOption(option)}
                      className="mr-4 cursor-pointer"
                    />
                    <span className="text-gray-900 font-bold">{option}</span>
                  </label>
                ))}
              </div> */}
            </div>
          )}
        </div>
      </div>
      <div className="shadow-md sticky bottom-0 z-10 bg-white">
        <div className="flex justify-between w-full p-4 shadow-sm">
          {page > 1 && (
            <button
              className="bg-white text-gray-700 border border-black font-bold p-4 text-center hover:bg-gray-200"
              onClick={() =>
                router.push(`/instructor/course/create/${page - 1}`)
              }
            >
              Previous
            </button>
          )}
          {page !== 4 ? (
            <button
              className={`${
                isValidStep
                  ? "bg-[#2d2f31] cursor-pointer"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white font-bold p-4 text-center`}
              disabled={!isValidStep}
              onClick={handleContinue}
            >
              {t("continue")}
            </button>
          ) : (
            <button
              className={`bg-[#2d2f31] text-white font-bold p-4 text-center`}
              onClick={handleSubmit}
            >
              {t("finish")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
