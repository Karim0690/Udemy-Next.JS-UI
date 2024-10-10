import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function InstructorFooter() {
  return (
    <>
      <footer className="bg-[#2d2f31] pb-6 text-gray-100 relative z-20">
        <div className="py-4 px-4 md:px-10 w-full flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-8 border-b border-[#3e4143]">
          <span className="text-white font-bold pr-4 text-sm md:text-lg tracking-normal">
            Top companies choose{" "}
            <span className="underline text-[#c0c4fc]">
              <Link href="#"> Udemy Business </Link>
            </span>{" "}
            to build in-demand career skills.
          </span>
          <div className="flex lg:justify-end flex-1 gap-4">
            <Image
              src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
              width={115}
              height={44}
              alt=""
              className="w-[80px] lg:w-[114px]"
            />
            <Image
              src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
              width={44}
              height={44}
              alt=""
              className="w-[30px] lg:w-[44px]"
            />
            <Image
              src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
              width={67}
              height={44}
              alt=""
              className="w-[40px] lg:w-[67px]"
            />
            <Image
              src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
              width={115}
              height={44}
              alt=""
              className="w-[80px] lg:w-[114px]"
            />
            <Image
              src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
              width={115}
              height={44}
              alt=""
              className="w-[80px] lg:w-[114px]"
            />
          </div>
        </div>
        <div className="px-4 md:px-8 pt-8 md:pt-16 flex flex-col-reverse md:flex-row">
          <div className="basis-2/3 flex md:flex-row flex-col">
            <div className="basis-1/4">
              <ul>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Udemy Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Teach on Udemy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Get the app
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="basis-1/4">
              <ul>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Help and Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Affiliate
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Investors
                  </Link>
                </li>
              </ul>
            </div>
            <div className="basis-1/4">
              <ul>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Cookie settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    Accessibility statement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-1/3 flex md:justify-end my-4 md:my-0">
            {/* button */}
            <button className="text-white border-white border-solid border-2  h-12 min-w-40">
              <div className="flex justify-start px-6">
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
                <span> English </span>
              </div>
            </button>
          </div>
        </div>
        {/* section 2 logo and copy right */}
        <div className="px-4 md:px-8 mt-16 flex flex-row justify-between items-center">
          <Image
            alt=""
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            className="h-8 w-auto"
            width={91}
            height={34}
          />
          <p className="text-sm text-white"> ©2024 Udemy, Inc. </p>
        </div>
      </footer>
    </>
  );
}
