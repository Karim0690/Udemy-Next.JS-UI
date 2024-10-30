import FooterSwitcher from "@/app/_components/FooterSwitcher/FooterSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function InstructorFooter() {
  const t = useTranslations("Footer");
  return (
    <>
      <footer className="bg-[#2d2f31] pb-6 text-gray-100 relative z-20">
        <div className="py-4 px-4 md:px-10 w-full flex flex-col lg:flex-row lg:items-center justify-between gap-2 lg:gap-8 border-b border-[#3e4143]">
          <span className="text-white font-bold pr-4 text-sm md:text-lg tracking-normal">
            {t("commer1")}{" "}
            <span className="underline text-[#c0c4fc]">
              <Link href="#"> {t("commer2")} </Link>
            </span>{" "}
            {t("commer3")}
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
                    {t("Business")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("Teach")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("App")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("About")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("Contact")}
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
                    {t("Careers")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("Blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("Support")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("Affiliate")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("Investors")}
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
                    {t("Terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("Privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("Cookie")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("Sitemap")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm hover:underline decoration-solid"
                  >
                    {t("Accessibility")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-1/3 flex md:justify-end my-4 md:my-0">
            {/* button */}
            <FooterSwitcher />
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
