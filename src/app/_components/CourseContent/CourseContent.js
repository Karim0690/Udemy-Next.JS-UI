"use client"
import { AiOutlineDown } from 'react-icons/ai';
import React, { useState } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'; // Import ShadCN's Collapsible

const CourseContent = () => {
    
    
    const [openSection, setOpenSection] = useState(null);
    const [showAllSections, setShowAllSections] = useState(false); // Toggle to show more/less sections

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const toggleShowAllSections = () => {
        setShowAllSections(!showAllSections); // Toggle between showing limited sections and all sections
    };


    const sections = [
        {
            title: "Introduction to Tailwind CSS",
            duration: "10m",
            lectures: [
                { title: "Welcome", duration: "2m" },
                { title: "What is Tailwind?", duration: "3m" },
                { title: "Setting up Tailwind", duration: "5m" }
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
                { title: "Building Custom Components", duration: "30m" }
            ],
        },
        {
            title: "Introduction to Tailwind CSS",
            duration: "10m",
            lectures: [
                { title: "Welcome", duration: "2m" },
                { title: "What is Tailwind?", duration: "3m" },
                { title: "Setting up Tailwind", duration: "5m" }
            ],
        },
        {
            title: "Tailwind Basics",
            duration: "1h 30m",
            lectures: [
                { title: "Utility-first CSS", duration: "20m" },
                { title: "Responsive Design", duration: "30m" },
                { title: "Customizing Tailwind", duration: "40m" }
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
                { title: "Setting up Tailwind", duration: "5m" }
            ],
        },
        {
            title: "Tailwind Basics",
            duration: "1h 30m",
            lectures: [
                { title: "Utility-first CSS", duration: "20m" },
                { title: "Responsive Design", duration: "30m" },
                { title: "Customizing Tailwind", duration: "40m" }
            ],
        },
        {
            title: "Advanced Tailwind Techniques",
            duration: "1h 15m",
            lectures: [
                { title: "Using Plugins", duration: "15m" },
                { title: "Optimizing for Production", duration: "30m" },
                { title: "Building Custom Components", duration: "30m" }
            ],
        },
        {
            title: "Introduction to Tailwind CSS",
            duration: "10m",
            lectures: [
                { title: "Welcome", duration: "2m" },
                { title: "What is Tailwind?", duration: "3m" },
                { title: "Setting up Tailwind", duration: "5m" }
            ],
        },
        {
            title: "Tailwind Basics",
            duration: "1h 30m",
            lectures: [
                { title: "Utility-first CSS", duration: "20m" },
                { title: "Responsive Design", duration: "30m" },
                { title: "Customizing Tailwind", duration: "40m" }
            ],
        },
        {
            title: "Advanced Tailwind Techniques",
            duration: "1h 15m",
            lectures: [
                { title: "Using Plugins", duration: "15m" },
                { title: "Optimizing for Production", duration: "30m" },
                { title: "Building Custom Components", duration: "30m" }
            ],
        },
    ];

    // Determine the number of sections to display initially
    const displayedSections = showAllSections ? sections : sections.slice(0, 3); // Show first 3 sections by default

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white  rounded-md">
            <h2 className="text-2xl font-bold text-slate-800">Course content</h2>
            <p className="text-slate-600 mt-2 mb-4">
                {sections.length} sections • {sections.reduce((total, section) => total + section.lectures.length, 0)} lectures • 3h 15m total length
            </p>

            {/* Render the displayed sections */}
            {displayedSections.map((section, index) => (
                <Collapsible key={section.title} open={openSection === index}>
                    {/* Section Header */}
                    <CollapsibleTrigger asChild className="border">
                        <button
                            onClick={() => toggleSection(index)}
                            className="flex justify-between border-1 items-center w-full text-left p-4 bg-[#F7F9FA] rounded-lg"
                        >
                            <div className="flex items-center ">
                                <AiOutlineDown
                                    size={-3}
                                    color="black"
                                    className={`h-5 w-5 transform mr-2 ${openSection === index ? 'rotate-180' : ''}`}
                                />
                                <h3 className="font-semibold text-slate-800">{section.title}</h3>
                            </div>

                            <div> 
                                <p className="text-slate-500 text-sm">{section.lectures.length } lectures • {section.duration}</p>

                            </div>
                        </button>
                    </CollapsibleTrigger>

                    {/* Section Content */}
                    <CollapsibleContent>
                        <ul className="mt-3 pl-5 list-disc">
                            {section.lectures.map((lecture) => (
                                <li key={lecture.title} className="flex justify-between py-2">
                                    <span className="text-slate-700">{lecture.title}</span>
                                    <span className="text-slate-500 text-sm">{lecture.duration}</span>
                                </li>
                            ))}
                        </ul>
                    </CollapsibleContent>
                </Collapsible>
            ))}

            {/* Show More / Show Less Button */}
            <div className="mt-4">
                {sections.length > 5 && (
                    <button
                        onClick={toggleShowAllSections}
                        className="px-4 w-full mb-9 py-4 border shadow-md	 bg-[#FFFFFF] hover:bg-[#E3E7EA]"
                        hidden = {showAllSections}
                    >
                        {`${sections.length - 5} more sections`}
                    </button>
                )}
        </div>
        </div>
    );
};
export default CourseContent;
