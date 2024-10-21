import React from "react";
import Rating from "../Rating/Rating";
import CoursePrice from "../CorusePrice/CoursePrice";
import { Button } from "@/components/ui/button";

const FrequentlyBoughtTogother = ({ courses }) => {
    const totalPrice = courses.reduce((total, course) => total + course.price, 0);

    return (
        <div className="my-5 border-2 p-4">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Bought Together</h2>
            <div className="flex flex-col space-y-5">
                {courses.map(course => (
                    <div key={course.id} className="w-full">
                        <div className="flex justify-between">
                            {/* Course Image, Title, Instructor, Rating */}
                            <div className="flex">
                                <div className="w-48">
                                    <img src={course.courseImg} alt={course.title} className="w-full h-full" />
                                </div>
                                <div className="flex flex-col ml-3 w-60">
                                    <h3 className="text-md w-80 font-bold text-slate-800 ">{course.title}</h3>
                                    <p className="text-lg text-stone-400">{course.instructor.name}</p>
                                    <div className="flex items-center">
                                        <span className="text-[#4D3105] mr-2 font-sans font-extrabold">{course.rating}</span>
                                        <Rating ratingValue={course.rating} readOnly={true} className="mt-9 bg-[#B56B11]" />
                                        <a className="mr-3 ml-4 text-stone-400 font-semibold">({course.numberOfRates})</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center font-bold text-slate-800">
                                <CoursePrice price={course.price} />

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center mt-5">
                {/* Total Price on the right */}
                <p className="text-xl font-bold text-slate-800">
                    Total: <CoursePrice price={totalPrice} />
                </p>

                {/* Add all to cart button at the end */}
                <Button className="bg-[#A435F0] hover:bg-[#8710D8] text-white font-bold p-7" >Add all to cart</Button>
            </div>
        </div>
    );
};

export default FrequentlyBoughtTogother;
