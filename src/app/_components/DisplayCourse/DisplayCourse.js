"use client"
import AboutLearning from "@/app/_components/AboutLearning/AboutLearning";
import CourseHeader from "@/app/_components/CourseHeader/CourseHeader";
import CourseSideBar from "@/app/_components/CourseSideBar/CourseSideBar";
import Tags from "@/app/_components/Tags/Tags";
import React, { useEffect, useState } from "react";
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
import useCourseStore from "@/app/store/courseStore";

// export async function fetchdata(id) {

    
//     try {
//         const res = await fetch(`https://udemy-eosin-eight.vercel.app/course/${id}`);
//         const data = await res.json();
        
//         // console.log(data);
        

//         if (!data.data) {
//             return { notFound: true };
//         }

//         return data.data.course;
//     } catch (error) {
//         console.error("Error fetching course", error);
//         return null;
//     }
        
 
// }



const DisplayCourse =  ({ slug  }) => {
    const [loading,setLoading] = useState(true);   
    const {courseTitle , fetchCoursetitle}= useCourseStore();
    useEffect(() => {
        const fetch =  () => {

            fetchCoursetitle(slug); 
           console.log(courseTitle);
           
           }   
       fetch(); 

       setLoading(false); 

    
    
    }, [])
    
    useEffect(() => {
        const fetch =  () => {

             fetchCoursetitle(slug); 
            console.log(courseTitle);
            
            }   
        fetch(); 

        setLoading(false); 
    }, []);   
 
    let course = courseTitle;
    // console.log(data);
    console.log(course);
    console.log("========================================================================================================")
    
    // console.log(Object.keys(course)) ;

    
    // const instructor = await fetchInstructorData(); 
    
  
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
                        <span className="text-yellow-500 mr-2 font-extrabold text-sm">
                            {course.rating.average}⭐
                        </span>
                        <span className="text-indigo-400 font-semibold underline underline-offset-2">
                            ({course.rating.court} ratings)
                        </span>
                        <span className="ml-2">
                            {course.enrollments} students
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative max-w-[1440px] mx-auto bg-[#2D2F31]">
                <div className="w-[50%] ml-36 pb-10">
                  <CourseHeader
                        title={course.title}
                        description={course.subtitle}
                        categories={[course.category.name,course.subcategory.name,course.topics[0]]}
                        rating={course.rating.average}
                        numberOfRates={course.rating.count}
                        numberOfStudent={course.enrollments}
                        instructorName={course.instructor.name}
                        courseImg={course.courseImage}
                        price={course.price}
                    />
                </div>
                <div className="w-[360px] my-4 absolute  top-4 right-36">
                    <CourseSideBar courseImg={course.courseImage} price={course.price} />
                </div>
            </div>
            {/* <div className="grid grid-cols-12 gap-1 ">
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
            </div> */}
        </>
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
