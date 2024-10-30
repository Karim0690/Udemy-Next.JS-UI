"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { LuMonitorPlay } from "react-icons/lu";
import { MdBarChart } from "react-icons/md";
import { TbMessage } from "react-icons/tb";

const SideNav = () => {
    const path = usePathname();
    const { locale } = useParams();
    const t = useTranslations("InstructorSideNav");

    return ( <
        >
        <
        div className = "min-w-72 hidden md:block" >
        <
        div className = { `fixed ${
            locale === "ar" ? "right-0" : "left-0"
          }  top-0 z-10 bg-[#2d2f31] h-screen w-14 border-r-gray-800 hover:w-72 hover:shadow-md overflow-hidden sidenav` }
        style = {
            { transition: "width 400ms cubic-bezier(.2,0,.38,.9)" } } >
        <
        ul className = "w-full" >
        <
        div className = "hover:bg-[#3e4143]" >
        <
        li className = " p-5 w-max" >
        <
        Link href = { `${locale}/instructor/course` } >
        <
        div className = { `relative after:content-[''] after:block after:absolute after:top-0 after:left-[1rem] after:h-[2.5rem] after:w-[28.1rem] after:bg-[#2d2f31] after:opacity-100` }
        style = {
            {
                transform: locale === "ar" ? "rotateY(180deg)" : "none",
            }
        } >
        <
        Image src = "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
        width = { 91 }
        height = { 34 }
        alt = "Udemy logo" /
        >
        <
        /div>{" "} <
        /Link>{" "} <
        /li>{" "} <
        /div>{" "} <
        li className = { `p-4 w-full hover:bg-[#3e4143] ${
                path.split("/")[2] === "course" &&
                "shadow-[4px_0_0_0_#a435f0_inset]"
              }` } >
        <
        Link href = { `/${locale}/instructor/course` }
        className = "flex items-center gap-3" >
        <
        LuMonitorPlay className = "text-white text-2xl flex-shrink-0" / >
        <
        span className = { `ml-4 font-bold text-white relative after:content-[''] after:block after:absolute ${
                    locale === "ar"
                      ? "after:top-[0rem] after:right-[0rem]"
                      : "after:top-[0rem] after:left-[0rem]"
                  }  after:h-[2.5rem] after:w-[28.1rem] after:bg-[#2d2f31] after:opacity-100 flex-1` } >
        { t("courses") } { " " } <
        /span>{" "} <
        /Link>{" "} <
        /li>{" "} <
        li className = { `p-4 w-full hover:bg-[#3e4143] ${
                path.split("/")[2] === "communication" &&
                "shadow-[4px_0_0_0_#a435f0_inset]"
              }` } >
        <
        Link href = "/instructor/communication/qa"
        className = "flex items-center gap-3" >
        <
        TbMessage className = "text-white text-2xl flex-shrink-0" / >
        <
        span className = { `ml-4 font-bold text-white relative after:content-[''] after:block after:absolute ${
                    locale === "ar"
                      ? "after:top-[0rem] after:right-[0rem]"
                      : "after:top-[0rem] after:left-[0rem]"
                  } after:h-[2.5rem] after:w-[28.1rem] after:bg-[#2d2f31] after:opacity-100 flex-1` } >
        { t("communication") } { " " } <
        /span>{" "} <
        /Link>{" "} <
        /li>{" "} <
        li className = { `p-4 w-full hover:bg-[#3e4143] ${
                path === "/performance" && "shadow-[4px_0_0_0_#a435f0_inset]"
              }` } >
        <
        Link href = "/instructor"
        className = "flex items-center gap-3" >
        <
        MdBarChart className = "text-white text-2xl flex-shrink-0" / >
        <
        span className = { `ml-4 font-bold text-white relative after:content-[''] after:block after:absolute ${
                    locale === "ar"
                      ? "after:top-[0rem] after:right-[0rem]"
                      : "after:top-[0rem] after:left-[0rem]"
                  } after:h-[2.5rem] after:w-[28.1rem] after:bg-[#2d2f31] after:opacity-100 flex-1` } >
        { t("performance") } { " " } <
        /span>{" "} <
        /Link>{" "} <
        /li>{" "} <
        li className = { `p-4 w-full hover:bg-[#3e4143] ${
                path === "/tools" && "shadow-[4px_0_0_0_#a435f0_inset]"
              }` } >
        <
        Link href = "/instructor"
        className = "flex items-center gap-3" >
        <
        FiTool className = "text-white text-2xl flex-shrink-0" / >
        <
        span className = { `ml-4 font-bold text-white relative after:content-[''] after:block after:absolute ${
                    locale === "ar"
                      ? "after:top-[0rem] after:right-[0rem]"
                      : "after:top-[0rem] after:left-[0rem]"
                  } after:h-[2.5rem] after:w-[28.1rem] after:bg-[#2d2f31] after:opacity-100 flex-1` } >
        { t("tools") } { " " } <
        /span>{" "} <
        /Link>{" "} <
        /li>{" "} <
        li className = { `p-4 w-full hover:bg-[#3e4143] ${
                path === "/resources" && "shadow-[4px_0_0_0_#a435f0_inset]"
              }` } >
        <
        Link href = "/instructor"
        className = "flex items-center gap-3" >
        <
        FaRegQuestionCircle className = "text-white text-2xl flex-shrink-0" / >
        <
        span className = { `ml-4 font-bold text-white relative after:content-[''] after:block after:absolute ${
                    locale === "ar"
                      ? "after:top-[0rem] after:right-[0rem]"
                      : "after:top-[0rem] after:left-[0rem]"
                  } after:h-[2.5rem] after:w-[28.1rem] after:bg-[#2d2f31] after:opacity-100 flex-1` } >
        { t("resources") } { " " } <
        /span>{" "} <
        /Link>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} {
            path.split("/")[2] == "communication" ? ( <
                div className = "fixed w-72 top-0 left-0 h-screen text-gray-800 bg-gray-100" >
                <
                ul className = "ml-24 my-10 sticky" >
                <
                li className = { `my-5 ${path.split("/")[3] == "qa" && "font-bold"}` } >
                <
                Link href = "qa" > Q & A < /Link>{" "} <
                /li>{" "} <
                li className = { `my-5 ${
                  path.split("/")[3] == "messages" && "font-bold"
                }` } >
                { " " } <
                Link href = "messages" > Messages < /Link>{" "} <
                /li>{" "} <
                li className = { `my-5 ${
                  path.split("/")[3] == "assignmetns" && "font-bold"
                }` } >
                { " " } <
                Link href = "assignmetns" > Assignments < /Link>{" "} <
                /li>{" "} <
                li className = { `my-5 ${
                  path.split("/")[3] == "announcements" && "font-bold"
                }` } >
                { " " } <
                Link href = "announcements" > Announcements < /Link>{" "} <
                /li>{" "} <
                /ul>{" "} <
                /div>
            ) : (
                ""
            )
        } { " " } <
        /div>{" "} <
        />
    );
};

export default SideNav;