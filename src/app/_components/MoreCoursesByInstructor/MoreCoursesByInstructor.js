import Link from 'next/link';
import React from 'react';
import CoursePrice from '../CorusePrice/CoursePrice';
import Rating from '../Rating/Rating';

const MoreCoursesByInstructor = ({ course }) => {
    // Create an array with 3 copies of the single course
    const repeatedCourses = Array(3).fill(course);

    function convertDurationToDecimal(duration) {
        let hours = 0;
        let minutes = 0;

        // Regular expression to extract hours and minutes from the string
        const hourMatch = duration.match(/(\d+)h/);
        const minuteMatch = duration.match(/(\d+)m/);

        // If hours are present, parse them
        if (hourMatch) {
            hours = parseInt(hourMatch[1], 10);
        }

        // If minutes are present, parse them
        if (minuteMatch) {
            minutes = parseInt(minuteMatch[1], 10);
        }

        // Convert minutes to a decimal fraction of an hour and add to hours
        const decimalHours = hours + minutes / 60;

        return decimalHours.toFixed(1); // Limit the result to 1 decimal place
    }
    return (
        <>
            <div className="mt-9">
                <h2 className="text-xl font-bold text-slate-800">
                    More Courses by
                    <Link href="#">
                        <span className="ml-1 text-[#A435F0] text-xl font-bold hover:text-[#8710D8]">
                            {course.instructor.name}
                        </span>
                    </Link>
                </h2>

                <div className="flex space-x-6 border-b-2 border-gray-300 mb-9 pb-9 mt-7">
                    {repeatedCourses.map((co, index) => (
                        <div
                            key={index}
                            className="  shadow-md rounded-lg  w-full"
                        >
                            <img
                                src={co.courseImg}
                                alt={co.title}
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <div className="ml-1">

                                <h3 className="font-semibold  text-lg mt-4 text-slate-700">
                                    {co.title}
                                </h3>

                                <p className=" text-slate-400 text-sm">{course.instructor.name}</p>
                                <div className="flex">
                                    <p className="text-[#4D3105] font-bold">{course.rating}</p>
                                    <Rating ratingValue={course.rating} />
                                    <p className="text-slate-400"> ({course.numberOfStudent})</p>
                                </div>
                                <p className=" text-slate-400 text-sm">{convertDurationToDecimal(course.duration)} total hours • {course.numberOfLecture} • All Levels </p>
                                <p className="font-semibold  text-lg mt-4 text-slate-700"> <CoursePrice price={course.price} /></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MoreCoursesByInstructor;
