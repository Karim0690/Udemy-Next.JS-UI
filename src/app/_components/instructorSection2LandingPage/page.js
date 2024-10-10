import ReuseableInstructorCard from "@/app/(instructor)/instructor/reuseableInstructorCard/page";
import Link from "next/link";
import {
  MdOutlineOndemandVideo,
  MdQuestionAnswer,
  MdHelpCenter,
  MdInsights,
} from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

function InstructorSection2LandingPage() {
  return (
    <>
      <h1 className="text-center text-gray-700 my-20 ml-20 mr-10">
        Based on your experience, we think these resources will be helpful.
      </h1>
      <div className="md:ml-20 md:mr-10">
        <ReuseableInstructorCard
          image="https://s.udemycdn.com/instructor/dashboard/engaging-course.jpg"
          name="Create an Engaging Course"
          des="Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting."
        />
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <ReuseableInstructorCard
              image="https://s.udemycdn.com/instructor/dashboard/video-creation.jpg"
              name="Get Started with Video"
              des="Quality video lectures can set your course apart. Use our resources to learn the basics."
            />
          </div>
          <div className="flex-1">
            <ReuseableInstructorCard
              image="https://s.udemycdn.com/instructor/dashboard/build-audience.jpg"
              name="Build Your Audience"
              des="Set your course up for success by building your audience"
            />
          </div>
        </div>
        <ReuseableInstructorCard
          image="https://s.udemycdn.com/instructor/dashboard/newcomer-challenge.jpg"
          name="Join the New Instructor Challenge!"
          des="Get exclusive tips and resources designed to help you launch your first course faster! Eligible instructors who publish their first course on time will receive a special bonus to celebrate. Start today!"
        />
      </div>
      <h1 className="text-center text-gray-700 my-20 ml-20 mr-10">
        Have questions? Here are our most popular instructor resources.
      </h1>

      <div className="ml-20 mr-10 lg:mx-auto pb-20 my-20 flex flex-wrap gap-5 justify-center items-baseline">
        <div className="flex justify-center items-center flex-col ">
          <Link
            href="test-video/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center max-w-[230px]"
          >
            <MdOutlineOndemandVideo size={50} />
            <span className="underline text-[#5022c3] font-bold mt-2">
              Test Video
            </span>
            <div className="mt-2">
              Send us a sample video and get expert feedback.
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Link
            href="test-video/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center max-w-[230px]"
          >
            <MdQuestionAnswer size={50} />
            <span className="underline text-[#5022c3] font-bold mt-2">
              Instructor Community
            </span>
            <div className=" mt-2">
              Connect with experienced instructors. Ask questions, browse
              discussions, and more
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Link
            href="test-video/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center max-w-[230px]"
          >
            <FaChalkboardTeacher size={50} />
            <span className="underline text-[#5022c3] font-bold mt-2">
              Teaching Center
            </span>
            <div className=" mt-2">
              Learn about best practices for teaching on Udemy.
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Link
            href="test-video/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center max-w-[230px]"
          >
            <MdInsights size={50} />
            <span className="underline text-[#5022c3] font-bold mt-2">
              Marketplace Insights
            </span>
            <div className=" mt-2">
              Validate your course topic by exploring our marketplace supply and
              demand.
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Link
            href="test-video/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center max-w-[230px]"
          >
            <MdHelpCenter size={50} />
            <span className="underline text-[#5022c3] font-bold mt-2">
              Help and Support
            </span>
            <div className=" mt-2">
              Browse our Help Center or contact our support team.
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default InstructorSection2LandingPage;
