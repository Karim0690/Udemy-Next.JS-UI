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
            <Link href={`/${locale}/home/my-courses/learning`}>
              <h1 className="p-2 hover:text-violet-700 cursor-pointer">
                {locale === "en" ? "My Learning" : "تعليمي"}
              </h1>
            </Link>
            <Link href={`/${locale}/cart`}>
              <h1 className="p-2 hover:text-violet-700 cursor-pointer">
                {locale === "en" ? "My Cart" : "عربة التسوق"}
              </h1>
            </Link>
            {!user.role.includes("instructor") && (
              <Link href={`/${locale}/teaching`}>
                <h1 className="p-2 hover:text-violet-700 cursor-pointer">
                  {locale === "en" ? "Teach on Udemy" : "التدريس علي يوديمي"}
                </h1>
              </Link>
            )}

            <hr />

            <h1 className="p-2 hover:text-violet-700 cursor-pointer">
              <Link href={`/${locale}/user/edit-account`}>
                {locale === "en" ? "Account settings" : "اعدادات الحساب"}
              </Link>
            </h1>
            <hr />

            <div className="flex justify-between items-center">
              <h1 className="p-2 hover:text-violet-700 cursor-pointer flex-1">
                {locale === "en" ? "Language" : "اللغة"}
              </h1>
              <div>
                <LanguageSwitch />
              </div>
            </div>
            <hr />
            <Link href={`/${locale}/user/${user.name}`}>
              <h1 className="p-2 hover:text-violet-700 cursor-pointer pb-0">
                {locale === "en" ? "Public Profile" : "الحساب الشخصي"}
              </h1>
            </Link>

            <Link
              href={
                user.role.includes("student")
                  ? `/${locale}/user/edit-account`
                  : `/${locale}/user/edit-account`
              }
            >
              <h1 className="p-2 hover:text-violet-700 cursor-pointer">
                {locale === "en" ? "Edit Profile" : "تعديل الحساب"}
              </h1>
            </Link>

            <hr />
            <Link href="/login" onClick={() => signOut()}>
              <h1 className="p-2 hover:text-violet-700 cursor-pointer">
                {locale === "en" ? "Log out" : "تسجيل الخروج"}
              </h1>
            </Link>
            <hr />
            {/* <div className="flex w-full justify-between items-start px-2 py-4 group">
              <div className="flex flex-col justify-between">
                <h1 className="text-lg font-bold text-gray-900 group-hover:text-violet-800">
                  Udemy Business
                </h1>
                <p className="text-xs text-gray-500">
                  Bring learning to your company
                </p>
              </div>
              <MdOutlineOpenInNew className="text-2xl" />
            </div> */}
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
            <Link href={`/${locale}/home/my-courses/learning`}>
              <h1 className="text-sm text-gray-500 hover:text-violet-600 hover:cursor-pointer mx-auto">
                {t("learning")}
              </h1>
            </Link>
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
