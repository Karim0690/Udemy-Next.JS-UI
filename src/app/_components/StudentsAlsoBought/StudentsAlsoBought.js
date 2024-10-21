'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import CoursePrice from '../CorusePrice/CoursePrice';

const StudentsAlsoBought = ({ courses }) => {
  const [showMore, setShowMore] = useState(false);
  const itemsToShow = showMore ? courses.length : 3; // Show 3 courses by default

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-slate-800">
        Students also bought
      </h2>
      <div className="flex flex-auto flex-col	  ">
        
        {courses.slice(0, itemsToShow).map((course) => (
          <div key={course.id} className="flex border-b-2 p-4 rounded-lg ">
            <div className='w-28 h-16 mr-2'>
            <img
              src={course.courseImg}
              alt={course.title}
              className="w-full h-full object-cover rounded-md mb-4"
              />
              </div>
            <h3 className="text-lg font-medium w-2/5 text-slate-900 mb-2">
              {course.title}
            </h3> 
            <span className="text-yellow-600 mr-5 font-extrabold text-sm">
              {course.rating}⭐
            </span>
            <span className='mr-7'>
              👥{course.numberOfStudent}
            </span>
            <p className="text-lg font-semibold text-slate-700">
              {<CoursePrice price={course.price}/>}
            </p>
            
          </div>
        ))}
      </div>
      
      {/* Show More/Show Less Button */}
      {courses.length > 3 && (
        <button
          onClick={toggleShowMore}
          className="px-4 w-full mb-9 py-4 border-b	border-x border	 bg-[#FFFFFF] hover:bg-[#E3E7EA]"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default StudentsAlsoBought;
