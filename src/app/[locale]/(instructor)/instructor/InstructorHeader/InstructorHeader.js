"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

const InstructorHeader = ({ session, locale }) => {
  const t = useTranslations("InstructorHearder");

  let avatar;
  if (session?.user) {
    avatar = (
      session.user.name.charAt(0) + session.user.name.charAt(1)
    ).toUpperCase();
  }

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
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
        <HoverCardContent
          className={`w-72 bg-white mt-4 ${locale === "ar" ? "ml-8" : "mr-8"} `}
        >
          <div className="flex items-center px-2 py-4 group">
            <Avatar className="hover:cursor-pointer w-[60px] h-[60px]">
              <AvatarImage />
              <AvatarFallback className="bg-gray-900 text-white text-2xl font-bold">
                {avatar}
              </AvatarFallback>
            </Avatar>

            <div className="ml-4">
              <h1 className="text-sm font-bold text-gray-900 group-hover:text-violet-800">
                {session?.user.name}
              </h1>
              <p className="text-xs text-gray-500">{session?.user.email}</p>
            </div>
          </div>

          <hr />
          <button className="p-2 hover:text-violet-700">{t("student")}</button>
          <hr />

          <button className="p-2 hover:text-violet-700">{t("settings")}</button>
          <hr />
          <div className="flex flex-col flex-1 justify-start items-start">
            <button className="p-2 hover:text-violet-700 pb-0">
              {t("public")}
            </button>
            <button className="p-2 hover:text-violet-700">{t("edit")}</button>
          </div>

          <hr />

          <div className="flex flex-col flex-1 justify-start items-start">
            <button className="p-2 hover:text-violet-700 pb-0">
              {t("help")}
            </button>

            <button
              className="p-2 hover:text-violet-700"
              onClick={handleSignOut}
            >
              {t("logout")}
            </button>
          </div>

          <hr />
          <div className="flex w-full justify-between items-start px-2 py-4 group">
            <div className="flex flex-col justify-between">
              <h1 className="text-lg font-bold text-gray-900 group-hover:text-violet-800">
                {t("business")}
              </h1>
              <p className="text-xs text-gray-500">{t("ub")}</p>
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
              {t("student")}
            </h1>
          </HoverCardTrigger>
          <HoverCardContent
            className={`w-80 bg-white mt-4 ${
              locale === "ar" ? "ml-36" : "mr-36"
            }`}
          >
            <div className="flex items-center justify-center mx-4">
              <h1 className="text-sm text-gray-600 text-center">
                {t("switch")}
              </h1>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Link>
    </div>
  );
};

export default InstructorHeader;
