import CloseAccount from "./close-account/page";
import EditAccount from "./edit-account/page";
import EditPhoto from "./edit-photo/page";
import EditProfile from "./edit-profile/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex justify-center py-10 flex-1 mx-20">
        <div className="border border-gray-300">
          <div className="flex items-center flex-col px-10 py-2">
            <div className="bg-gray-800 inline-flex items-center justify-center rounded-full bg-cover font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-3xl text-white w-32 h-32">
              KA{" "}
            </div>{" "}
            <div className=" font-bold leading-tight tracking-normal text-center pt-4">
              Karim Abdelkareem{" "}
            </div>{" "}
          </div>{" "}
          <ul className="py-4 font-semibold">
            <li>
              <Link
                href="#"
                className={`block text-sm hover:bg-gray-500 hover:text-white px-4 py-2 ${
                  true === "View public profile"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
              >
                View public profile{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link
                href="edit-profile"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-2 ${
                  true === "Profile" ? "bg-gray-500 text-white" : "text-black"
                }`}
              >
                Profile{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link
                href="edit-photo"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-2 ${
                  true === "Photo" ? "bg-gray-500 text-white" : "text-black"
                }`}
              >
                Photo{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link
                href="edit-account"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-2 ${
                  true === "Account Security"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
              >
                Account Security{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-2 ${
                  true === "Privacy" ? "bg-gray-500 text-white" : "text-black"
                }`}
              >
                Privacy{" "}
              </Link>{" "}
            </li>{" "}
            <li>
              <Link
                href="user/close-account"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-2 ${
                  true === "Close account"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
              >
                Close account{" "}
              </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        {/* /***************************************************** */}{" "}
        <div className="border border-gray-300 flex-1 max-w-[900px]">
          <div className="text-black">
            {" "}
            {/* profile Tap */}{" "}
            {true && (
              <>
                <EditProfile />
              </>
            )}{" "}
            {/* Photo Tap */} {false === "Photo" && <EditPhoto />}{" "}
            {/* Close account Tap */}{" "}
            {false === "Close account" && <CloseAccount />} {/* Privacy Tap  */}{" "}
            {false === "Privacy" && (
              <>
                <div className="flex border-b border-gray-300 py-4">
                  <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">
                      Privacy{" "}
                    </h1>{" "}
                    <p className="font-text mt-2 leading-6 ">
                      Modify your privacy settings here.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mx-32 px-7 mt-6">
                  <h2 className="mb-6 font-bold"> Profile page settings </h2>{" "}
                  <div className="flex items-center space-x-2 mb-6">
                    <label
                      className="flex items-center cursor-pointer relative"
                      htmlFor="check-2"
                    >
                      <input
                        type="checkbox"
                        defaultChecked
                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none  shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="check-2"
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>{" "}
                        </svg>{" "}
                      </span>{" "}
                    </label>{" "}
                    <label
                      className="cursor-pointer ml-3 text-lg leading-tight tracking-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="check-2"
                    >
                      Show your profile to logged - in users{" "}
                    </label>{" "}
                  </div>{" "}
                  {/* Show courses you're taking on your profile page */}{" "}
                  <div className="flex items-center space-x-2 mb-3">
                    <label
                      className="flex items-center cursor-pointer relative"
                      htmlFor="check-3"
                    >
                      <input
                        type="checkbox"
                        defaultChecked
                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none  shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                        id="check-3"
                      />
                      <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>{" "}
                        </svg>{" "}
                      </span>{" "}
                    </label>{" "}
                    <label
                      className="cursor-pointer ml-3 text-lg leading-tight tracking-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="check-3"
                    >
                      Show courses you 're taking on your profile pag{" "}
                    </label>{" "}
                  </div>{" "}
                  <Button className="bg-gray-900 text-white hover:bg-gray-700 mt-6 w-24 mb-80 h-14 font-bold text-lg">
                    Save{" "}
                  </Button>{" "}
                </div>{" "}
              </>
            )}{" "}
            {/* Account Security Tap */}{" "}
            {false === "Account Security" && <EditAccount email={user.email} />}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Page;
