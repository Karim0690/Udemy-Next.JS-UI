import React from "react";
import Rating from "../Rating/Rating";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CoursePrice from "../CorusePrice/CoursePrice";

const FrequentlyBoughtTogether = ({ courses }) => {
  const totalPrice = courses.slice(0, 3).reduce((total, course) => {
    const price = Number(course.price);
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div className="my-5 border p-4">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        Frequently Bought Together
      </h2>
      <div className="flex flex-col space-y-5">
        {courses.slice(0, 3).map((course) => (
          <div key={course._id} className="w-full">
            <div className="flex justify-between items-start">
              {/* Course Image, Title, Instructor, Rating */}
              <div className="flex">
                <div>
                  <Image
                    src={course.courseImage || "/placeholder.jpg"} // Fallback image
                    width={280}
                    height={100}
                    className="w-20 h-20 md:w-52 md:h-[90px]"
                  />
                </div>
                <div className="md:flex ml-3">
                  <div className="flex flex-col justify-around">
                    <h3 className="text-md font-bold text-slate-800 w-60">
                      {course.title}
                    </h3>
                    <p className="text-xs text-stone-400">
                      {course.instructor?.name || "Unknown Instructor"}
                    </p>
                    <div className="flex items-center text-xs md:text-sm">
                      <div className="flex items-center">
                        <span className="text-[#4D3105] mr-2 font-extrabold">
                          {course.rating?.average || "N/A"}
                        </span>
                        <Rating
                          ratingValue={course.rating?.average}
                          readOnly={true}
                          className="mt-1"
                        />
                      </div>
                      <span className="mr-3 ml-4 text-stone-400 font-semibold">
                        ({course.enrollments || 0})
                      </span>
                    </div>
                  </div>
                  <div className="font-bold text-slate-800">
                    <CoursePrice price={course.price} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex justify-between items-center mt-5">
        {/* Total Price on the right */}
        <p className="text-xl font-bold text-slate-800">
          Total: <CoursePrice price={totalPrice} />
        </p>

        {/* Add all to cart button at the end */}
        <Button className="bg-[#A435F0] hover:bg-[#8710D8] text-white font-bold p-4 mt-4 md:mt-0 w-full md:w-auto">
          Add all to cart
        </Button>
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
