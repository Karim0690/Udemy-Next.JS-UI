"use client";

import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const AccountSidenav = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { locale } = useParams();
  const [userData, setUserData] = useState(null);
  const t = useTranslations("AccountSidenav");

  // Fetch user data when session is available
  useEffect(() => {
    if (session?.user?._id) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_LOCAL_API}/user/${session.user._id}`
          );
          setUserData(data.user); // Set user data when fetched
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchData();
    }
  }, [session]);

  return (
    <div className="md:border border-gray-300">
      {/* Check if session exists and user data is available */}
      {session?.user ? (
        <div className="flex items-center flex-col px-10 py-2">
          {/* Display profile picture or initials */}
          <div className="bg-gray-800 inline-flex items-center justify-center rounded-full bg-cover font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-3xl text-white w-32 h-32">
            {userData?.profilePic ? (
              <Image
                src={userData.profilePic}
                width={100}
                height={100}
                alt="profile"
                className="rounded-full w-full h-full"
              />
            ) : (
              // Display initials if no profile pic is available
              userData?.name.charAt(0).toUpperCase() +
              userData?.name.charAt(1).toUpperCase()
            )}
          </div>
          {/* Display user name */}
          <div className="font-bold leading-tight tracking-normal text-center pt-4">
            {userData?.name}
          </div>
        </div>
      ) : userData === null ? (
        // If session is available but user data is still being fetched, show loading spinner
        <div className="flex-1 flex justify-center items-center mt-4">
          <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
      ) : null}

      {/* Sidebar Navigation Links */}
      <ul className="py-4 font-semibold">
        {/* Public Profile Link */}
        <li>
          <Link
            href={`/${locale}/user/${session?.user.name}`}
            className="block text-sm hover:bg-gray-500 hover:text-white px-4 py-2"
          >
            {t("view_public_profile")}
          </Link>
        </li>

        {/* Edit Profile Link */}
        <li>
          <Link
            href={`/${locale}/user/edit-profile`}
            className={`block text-sm hover:bg-gray-500 hover:text-white px-4 py-2 ${
              pathname === "/user/edit-profile"
                ? "bg-gray-500 text-white"
                : "text-black"
            }`}
          >
            {t("profile")}
          </Link>
        </li>

        {/* Edit Photo Link */}
        <li>
          <Link
            href={`/${locale}/user/edit-photo`}
            className={`block text-sm hover:bg-gray-500 hover:text-white px-4 py-2 ${
              pathname === "/user/edit-photo"
                ? "bg-gray-500 text-white"
                : "text-black"
            }`}
          >
            {t("photo")}
          </Link>
        </li>

        {/* Account Security Link */}
        <li>
          <Link
            href={`/${locale}/user/edit-account`}
            className={`block text-sm hover:bg-gray-500 hover:text-white px-4 py-2 ${
              pathname === "/user/edit-account"
                ? "bg-gray-500 text-white"
                : "text-black"
            }`}
          >
            {t("accountSecurity")}
          </Link>
        </li>

        {/* Additional Links */}
        {/* Uncomment if needed */}
        {/* <li>
          <Link
            href="/user/close-account"
            className={`block text-sm hover:bg-gray-500 hover:text-white px-4 py-2 ${
              pathname === "/user/close-account" ? "bg-gray-500 text-white" : "text-black"
            }`}
          >
            {t("closeAccount")}
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default AccountSidenav;
