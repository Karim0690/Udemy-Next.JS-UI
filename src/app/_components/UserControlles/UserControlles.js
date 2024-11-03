"use client";
import { useSession, signOut } from "next-auth/react";

import CartPopper from "../CartPopper/CartPopper";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineOpenInNew } from "react-icons/md";
import { useMemo } from "react";
const UserControllers = () => {
  const session = useSession();
  const user = useMemo(() => session?.data?.user, [session]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
    signOut();
  };
  const t = useTranslations("Header");

  return (
    <>
      <div className="hidden md:flex justify-start items-center flex-row-reverse gap-8 mx-10 ">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Avatar className="hover:cursor-pointer w-[35px] h-[35px]">
              <AvatarImage />
              <AvatarFallback className="bg-gray-900 text-white font-bold">
                {user.name.charAt(0).toUpperCase() +
                  user.name.charAt(1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent className="w-72 bg-white mt-4 mr-8">
            <div className="flex items-center px-2 py-4 group">
              <Avatar className="hover:cursor-pointer w-[60px] h-[60px]">
                <AvatarImage />
                <AvatarFallback className="bg-gray-900 text-white text-2xl font-bold">
                  {user.name.charAt(0).toUpperCase() +
                    name.charAt(1).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="ml-4">
                <h1 className="text-sm font-bold text-gray-900 group-hover:text-violet-800">
                  {user.name}
                </h1>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>

            <hr />
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              My Learning
            </h1>
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              My Cart
            </h1>
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              Wishlist
            </h1>
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              Teach on Udemy
            </h1>

            <hr />
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              Notification
            </h1>
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              Messages
            </h1>
            <hr />

            <h1 className="p-2 hover:text-violet-700 cursor-pointer pb-0">
              Account settings
            </h1>
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              Payout Methods
            </h1>
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              Subscriptions
            </h1>
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              Udemy credits
            </h1>
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              Purchase history
            </h1>
            <hr />

            <div className="flex items-center">
              <h1 className="p-2 hover:text-violet-700 cursor-pointer">
                Language
              </h1>
              <div className=" flex ml-auto">
                <LanguageSwitch />
              </div>
            </div>
            <hr />

            <h1 className="p-2 hover:text-violet-700 cursor-pointer pb-0">
              Public Profile
            </h1>
            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              Edit Profile
            </h1>

            <hr />

            <h1 className="p-2 hover:text-violet-700 cursor-pointer pb-0">
              Help and Support
            </h1>

            <Link href="/login" onClick={() => handleSignOut()}>
              <h1 className="p-2 hover:text-violet-700 cursor-pointer">
                Log out
              </h1>
            </Link>
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
                <p className="text-violet-700 cursor-pointer font-bold text-sm">
                  Settings
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <Link href="/cart">
          <CartPopper
            trigger={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 text-gray-800 hover:text-violet-600 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6.5M7 13l-1-4M10 16.5c.828 0 1.5.672 1.5 1.5S10.828 19.5 10 19.5 8.5 18.828 8.5 18s.672-1.5 1.5-1.5zm7.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S16 18.828 16 18s.672-1.5 1.5-1.5z"
                />
              </svg>
            }
            content="Your cart is empty."
            placement="bottom"
            buttonContent="Keep Shopping"
          />
        </Link>
        <Link href="/wishlist">
          <CartPopper
            trigger={
              <MdFavoriteBorder className="w-6 h-6 text-gray-800 hover:text-violet-600" />
            }
            content="Your Wishlist is empty."
            placement="bottom"
            buttonContent="Explore Courses"
          />
        </Link>
        {/*  */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <h1 className="text-sm text-gray-500 hover:text-violet-600 hover:cursor-pointer">
              {t("learning")}
            </h1>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 bg-white mt-4 mr-36">
            <div className="flex items-center justify-center mx-4 p-2">
              <h1 className="text-sm text-gray-600 text-center">{t("lt")}</h1>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </>
  );
};

export default UserControllers;
