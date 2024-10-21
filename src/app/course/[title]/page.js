import AboutLearning from "@/app/_components/AboutLearning/AboutLearning";
import CourseHeader from "@/app/_components/CourseHeader/CourseHeader";
import CourseSideBar from "@/app/_components/CourseSideBar/CourseSideBar";
import Tags from "@/app/_components/Tags/Tags";
import React from "react";
import { PiMonitorPlayBold } from "react-icons/pi";
import { MdOutlineSmartphone } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
import { BsFileEarmark } from "react-icons/bs";
import { RiFolderDownloadLine } from "react-icons/ri";
import TopCompanies from '@/app/_components/TopCompanies/TopCompanies';
import CourseContent from '@/app/_components/CourseContent/CourseContent';
import ReqAndDesc from '@/app/_components/ReqAndDesc/ReqAndDesc';
import StudentsAlsoBought from '@/app/_components/StudentsAlsoBought/StudentsAlsoBought';
import FrequentlyBoughtTogother from "@/app/_components/FrequentlyBoughtTogother/FrequentlyBoughtTogother";
import CourseInstructorDetails from "@/app/_components/CourseInstructorDetails/CourseInstructorDetails";
import CourseCommentReview from "@/app/_components/CourseCommentReview/CourseCommentReview";
import CourseComment from "@/app/_components/CourseComment/CourseComment";
import MoreCoursesByInstructor from "@/app/_components/MoreCoursesByInstructor/MoreCoursesByInstructor";



const page = () => {
    const course = {
        title: "Tailwind CSS From Scratch | Learn By Building Projects",
        description:
            "Build great looking layouts fast and efficiently using Tailwind CSS utility classes",
        categories: ["Development", "Web Development", "Tailwind CSS"],
        rating: "4.8",
        numberOfRates: 3768,
        numberOfStudent: 25627,
        topics: [
            "Learn to create and edit layouts super fast",
            "Learn the Tailwind utility classes using a code sandbox",
            "Build 5 mini-projects and 6 website projects",
            "Learn how to set up a dev environment using the Tailwind CLI",
            "Configure your styles to create custom layouts",
        ],
        courseImg:
            "data:image/jpeg;base64,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",
        instructor: {
            name: "Brad Traversy",
            image: "https://img-b.udemycdn.com/user/200_H/21681922_4513_5.jpg",
            title: "Full Stack Web Developer & Instructor at Traversy Media",
            rate: 4.7 ,
            studentsRate: 173418,
            students: 502771,
            courses: 24,
            bio:`Brad Traversy has been programming for around 12 years and teaching for almost 5 years. He is the owner of Traversy Media which is a successful web development YouTube channel and specializes in everything from HTML5 to front end frameworks like Angular as well as server side technologies like Node.js, PHP and Python. Brad has mastered explaining very complex topics in a simple manner that is very understandable. Invest in your knowledge by watching Brad's courses.`
        },
        price: 1499.99,
        enrolled: 1200,
        numOfArticle: 1,
        numOfCertificate: 1,
        numOfResources: 10,
        duration: "5h 30m",
        sections: [
            { title: "Introduction", lessons: ["Welcome", "Setup", "First Steps"] },
            { title: "Core Concepts", lessons: ["Flexbox", "Grid", "Spacing"] },
        ],
        requirments : ["You should know the basics of CSS"],
        WhoThisCourseIsFor:["Anyone that wants to get better at creating website and UI layouts"],
  
    };
    let courses = [course, course, course, course, course, course, course, course, course, course, course, course]

    return (
        <>
            <div className="w-full z-[1] mx-auto fixed top-0 bg-[#2D2F31] text-white shadow-sm">
                <div className="px-4 py-1">
                    <div>
                        <h1 className="font-bold text-base">{course.title}</h1>
                    </div>
                    <div className="text-sm mt-1">
                        <span className="bg-[#ECEB98] px-3 py  text-[#3D3C0A]  mr-4 text-sm">
                            Bestseller
                        </span>
                        <span className="text-yellow-500 mr-2 font-sans font-extrabold text-sm">
                            {course.rating}⭐
                        </span>
                        <span className="text-indigo-400 font-semibold underline underline-offset-2">
                            ({course.numberOfRates} ratings)
                        </span>
                        <span className="ml-2">
                            {course.numberOfStudent} students
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative max-w-[1440px] mx-auto bg-[#2D2F31]">
                <div className="w-[50%] ml-36 pb-10">
                    <CourseHeader
                        title={course.title}
                        description={course.description}
                        categories={course.categories}
                        rating={course.rating}
                        numberOfRates={course.numberOfRates}
                        numberOfStudent={course.numberOfStudent}
                        instructorName={course.instructor.name}
                        courseImg={course.courseImg}
                        price={course.price}
                    />
                </div>
                <div className="w-[360px] my-4 absolute  top-4 right-36">
                    <CourseSideBar courseImg={course.courseImg} price={course.price} />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-1 ">
                <div className="col-start-2 col-end-8">
                    <div className="mt-11">
                        <AboutLearning topics={course.topics} />
                    </div>
                    <h2 className="text-3xl mt-9 font-bold text-slate-800">
                        Explore related topics
                    </h2>
                    <Tags tags={course.categories} />

                    <h2 className="text-3xl mt-20 font-bold text-slate-800">
                        This course includes:
                    </h2>
                    <div>
                        <ul className=" grid grid-cols-2 gap-3 mt-5">
                            <li className="flex items-start mb-2 font-light ">
                                <PiMonitorPlayBold className=" mr-3" />
                                <span>{course.duration} on-demand video</span>
                            </li> 
                            <li className="flex items-start mb-2 font-light">
                                <MdOutlineSmartphone className=" mr-3" />
                                <span>Access on mobile and TV</span>
                            </li>
                            <li className="flex items-start mb-2 font-light">
                                <BsFileEarmark className=" mr-3" />
                                <span>{course.numOfArticle} article</span>
                            </li>
                            <li className="flex items-start mb-2 font-light">
                                <FaTrophy className=" mr-3" />
                                <span>{course.numOfCertificate} Certificate of completion</span>
                            </li>
                            <li className="flex items-start mb-2 font-light">
                                <RiFolderDownloadLine className=" mr-3" />
                                <span>{course.numOfResources} downloadable resources</span>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <TopCompanies   />
                    </div>
                    <div>
                        <CourseContent/>
                    </div>
                    <div> <ReqAndDesc requirments={course.requirments}  WhoThisCourseIsFor={course.WhoThisCourseIsFor}/> </div>
                    <div> <StudentsAlsoBought courses={courses} /></div>
                    <div><FrequentlyBoughtTogother courses={courses.splice(9)} /></div>
                    <div> <CourseInstructorDetails course={course} /> </div>
                    <div> <CourseComment course={course} /> </div>
                    <div>       <MoreCoursesByInstructor course={course} /> </div>
                </div>
            </div>
        </>
    );
};

export default page;
