
import React from 'react'
import { IoIosStar } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Rating from '../Rating/Rating';
import CourseCommentReview from '../CourseCommentReview/CourseCommentReview';
import { Button } from '@/components/ui/button';

const CourseComment = ({ course }) => {
  const comments = [
    {
      name: "John Doe",date:"2 weeks" ,rating: 5, comment: "Very nice course, projects are varied.Maybe try to ask simple exercice with correction before to dive into bigger projects." },
    {
      name: "Jane Smith", date: "a month", rating: 4.5, comment: "Excellent content with ample practical exercises. The course of fast paced so I did find I had to pause the videos occasionally. I really enjoyed the course and hope that there are more Tailwind project courses in the future." },
    {
      name: "Sam Wilson", date: "a month" ,rating: 5, comment: "This was very informative. Very fun well designed projects." },
    {
      name: "Emily Davis", date: "a month" ,rating: 4.5, comment: "Great course to get you proficient in Tailwind. Rob is the man, check out his other courses when you get a chance." },
  ];

  return (
    <>
      <div className="flex items-center text-2xl font-bold text-slate-800 mb-7">
        <IoIosStar color="#B4690E" size={24} />
        <h2 className="ml-2"> {course.rating} course rating • {(course.numberOfRates > 999) ? `${Math.floor(course.numberOfRates / 1000)}K` : course.numberOfRates} ratings </h2>
      </div>
      <div className="flex flex-wrap justify-between  space-x-2">
        {comments.map((comment, index) => (
          <div key={index} className="mb-4 p-4 border-t  w-[45%] ">
            {/* Left part: User info and name */}
            <div className="flex items-center ">
              <div>
                <Avatar className="w-11 h-11">
                  {/* <AvatarImage src={course.instructor.image} alt={course.instructor.name} /> */}
                  <AvatarFallback className="text-xl font-bold	text-white bg-[#2D2F31] ">{`${comment.name.split(' ')[0][0].toUpperCase()}${comment.name.split(' ')[1][0].toUpperCase()}`}</AvatarFallback>
                </Avatar>
              </div >
                
              <div className="flex flex-col ml-7">
                <h3 className="text-lg font-bold text-slate-800" >{comment.name}</h3>
                <Rating className="bg-[#B4690E]" ratingValue={comment.rating}/>
              </div>
            </div>

            {/* Right part: Comment and rating */}
            <div className="mt-5">
              <p className="text-gray-600">{comment.comment}</p>
              <CourseCommentReview />
            </div>
          </div>
        ))}
        <Button className="py-4  border border-black	 bg-[#FFFFFF] hover:bg-[#E3E7EA]">Show all reviews</Button>
      </div>
    </>

  )
}

export default CourseComment