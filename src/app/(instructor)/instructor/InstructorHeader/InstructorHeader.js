"use client";
import React, { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegBell } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdOutlineOpenInNew } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useUserStore from "@/app/store/userStore";

const InstructorHeader = () => {
  const router = useRouter();
  let avatar;
  const { user, setUser } = useUserStore();
  useEffect(() => {
    setUser();
  }, [setUser]);

  if (user) {
    avatar = (user.name.charAt(0) + user.name.charAt(1)).toUpperCase();
  }

  const signOut = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div className="hidden md:flex justify-start items-center flex-row-reverse gap-8 mx-10 my-6">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Avatar className="hover:cursor-pointer w-[35px] h-[35px]">
            <AvatarImage />
            <AvatarFallback className="bg-gray-900 text-white font-bold">
              {avatar}
            </AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="w-72 bg-white mt-4 mr-8">
          <div className="flex items-center px-2 py-4 group">
            <Avatar className="hover:cursor-pointer w-[60px] h-[60px]">
              <AvatarImage />
              <AvatarFallback className="bg-gray-900 text-white text-2xl font-bold">
                {avatar}
              </AvatarFallback>
            </Avatar>

            <div className="ml-4">
              <h1 className="text-sm font-bold text-gray-900 group-hover:text-violet-800">
                {user?.name}
              </h1>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </div>

          <hr />
          <button className="p-2 hover:text-violet-700">Student</button>
          <hr />
          <button className="p-2 hover:text-violet-700">Notification</button>
          <hr />

          <button className="p-2 hover:text-violet-700 pb-0">
            Account settings
          </button>

          <button className="p-2 hover:text-violet-700">
            Payout & tax settings
          </button>

          <hr />
          <div className="flex flex-col flex-1 justify-start items-start">
            <button className="p-2 hover:text-violet-700 pb-0">
              Public Profile
            </button>
            <button className="p-2 hover:text-violet-700">Edit Profile</button>
          </div>

          <hr />

          <div className="flex flex-col flex-1 justify-start items-start">
            <button className="p-2 hover:text-violet-700 pb-0">
              Help & Support
            </button>

            <button
              className="p-2 hover:text-violet-700"
              onClick={() => signOut()}
            >
              Log out
            </button>
          </div>

          <hr />
          <div className="flex w-full justify-between items-start px-2 py-4 group">
            <div className="flex flex-col justify-between">
              <h1 className="text-lg font-bold text-gray-900 group-hover:text-violet-800">
                Udemy Business
              </h1>
              <p className="text-xs text-gray-500">
                Bring learning to your company
              </p>
            </div>
            <MdOutlineOpenInNew className="text-2xl" />
          </div>
        </HoverCardContent>
      </HoverCard>

      {/*  */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <FaRegBell className="text-lg hover:text-violet-800 hover:cursor-pointer" />
        </HoverCardTrigger>
        <HoverCardContent className="w-80 bg-white mt-4 mr-20">
          <div className="flex flex-col justify-between space-x-4">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl">Notifications</h1>
              <p className="text-violet-700 font-bold text-sm">Settings</p>
            </div>
            <div className="mt-2">
              <Tabs defaultValue="instructor">
                <TabsList className="flex justify-evenly border-b-2 w-full">
                  <TabsTrigger
                    value="instructor"
                    className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md py-1 text-lg font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-none "
                  >
                    Instructor
                  </TabsTrigger>
                  <TabsTrigger
                    value="student"
                    className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md py-1 text-lg font-medium data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:shadow-none "
                  >
                    Student
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="instructor">
                  <div className="flex flex-col justify-center items-center p-2">
                    <p className="text-base text-gray-500">No Notifications.</p>
                  </div>
                </TabsContent>
                <TabsContent value="student">
                  <div className="flex flex-col justify-center items-center p-2">
                    <p className="text-base text-gray-500">No Notifications.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      {/*  */}
      <Link href={"/"}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <h1 className="text-sm hover:text-violet-800 hover:cursor-pointer">
              Student
            </h1>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 bg-white mt-4 mr-36">
            <div className="flex items-center justify-center mx-4">
              <h1 className="text-sm text-gray-600 text-center">
                Switch to the student veiw here - get back to the courses
                you&apos;re taking.
              </h1>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Link>
    </div>
  );
};

export default InstructorHeader;
