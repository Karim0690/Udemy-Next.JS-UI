import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import Rating from "../Rating/Rating";
import CourseSideBar from "../CourseSideBar/CourseSideBar";

const CourseHeader = ({
  title,
  description,
  category,
  subcategory,
  topics,
  rating,
  numberOfStudent,
  numberOfRates,
  instructorName,
  courseImg,
  price,
}) => {
  return (
    <div className=" text-white p-3 ">
      <div className="mt-5 mb-7">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-indigo-300  font-bold ">
                {category.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-indigo-300  font-bold ">
                {subcategory.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-indigo-300  font-bold ">
                {topics[0].name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-2xl mt-7">{description}</p>

      <div className="flex items-center mt-5 ">
        <span className="bg-[#ECEB98] px-3 py-1 font-semibold text-[#3D3C0A]  mr-4 text-sm">
          Bestseller
        </span>
        <div className="flex justify-center items-center">
          <span className="text-yellow-500 mr-2  font-extrabold">{rating}</span>
          <Rating ratingValue={rating} readOnly={true} />
        </div>
        <a className="mr-3 ml-4 text-indigo-400 font-semibold underline">
          ({numberOfRates} ratings){" "}
        </a>
        <p className="font-medium	">{numberOfStudent} students</p>
      </div>
      <div className="flex items-center justify-start mt-5">
        <p>Created by</p>
        <a className="mr-3 ml-4 text-indigo-400 font-semibold underline">
          {instructorName}
        </a>
      </div>
    </div>
  );
};

export default CourseHeader;
