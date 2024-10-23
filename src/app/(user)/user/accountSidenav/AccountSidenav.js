import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AccountSidenav = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="md:border border-gray-300">
        <div className="flex items-center flex-col px-10 py-2">
          <div className="bg-gray-800 inline-flex items-center justify-center rounded-full bg-cover font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-3xl text-white w-32 h-32">
            KA
          </div>
          <div className=" font-bold leading-tight tracking-normal text-center pt-4">
            Karim Abdelkareem
          </div>
        </div>
        <ul className="py-4 font-semibold">
          <li>
            <Link
              href="#"
              className={`block text-sm hover:bg-gray-500 hover:text-white px-4 py-2 `}
            >
              View public profile
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
              Profile
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
              Photo
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
              Account Security
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
              Close account
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountSidenav;
