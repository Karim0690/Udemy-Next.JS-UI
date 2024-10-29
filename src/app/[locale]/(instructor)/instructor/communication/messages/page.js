import React from "react";
import Image from "next/image";
import InstructorHeader from "../../InstructorHeader/InstructorHeader";
import SideNav from "../../InstructorSidenav/SideNav";
import InstructorFooter from "../../instractorFooter/page";

const Page = () => {
  return (
    <>
      <InstructorHeader />
      {/* Main Content */}
      <div className="flex">
        <div className="hidden md:block">
          <SideNav />
        </div>
        <div className="flex-1 flex flex-col my-10 mx-10 h-screen">
          <div className="flex items-baseline flex-col lg:flex-row gap-2 lg:gap-6">
            <h1 className="text-4xl font-serif font-bold text-gray-800">
              Messages
            </h1>
          </div>
          <div className="my-8 flex flex-col items-center text-center w-full md:w-1/3 mx-auto">
            <Image
              src="https://s.udemycdn.com/communication/empty-mailbox-v2.jpg"
              width={240}
              height={180}
              alt="Empty Q&A"
            />
            <h3 className="text-xl font-bold">No new messages</h3>
            <p className="text-gray-500">
              Direct messages are for you to communicate with your students or
              other instructors privately. Here’s where you’ll see them.
            </p>
          </div>
        </div>
      </div>
      <InstructorFooter />
    </>
  );
};

export default Page;
