"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { MdError } from "react-icons/md";

const Page = () => {
  const t = useTranslations("forgtPassword");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setGeneralError("");
    setEmailError("");

    if (!email.includes("@gmail.com") || email.trim() === "") {
      setEmailError(
        "Please include an '@' in the email address and ensure it is not empty."
      );
      return;
    }

    try {
      const response = await fetch(
        "https://udemy-eosin-eight.vercel.app/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      setEmail("");
      router.push("/login");
    } catch (err) {
      setGeneralError(err.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  return (
    <>
      <div className="container mx-auto px-4 flex  justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-full w-[100%] md:w-[60%] lg:w-[100%]">
          <div className="flex justify-center items-center">
            <Image
              width={980}
              height={900}
              src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-1-x2.webp"
              alt="Udemy Illustration"
              className="hidden lg:block max-w-full h-auto"
            />
            <Image
              width={980}
              height={900}
              src="https://frontends.udemycdn.com/components/auth/mobile-illustration-x2.webp"
              alt="Udemy Illustration"
              className="block lg:hidden max-w-full h-auto"
            />
          </div>

          <div className="flex justify-center items-center">
            <div className="text-center w-full lg:w-[65%]">
              <h1 className="text-3xl font-bold mb-6 text-gray-950">
                {t("forgetPassword")}
              </h1>

              <h1 className="text-xl mb-6 text-gray-950">
                {t("resetPasswordMessage")}
              </h1>

              {generalError && (
                <div className="bg-[#fcbca0] p-4 text-start mb-4">
                  <BiSolidErrorAlt className="inline mr-2 text-2xl text-black-500" />
                  {generalError}
                </div>
              )}
              <form onSubmit={handleSignup}>
                <div className="relative">
                  <input
                    type="email"
                    className="block border w-full mt-5 p-5 text-sm focus:outline-none border-black placeholder-black font-bold appearance-none peer"
                    placeholder=" "
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label className="absolute text-sm font-bold text-black-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                    {t("email")}
                  </label>
                </div>
                {emailError && (
                  <div className="text-black-500 mt-2 border border-gray-500 p-2 absolute rounded z-20 w-auto text-center bg-white">
                    <MdError className="inline text-2xl mr-2 text-orange-500" />
                    {emailError}
                  </div>
                )}

                <button className="mt-6 w-full bg-purple-500 text-white text-lg font-medium py-3 px-6 hover:bg-purple-800">
                  {t("resetPassword")}
                </button>
              </form>
              <div className="flex justify-center items-center mt-6"></div>
              <div className="flex justify-center items-center mt-12 bg-slate-50 p-4">
                <p> {t("or")} </p>
                <a
                  href="/login"
                  className="text-md font-bold underline text-purple-800 hover:text-purple-950 ml-1"
                >
                  {t("logIn")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
