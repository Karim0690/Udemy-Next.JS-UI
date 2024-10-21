import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";


const CourseInstructorDetails = ({ course }) => {
    return (
        <>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Instructor</h2>
            <Link href="#">
                <h4 className="text-[#A435F0] text-xl font-bold hover:text-[#8710D8]">{course.instructor.name}</h4>
            </Link>
            <h6 className="text-slate-500 text-base">{course.instructor.title}</h6>
            <div className="flex mt-2" >
                <div className="mr-9 ">
                    <Link href="#">
                    <Avatar className="w-32 h-32">
                        <AvatarImage src={course.instructor.image} alt={course.instructor.name} />
                        <AvatarFallback className="text-4xl	text-white bg-black ">{course.instructor.name[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    </Link>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex">
                        <div className="mr-5 mt-1">
                            <FaStar />
                        </div>
                        <p className="text-slate-500 text-base"> {course.instructor.rate} Instructor Rating  </p>
                    </div>
                    <div className="flex">
                        <div className="mr-5 mt-1">
                            <FaAward />
                        </div>
                        <p className="text-slate-500 text-base"> {course.instructor.studentsRate} Reviews  </p>
                    </div>
                    <div className="flex">
                        <div className="mr-5 mt-1">
                            <MdPeopleAlt />
                        </div>
                        <p className="text-slate-500 text-base"> {course.instructor.students} Students  </p>
                    </div>
                    <div className="flex">
                        <div className="mr-5 mt-1">
                            <FaCirclePlay />
                        </div>
                        <p className="text-slate-500 text-base"> {course.instructor.courses} Courses  </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 mb-11">
                <p className="text-slate-500 text-sm">{course.instructor.bio}</p>
            </div>
            
        </>


    )
}

export default CourseInstructorDetails