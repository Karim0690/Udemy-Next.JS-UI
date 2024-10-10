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
        <div className="flex-1 flex flex-col h-screen my-10 mx-5 md:mx-14">
          <div className="flex items-baseline flex-col lg:flex-row gap-2 lg:gap-6">
            <h1 className="text-4xl font-serif font-bold text-gray-800">
              Announcements
            </h1>
          </div>
          <div className="my-8 flex flex-col items-center text-center md:w-1/3 mx-auto">
            <Image
              src="https://s.udemycdn.com/communication/empty-mailbox-v2.jpg"
              width={240}
              height={180}
              alt="Empty Q&A"
            />
            <h3 className="text-xl font-bold">No announcements yet</h3>
            <p className="text-gray-500">
              Here’s where you can send your students a few email announcements
              every month. Use educational emails to support your students’
              learning. Use promotional emails to market your courses.
              <a
                href="#"
                className="
           text-violet-800 underline
            "
              >
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
      <InstructorFooter />
    </>
  );
};

export default Page;
