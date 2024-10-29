"use client";
import { AiOutlineDown } from "react-icons/ai";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"; // Import ShadCN's Collapsible
import { IoChevronDownSharp } from "react-icons/io5";
import Link from "next/link";
import { PiMonitorPlayBold } from "react-icons/pi";
import { FaRegQuestionCircle } from "react-icons/fa";

const CourseContent = ({ sections, duration }) => {
  //   console.log(sections);
  //   console.log(sections);

  const [openSection, setOpenSection] = useState(null);
  const [showAllSections, setShowAllSections] = useState(false); // Toggle to show more/less sections

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const toggleShowAllSections = () => {
    setShowAllSections(!showAllSections); // Toggle between showing limited sections and all sections
  };

  // Determine the number of sections to display initially
  const displayedSections = showAllSections ? sections : sections.slice(0, 3); // Show first 3 sections by default

  const lecturesCount = sections
    .flatMap((section) => section.items)
    .filter((item) => item.type === "Lecture").length;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white  rounded-md">
      <h2 className="text-2xl font-bold text-slate-800">Course content</h2>
      <p className="text-slate-600 mt-2 mb-4">
        {sections.length} sections • {lecturesCount} lectures • {duration} total
        length
      </p>

      {/* Render the displayed sections */}
      {displayedSections.map((section, index) => {
        const lectureCount = section.items.filter(
          (item) => item.type === "Lecture",
        ).length;

        return (
          <Collapsible key={section.title} open={openSection === index}>
            {/* Section Header */}
            <CollapsibleTrigger asChild className="border">
              <button
                onClick={() => toggleSection(index)}
                className="flex justify-between border items-center w-full text-left p-3 bg-[#F7F9FA] rounded-lg"
              >
                <div className="flex items-center ">
                  <IoChevronDownSharp
                    size={-3}
                    color="black"
                    className={`h-5 w-5 transform mr-2 ${
                      openSection === index ? "rotate-180" : ""
                    }`}
                  />
                  <h3 className="font-bold text-black">{section.title}</h3>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    {lectureCount} lectures •{" "}
                    {/* Add other relevant info here */}
                  </p>
                </div>
              </button>
            </CollapsibleTrigger>

            {/* Section Content */}
            <CollapsibleContent>
              <ul className="border border-t-0 p-3">
                {section.items.map((item) => {
                  if (item.type === "Lecture") {
                    return (
                      <li
                        key={item._id}
                        className="flex items-center flex-1 justify-between py-2"
                      >
                        <div className="flex items-center">
                          <PiMonitorPlayBold className=" mr-3" />
                          <Link
                            href={`/lecture/${item._id}`}
                            className="text-violet-700 underline hover:text-violet-900"
                          >
                            {item.item.title}
                          </Link>
                        </div>
                        <span className="text-slate-500 text-sm ml-2">
                          {Number(item.item.duration / 60).toFixed(2)}
                        </span>
                      </li>
                    );
                  } else if (item.type === "Quiz") {
                    return (
                      <li
                        key={item._id}
                        className="flex items-center flex-1 justify-between py-2"
                      >
                        <div className="flex items-center">
                          <FaRegQuestionCircle className="mr-3" />
                          <Link
                            href={`/lecture/${item._id}`}
                            className="text-gray-800 hover:underline"
                          >
                            {item.item.title}
                          </Link>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        );
      })}

      {/* Show More / Show Less Button */}
      <div className="mt-4">
        {sections.length > 5 && (
          <button
            onClick={toggleShowAllSections}
            className="px-4 w-full mb-9 py-4 border shadow-md	 bg-[#FFFFFF] hover:bg-[#E3E7EA]"
            hidden={showAllSections}
          >
            {`${sections.length - 5} more sections`}
          </button>
        )}
      </div>
    </div>
  );
};
export default CourseContent;

{
  /*  const sections = [
    {
      title: "Introduction to Tailwind CSS",
      duration: "10m",
      lectures: [
        { title: "Welcome", duration: "2m" },
        { title: "What is Tailwind?", duration: "3m" },
        { title: "Setting up Tailwind", duration: "5m" },
      ],
    },
    {
      title: "Tailwind Basics",
      duration: "3h ",
      lectures: [
        { title: "Utility-first CSS", duration: "20m" },
        { title: "Responsive Design", duration: "30m" },
        { title: "Customizing Tailwind", duration: "40m" },
        { title: "Utility-first CSS", duration: "20m" },
        { title: "Responsive Design", duration: "30m" },
        { title: "Customizing Tailwind", duration: "40m" },
      ],
    },
    {
      title: "Advanced Tailwind Techniques",
      duration: "1h 15m",
      lectures: [
        { title: "Using Plugins", duration: "15m" },
        { title: "Optimizing for Production", duration: "30m" },
        { title: "Building Custom Components", duration: "30m" },
      ],
    },
    {
      title: "Introduction to Tailwind CSS",
      duration: "10m",
      lectures: [
        { title: "Welcome", duration: "2m" },
        { title: "What is Tailwind?", duration: "3m" },
        { title: "Setting up Tailwind", duration: "5m" },
      ],
    },
    {
      title: "Tailwind Basics",
      duration: "1h 30m",
      lectures: [
        { title: "Utility-first CSS", duration: "20m" },
        { title: "Responsive Design", duration: "30m" },
        { title: "Customizing Tailwind", duration: "40m" },
      ],
    },
    {
      title: "Advanced Tailwind Techniques",
      duration: "2h 30m",
      lectures: [
        { title: "Using Plugins", duration: "15m" },
        { title: "Optimizing for Production", duration: "30m" },
        { title: "Building Custom Components", duration: "30m" },
        { title: "Using Plugins", duration: "15m" },
        { title: "Optimizing for Production", duration: "30m" },
        { title: "Building Custom Components", duration: "30m" },
      ],
    },
    {
      title: "Introduction to Tailwind CSS",
      duration: "10m",
      lectures: [
        { title: "Welcome", duration: "2m" },
        { title: "What is Tailwind?", duration: "3m" },
        { title: "Setting up Tailwind", duration: "5m" },
      ],
    },
    {
      title: "Tailwind Basics",
      duration: "1h 30m",
      lectures: [
        { title: "Utility-first CSS", duration: "20m" },
        { title: "Responsive Design", duration: "30m" },
        { title: "Customizing Tailwind", duration: "40m" },
      ],
    },
    {
      title: "Advanced Tailwind Techniques",
      duration: "1h 15m",
      lectures: [
        { title: "Using Plugins", duration: "15m" },
        { title: "Optimizing for Production", duration: "30m" },
        { title: "Building Custom Components", duration: "30m" },
      ],
    },
    {
      title: "Introduction to Tailwind CSS",
      duration: "10m",
      lectures: [
        { title: "Welcome", duration: "2m" },
        { title: "What is Tailwind?", duration: "3m" },
        { title: "Setting up Tailwind", duration: "5m" },
      ],
    },
    {
      title: "Tailwind Basics",
      duration: "1h 30m",
      lectures: [
        { title: "Utility-first CSS", duration: "20m" },
        { title: "Responsive Design", duration: "30m" },
        { title: "Customizing Tailwind", duration: "40m" },
      ],
    },
    {
      title: "Advanced Tailwind Techniques",
      duration: "1h 15m",
      lectures: [
        { title: "Using Plugins", duration: "15m" },
        { title: "Optimizing for Production", duration: "30m" },
        { title: "Building Custom Components", duration: "30m" },
      ],
    },
  ];*/
}
