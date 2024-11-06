/* eslint-disable react-hooks/rules-of-hooks */
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";

const AccountSidenav = async () => {
  const pathname = usePathname();
  const t = useTranslations("AccountSidenav");
  const session = await getServerSession(authOptions);
  console.log("session" + session);
  console.log("name" + session.name);
  /*  if (!session || !session.user || !session.user.name) {
    return redirect("/");
  } */
  const userName = session ? session.user.name : "User";
  return (
    <>
      <div className="md:border border-gray-300">
        <div className="flex items-center flex-col px-10 py-2">
          <div className="bg-gray-800 inline-flex items-center justify-center rounded-full bg-cover font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-3xl text-white w-32 h-32">
            {userName.charAt(0).toUpperCase() +
              userName.charAt(1).toUpperCase()}
            {/* ka */}
          </div>
          <div className="font-bold leading-tight tracking-normal text-center pt-4">
            {userName}
            {/* karim ayman */}
          </div>
        </div>
        <ul className="py-4 font-semibold">
          <li>
            <Link
              href={`/user/${session.user.name}`}
              className={`block text-sm hover:bg-gray-500 hover:text-white px-4 py-2 `}
            >
              {t("view_public_profile")}
            </Link>
          </li>
          <li>
            <Link
              href="/user/edit-profile"
              className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-2 ${
                pathname === "/user/edit-profile"
                  ? "bg-gray-500 text-white"
                  : "text-black"
              }`}
            >
              {t("profile")}
            </Link>
          </li>
          <li>
            <Link
              href="/user/edit-photo"
              className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-2 ${
                pathname === "/user/edit-photo"
                  ? "bg-gray-500 text-white"
                  : "text-black"
              }`}
            >
              {t("photo")}
            </Link>
          </li>
          <li>
            <Link
              href="/user/edit-account"
              className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-2 ${
                pathname === "/user/edit-account"
                  ? "bg-gray-500 text-white"
                  : "text-black"
              }`}
            >
              {t("accountSecurity")}
            </Link>
          </li>
          {/* <li>
            <Link
              href="#"
              className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-2 ${
                true === "Privacy" ? "bg-gray-500 text-white" : "text-black"
              }`}
            >
              Privacy
            </Link>
          </li> */}
          <li>
            <Link
              href="/user/close-account"
              className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-2 ${
                pathname === "/user/close-account"
                  ? "bg-gray-500 text-white"
                  : "text-black"
              }`}
            >
              {t("closeAccount")}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountSidenav;
