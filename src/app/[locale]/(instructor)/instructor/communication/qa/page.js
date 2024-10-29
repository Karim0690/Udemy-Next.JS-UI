import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GoChevronDown } from "react-icons/go";
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
            <h1 className="text-4xl font-serif font-bold text-gray-800">Q&A</h1>
            <DropdownMenu>
              <div className="text-2xl font-bold">
                <DropdownMenuTrigger className="appearance-none outline-none flex items-center gap-3">
                  All Courses
                  <GoChevronDown className="text-xs" />
                </DropdownMenuTrigger>
              </div>
              <DropdownMenuContent className="w-48 mt-4 bg-white">
                <DropdownMenuLabel className="font-normal text-sm hover:text-violet-700 cursor-pointer">
                  All Courses
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:text-violet-700 cursor-pointer">
                  Course 1
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-violet-700 cursor-pointer">
                  Course 2
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-violet-700 cursor-pointer">
                  Course 3
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="my-8 flex flex-col items-center text-center w-full md:w-[430px] mx-auto">
            <Image
              src="https://s.udemycdn.com/communication/empty-mailbox-v2.jpg"
              width={240}
              height={180}
              alt="Empty Q&A"
            />
            <h3 className="text-xl font-bold">No questions yet</h3>
            <p className="text-gray-500">
              Q&A is a forum where your students can ask questions, hear your
              responses, and respond to one another. Here’s where you’ll see
              your courses’ Q&A threads
            </p>
          </div>
        </div>
      </div>
      <InstructorFooter />
    </>
  );
};

export default Page;
