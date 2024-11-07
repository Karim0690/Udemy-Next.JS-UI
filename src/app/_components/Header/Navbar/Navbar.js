"use client";

import CartPopper from "../../CartPopper/CartPopper";
import LanguageSwitch from "../../LanguageSwitch/LanguageSwitch";
import MultiLevelDropdown from "../../MultiLevelDropdown/MultiLevelDropdown";
import PopperComponent from "../../Popper/Popper";
import UserControlles from "../../UserControlles/UserControlles";
import Search from "./Search";
import Sidebar from "./Sidebar";
import { Bars3Icon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import {
  MdOutlineOpenInNew,
  MdFavoriteBorder,
  MdOutlineShoppingCart,
} from "react-icons/md";

const Navbar = ({ session }) => {
  const t = useTranslations("Header");
  const { locale } = useParams();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedCourses, setSearchedCourses] = useState(null);
  const handleSearch = async () => {
    if (searchQuery.length > 2) {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/course/public/courses?keyword=${searchQuery}`
        );
        if (data.status === "success") {
          setSearchedCourses(data.data.courses);
        } else {
          setSearchedCourses([]);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setSearchedCourses([]);
      }
    } else {
      setSearchedCourses([]);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <>
      <header className="bg-white shadow-md font-sans relative z-10">
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between lg:justify-evenly p-3 lg:px-4 shadow-md z-10 relative"
        >
          <div className="flex order-2 lg:order-0 lg:mx-4">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                className="h-8 w-auto"
                width={91}
                height={34}
              />
            </Link>
          </div>
          <div className="flex lg:hidden order-1 lg:order-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 lg:order-2 ">
            <MultiLevelDropdown />
          </div>
          <div className="relative flex-1 mx-2 w-full max-w-full hidden lg:flex lg:order-3">
            <div className="relative flex-1 mx-2 w-full max-w-full hidden lg:flex">
              <input
                type="text"
                placeholder={t("search")}
                className="w-full pl-14 pr-4 py-3 border border-black rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <IoSearchOutline className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
            {searchQuery.length > 2 && (
              <div className="absolute bg-white z-20 w-full h-screen top-16">
                {searchedCourses.length === 0 ? (
                  <p>No results found</p>
                ) : (
                  <ul>
                    {searchedCourses.map((course) => (
                      <li key={course._id} className="py-3 hover:bg-gray-100">
                        <Link
                          href={`/${locale}/course/${course.slug}`}
                          onClick={() => {
                            setMobileSearchOpen(false);
                          }}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={course.courseImage}
                              width={50}
                              height={50}
                              alt="course"
                            />
                            <div>
                              <div className="text-sm font-bold text-gray-800">
                                {course.title}
                              </div>
                              <div className="flex gap-2 py-1">
                                <span className="text-xs font-bold text-gray-500">
                                  Course
                                </span>
                                <span className="text-xs text-gray-500">
                                  {course.instructor.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className="hidden lg:flex lg:justify-end lg:order-3 items-center gap-3">
            <PopperComponent
              trigger={
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-violet-600 mx-2"
                >
                  {t("business")}
                </a>
              }
              content={t("businessContent")}
              placement="bottom"
              buttonContent={t("businessButton")}
            />

            {session ? (
              <>
                {!session.user.role.includes("instructor") ? (
                  <>
                    <PopperComponent
                      trigger={
                        <Link
                          href={`/${locale}/teaching`}
                          className="text-sm text-gray-500 hover:text-violet-600 mx-auto"
                        >
                          {t("teach")}
                        </Link>
                      }
                      content={t("teachContent")}
                      placement="bottom"
                      buttonContent={t("teachButton")}
                    />
                  </>
                ) : (
                  <>
                    <Link href={`/${locale}/instructor/course`}>
                      <h1 className="text-sm text-gray-500 hover:text-violet-600 hover:cursor-pointer">
                        {t("Instructor")}
                      </h1>
                    </Link>
                  </>
                )} 

                <UserControlles locale={locale} user={session.user} />
              </>
            ) : (
              <>
                <PopperComponent
                  trigger={
                    <Link
                      href={`/${locale}/teaching`}
                      className="text-sm text-gray-500 hover:text-violet-600"
                    >
                      {t("teach")}
                    </Link>
                  }
                  content={t("teachContent")}
                  placement="bottom"
                  buttonContent={t("teachButton")}
                />

                <Link href={`/${locale}/cart`}>
                  <CartPopper
                    trigger={
                      <MdOutlineShoppingCart className="h-6 w-6 text-gray-800 hover:text-violet-600 " />
                    }
                    content="Your cart is empty."
                    placement="bottom"
                    buttonContent="Keep Shopping"
                  />
                </Link>
                <Link
                  href={`/${locale}/login`}
                  className="px-5 py-3 border border-gray-400  text-sm font-bold text-gray-800 hover:bg-gray-200"
                >
                  {t("login")}
                </Link>

                <Link
                  href={`/${locale}/signup`}
                  className="px-5 py-3 bg-gray-800 text-white text-sm font-bold hover:bg-gray-900"
                >
                  {t("signup")}
                </Link>
                <LanguageSwitch />
              </>
            )}
          </div>
          <div className="flex lg:hidden order-3 lg:order-3 gap-6">
            <IoIosSearch
              className="h-6 w-6 cursor-pointer hover:text-violet-600"
              onClick={() => setMobileSearchOpen(true)}
            />
            <MdOutlineShoppingCart className="h-6 w-6 text-gray-800 hover:text-violet-600 " />
          </div>
        </nav>
        <Sidebar
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          session={session}
        />
      </header>
      <Search
        mobileSearchOpen={mobileSearchOpen}
        setMobileSearchOpen={setMobileSearchOpen}
        session={session}
      />
    </>
  );
};

export default Navbar;
