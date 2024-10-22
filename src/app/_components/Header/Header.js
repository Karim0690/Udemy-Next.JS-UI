"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import MultiLevelDropdown from "../MultiLevelDropdown/MultiLevelDropdown";
import PopperComponent from "../Popper/Popper";
import CartPopper from "../CartPopper/CartPopper";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegBell } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdOutlineOpenInNew, MdFavoriteBorder } from "react-icons/md";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

async function fetchTopics(subcategoryId) {
  const topicsRes = await fetch(
    `https://udemy-eosin-eight.vercel.app/topics?subcategoryId=${subcategoryId}`
  );
  const topics = await topicsRes.json();
  return topics;
}
async function fetchSubcategories(categoryId) {
  const subcategoryRes = await fetch(
    `https://udemy-eosin-eight.vercel.app/subcategories?categoryId=${categoryId}`
  );
  const subcategories = await subcategoryRes.json();
  return subcategories;
}
export async function getServerSideProps() {
  // Fetch all categories
  const categoryRes = await fetch(
    "https://udemy-eosin-eight.vercel.app/category"
  );
  const categories = await categoryRes.json();

  // Fetch subcategories and topics for each category
  const categoriesWithSubcategories = await Promise.all(
    categories.map(async (category) => {
      const subcategories = await fetchSubcategories(category.id);

      // Fetch topics for each subcategory
      const subcategoriesWithTopics = await Promise.all(
        subcategories.map(async (subcategory) => {
          const topics = await fetchTopics(subcategory.id);
          return {
            ...subcategory,
            topics,
          };
        })
      );

      return {
        ...category,
        subcategories: subcategoriesWithTopics,
      };
    })
  );

  return {
    props: {
      categories: categoriesWithSubcategories,
    },
  };
}

export default function Header() {
  const signOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        console.log("Decoded token:", decoded);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    } else {
      console.log("No token found in local storage.");
    }
  }, []);

  return (
    <header className="bg-white shadow-md font-sans relative z-10">
      <nav
        aria-label="Global"
        className="mx-auto flex items-center justify-between lg:justify-evenly p-3 lg:px-4 shadow-md z-10 relative"
      >
        <div className="flex order-2 lg:order-0">
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
        <div className="hidden lg:flex lg:gap-x-12 lg:order-2">
          <MultiLevelDropdown />
        </div>
        <div className="relative w-full max-w-[40rem] hidden lg:flex lg:order-3">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full pl-14 pr-4 py-3 border border-black rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="absolute left-3 top-3 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.61-10.61 7.5 7.5 0 0 0 10.61 10.61z"
            />
          </svg>
        </div>

        <div className="hidden lg:flex lg:justify-end lg:order-3 items-center space-x-4">
          {/* <PopperComponent
            trigger={
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-violet-600 "
              >
                Udemy Business
              </a>
            }
            content="Get your team access to over 27,000 top Udemy courses, anytime, anywhere."
            placement="bottom"
            buttonContent="Try Udemy Business"
          /> */}

          {decodedToken ? (
            <>
              {decodedToken.role.length === 1 ? (
                <>
                  <PopperComponent
                    trigger={
                      <Link
                        href="/teaching"
                        className="text-sm text-gray-500 hover:text-violet-600"
                      >
                        Teach on Udemy
                      </Link>
                    }
                    content="Become an instructor and share your knowledge with millions of students worldwide."
                    placement="bottom"
                    buttonContent="Learn More"
                  />
                </>
              ) : (
                <>
                  <Link href="/instructor/course">
                    <h1 className="text-sm text-gray-500 hover:text-violet-600 hover:cursor-pointer">
                      Instructor
                    </h1>
                  </Link>
                </>
              )}

              <div className="hidden md:flex justify-start items-center flex-row-reverse gap-8 mx-10 ">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Avatar className="hover:cursor-pointer w-[35px] h-[35px]">
                      <AvatarImage />
                      <AvatarFallback className="bg-gray-900 text-white font-bold">
                        {decodedToken.name.charAt(0).toUpperCase() +
                          decodedToken.name.charAt(1).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-72 bg-white mt-4 mr-8">
                    <div className="flex items-center py-4 group">
                      <Avatar className="hover:cursor-pointer w-[60px] h-[60px]">
                        <AvatarImage />
                        <AvatarFallback className="bg-gray-900 text-white text-2xl font-bold">
                          {decodedToken.name.charAt(0).toUpperCase() +
                            decodedToken.name.charAt(1).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div className="ml-4">
                        <h1 className="text-sm font-bold text-gray-900 group-hover:text-violet-800">
                          {decodedToken.name}
                        </h1>
                        <p className="text-xs text-gray-500">
                          {decodedToken.email}
                        </p>
                      </div>
                    </div>

                    <hr />
                    <h1 className="p-2 hover:text-violet-700">My Learning</h1>
                    <h1 className="p-2 hover:text-violet-700">My Cart</h1>
                    <h1 className="p-2 hover:text-violet-700">Wishlist</h1>
                    <h1 className="p-2 hover:text-violet-700">
                      Teach on Udemy
                    </h1>

                    <hr />
                    <h1 className="p-2 hover:text-violet-700">Notification</h1>
                    <h1 className="p-2 hover:text-violet-700">Messages</h1>
                    <hr />

                    <h1 className="p-2 hover:text-violet-700 pb-0">
                      Account settings
                    </h1>
                    <h1 className="p-2 hover:text-violet-700">
                      Payout Methods
                    </h1>
                    <h1 className="p-2 hover:text-violet-700">Subscriptions</h1>
                    <h1 className="p-2 hover:text-violet-700">Udemy credits</h1>
                    <h1 className="p-2 hover:text-violet-700">
                      Purchase history
                    </h1>
                    <hr />

                    <div className="flex items-center">
                      <h1 className="p-2 hover:text-violet-700">Language</h1>
                      <div className=" flex ml-auto">
                        <h1 className="p-2 hover:text-violet-700">English</h1>
                        <div className="p-2 hover:bg-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <h1 className="p-2 hover:text-violet-700 pb-0">
                      Public Profile
                    </h1>
                    <h1 className="p-2 hover:text-violet-700">Edit Profile</h1>

                    <hr />

                    <h1 className="p-2 hover:text-violet-700 pb-0">
                      Help and Support
                    </h1>

                    <Link href="/login" onClick={() => signOut()}>
                      <h1 className="p-2 hover:text-violet-700">Log out</h1>
                    </Link>
                    <hr />
                    <div className="flex w-full justify-between items-start py-4 group">
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
                        <p className="text-violet-700 font-bold text-sm">
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
                      My Learning
                    </h1>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-white mt-4 mr-36">
                    <div className="flex items-center justify-center mx-4">
                      <h1 className="text-sm text-gray-600 text-center">
                        Switch to the student veiw here - get back to the
                        courses you&apos;re taking.
                      </h1>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </>
          ) : (
            <>
              <PopperComponent
                trigger={
                  <Link
                    href="/teaching"
                    className="text-sm text-gray-500 hover:text-violet-600"
                  >
                    Teach on Udemy
                  </Link>
                }
                content="Become an instructor and share your knowledge with millions of students worldwide."
                placement="bottom"
                buttonContent="Learn More"
              />

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
              <Link
                href="/login"
                className="px-5 py-3 border border-gray-400  text-sm font-bold text-gray-800 hover:bg-gray-200"
              >
                Log in
              </Link>

              <Link
                href="/signup"
                className="px-5 py-3 bg-gray-800 text-white text-sm font-bold hover:bg-gray-900"
              >
                Sign up
              </Link>
              <div className="border border-gray-400 p-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </nav>
      {/* sidebar */}
      <Dialog
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
      </Dialog>
    </header>
  );
}
