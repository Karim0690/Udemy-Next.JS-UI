"use client";

import InstructorFooter from "../../instructor/instractorFooter/page";
import CourseManagmentContent from "@/app/[locale]/(instructor)/_Pages/CourseManagmentContent/CourseManagmentContent";
import ManageCourseHeader from "@/app/[locale]/(instructor)/_components/ManageCourseHeader/ManageCourseHeader";
import SidenavCourseManagment from "@/app/[locale]/(instructor)/_components/SidenavCourseManagment/SidenavCourseManagment";
import useCourseStore from "@/app/store/courseStore";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { toast } from "sonner";

const ManagementCourse = ({ id, path }) => {
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
            Dismiss
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

  const { course, fetchCourse } = useCourseStore();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    learningObjective: [],
    requirements: [],
    courseFor: [],
    learningObjective_Ar: [],
    requirements_Ar: [],
    courseFor_Ar: [],
  });

  const [basics, setBasics] = useState({
    title: "",
    title_Ar: "",
    subtitle: "",
    subtitle_Ar: "",
    description: "",
    description_Ar: "",
    language: "",
    category: "",
    subcategory: "",
    topics: "",
    courseImage: "",
    promotionalVideo: "",
  });

  const [messages, setMessages] = useState({
    welcomeMessage: "",
    congratesMessage: "",
  });

  const [initialFormData, setInitialFormData] = useState(formData);
  const [initialBasics, setInitialBasics] = useState(basics);
  const [initialMessages, setInitialMessages] = useState(messages);
  const [isModified, setIsModified] = useState(false);
  const [isBasicsModified, setIsBasicsModified] = useState(false);
  const [isMessagesModified, setIsMessagesModified] = useState(false);

  useEffect(() => {
    const loadCourseData = async () => {
      await fetchCourse(id);
      setLoading(false);
    };
    loadCourseData();
  }, [id, fetchCourse]);

  useEffect(() => {
    if (course) {
      const newFormData = {
        learningObjective: course.learningObjective,
        requirements: course.requirements,
        courseFor: course.courseFor,
        learningObjective_Ar: course.learningObjective_Ar,
        requirements_Ar: course.requirements_Ar,
        courseFor_Ar: course.courseFor_Ar,
      };

      const newBasics = {
        title: course.title,
        subtitle: course.subtitle,
        description: course.description,
        language: course.language,
        category: course.category,
        subcategory: course.subcategory,
        topics: course.topics,
        courseImage: course.courseImage,
        promotionalVideo: course.promotionalVideo,
      };

      const newMessages = {
        welcomeMessage: course.welcomeMessage,
        congratesMessage: course.congratesMessage,
      };

      setFormData(newFormData);
      setInitialFormData(newFormData);
      setBasics(newBasics);
      setInitialBasics(newBasics);
      setMessages(newMessages);
      setInitialMessages(newMessages);
    }
  }, [course]);

  useEffect(() => {
    setIsModified(JSON.stringify(formData) !== JSON.stringify(initialFormData));
    setIsBasicsModified(
      JSON.stringify(basics) !== JSON.stringify(initialBasics)
    );
    setIsMessagesModified(
      JSON.stringify(messages) !== JSON.stringify(initialMessages)
    );
  }, [
    formData,
    basics,
    initialFormData,
    initialBasics,
    messages,
    initialMessages,
  ]);

  const handleAddObjectives = async () => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${id}`,
        formData
      );
      setInitialFormData(formData); // Update initial data after saving
      showToast("Your changes have been saved successfully");
    } catch (error) {
      console.error("Error saving objectives:", error);
      showToast(
        "Your changes have not been saved. Please address the issues.",
        true
      );
    }
  };

  const handelAddBasics = async () => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${id}/basics`,
        basics
      );
      setInitialBasics(basics); // Update initial data after saving
      showToast("Your changes have been saved successfully");
    } catch (error) {
      console.error("Error saving basics:", error);
      showToast(
        "Your changes have not been saved. Please address the issues.",
        true
      );
    }
  };

  const handelAddMessages = async () => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${id}`,
        messages
      );
      setInitialMessages(messages); // Update initial data after saving
      showToast("Your changes have been saved successfully");
    } catch (error) {
      console.error("Error saving messages:", error);
      showToast(
        "Your changes have not been saved. Please address the issues.",
        true
      );
    }
  };

  if (!course || course._id !== id)
    return (
      <div className="flex-1 flex justify-center items-center h-screen">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );

  return (
    <>
      <ManageCourseHeader
        course={course}
        path={path}
        fetchCourse={fetchCourse}
        onSave={handleAddObjectives}
        onBasicSave={handelAddBasics}
        onMessagesSave={handelAddMessages}
        isModified={isModified}
        setIsModified={setIsModified}
        isBasicsModified={isBasicsModified}
        setIsBasicsModified={setIsBasicsModified}
        isMessagesModified={isMessagesModified}
        setIsMessagesModified={setIsMessagesModified}
      />
      <div className="lg:container flex gap-3 flex-col lg:flex-row pt-2 lg:pt-8 px-4 pb-24 mx-auto">
        <SidenavCourseManagment
          path={path}
          course={course}
          fetchCourse={fetchCourse}
        />
        <CourseManagmentContent
          path={path}
          course={course}
          formData={formData}
          setFormData={setFormData}
          basics={basics}
          setBasics={setBasics}
          setMessages={setMessages}
        />
      </div>
      <InstructorFooter />
    </>
  );
};

export default ManagementCourse;
