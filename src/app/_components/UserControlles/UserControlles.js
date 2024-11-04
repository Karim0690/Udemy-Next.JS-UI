"use client";

import CartPopper from "../CartPopper/CartPopper";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import useCartStore from "@/app/store/cartStore";
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
import { useParams } from "next/navigation";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import {
  MdFavoriteBorder,
  MdOutlineOpenInNew,
  MdOutlineShoppingCart,
} from "react-icons/md";

const UserControlles = ({ user, locale }) => {
  const t = useTranslations("Header");

  return (
    <>
      <div className="hidden md:flex justify-start items-center flex-row-reverse gap-8 mx-4 ">
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
          <HoverCardContent
            className={`w-72 bg-white mt-4 ${
              locale === "en" ? "mr-8" : "ml-8"
            }`}
          >
            <div className="flex items-center gap-3 px-2 py-4 group">
              <Avatar className="hover:cursor-pointer w-[60px] h-[60px]">
                <AvatarImage />
                <AvatarFallback className="bg-gray-900 text-white text-2xl font-bold">
                  {user.name.charAt(0).toUpperCase() +
                    user.name.charAt(1).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
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
              Account settings
            </h1>
            <hr />

            <div className="flex justify-between items-center">
              <h1 className="p-2 hover:text-violet-700 cursor-pointer flex-1">
                Language
              </h1>
              <div>
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

            <Link href="/login" onClick={() => signOut()}>
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
        <Link href={`/${locale}/cart`}>
          <CartPopper
            trigger={
              <MdOutlineShoppingCart className="h-6 w-6 text-gray-800 hover:text-violet-600 " />
            }
            content={t("cartContent")}
            placement="bottom"
            buttonContent={t("cartButton")}
          />
        </Link>
        <Link href="/wishlist">
          <CartPopper
            trigger={
              <MdFavoriteBorder className="w-6 h-6 text-gray-800 hover:text-violet-600" />
            }
            content={t("wishlistContent")}
            placement="bottom"
            buttonContent={t("wishlistButton")}
          />
        </Link>
        {/*  */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <h1 className="text-sm text-gray-500 hover:text-violet-600 hover:cursor-pointer mx-auto">
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

export default UserControlles;
