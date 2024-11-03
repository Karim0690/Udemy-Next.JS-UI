"use client"
import Navbar from "./Navbar/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog as D,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IoSearchOutline } from "react-icons/io5";
import {
  MdOutlineOpenInNew,
  MdFavoriteBorder,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { jwtDecode } from "jwt-decode";
import { getServerSession } from "next-auth";
import { getSession, signIn, useSession } from "next-auth/react";
import { useTranslations } from "next-intl"; // Added this import
import Link from "next/link";
import { useParams } from "next/navigation"; // Added this import
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import React, { useState } from "react";
import MultiLevelDropdown from "../MultiLevelDropdown/MultiLevelDropdown";
import PopperComponent from "../Popper/Popper";
import CartPopper from "../CartPopper/CartPopper";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import Image from "next/image";
import UserControlles from "../UserControlles/UserControlles";


export default function Header({ locale }) {
  let decodedToken;
  const { data: session, status } = useSession();
  if (session) {
    const token = session.accessToken;
    decodedToken = jwtDecode(token);
  } else {
    console.log("No session found");
  }
  const t = useTranslations("Header");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md font-sans relative z-10">
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between lg:justify-evenly p-3 lg:px-4 shadow-md z-10 relative"
        >
          <div className="flex order-2 lg:order-0 lg:mx-4">
            <Link  href="/" className="-m-1.5 p-1.5">
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
            <input
              type="text"
              placeholder={t("search")}
              className="w-full pl-14 pr-4 py-3 border border-black rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
            />

            <IoSearchOutline className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
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

            {decodedToken ? (
              <>
                {decodedToken.role.length === 1 ? (
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

                <UserControlles locale={locale} decodedToken={decodedToken} />
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
                {/* href={`/${locale}/login`} */}
                <Link
                  className="px-5 py-3 border border-gray-400  text-sm font-bold text-gray-800 hover:bg-gray-200"
                  href={`/${locale}/login`}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 cursor-pointer hover:text-violet-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <MdOutlineShoppingCart className="h-6 w-6 text-gray-800 hover:text-violet-600 " />
          </div>
        </nav>
        {/* sidebar */}
        {/* <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-[rgba(45,47,45,0.8)]" />
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className={styles.panelbtn}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
        <DialogPanel className="fixed inset-y-0 z-20 w-full max-w-[16rem] overflow-y-auto bg-white px-6 py-6 sm:max-w-[16rem] sm:ring-1 sm:ring-gray-900/10">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog> */}
      </header>
    </>
  );
}
