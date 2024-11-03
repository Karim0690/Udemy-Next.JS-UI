"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { MdError } from "react-icons/md";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const router = useRouter();
  const t = useTranslations("Login");

  const handleLogin = async (e) => {
    e.preventDefault();
    setGeneralError("");
    setEmailError("");
    setPasswordError("");

    // Validate email and password
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (password.trim().length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setGeneralError(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="container mx-auto px-4 flex my-4 justify-center items-center">
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

        <div className="flex justify-center items-center mt-12">
          <div className="text-center w-full lg:w-[65%]">
            <h1 className="text-3xl font-bold mb-6 text-gray-950">
              {t("title")}
            </h1>
            {generalError && (
              <div className="bg-[#fcbca0] p-4 text-start mb-4">
                <BiSolidErrorAlt className="inline mr-2 text-2xl text-black-500" />
                {generalError}
              </div>
            )}
            <form onSubmit={handleLogin}>
              <div className="relative">
                <input
                  type="text"
                  value={email}
                  className="block border w-full p-5 text-sm focus:outline-none border-black placeholder-black font-bold appearance-none peer"
                  placeholder=" "
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  aria-describedby="emailError"
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm font-bold text-black-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  {t("email")}
                </label>
              </div>
              {emailError && (
                <div id="emailError" className="text-black-500 mt-2 border border-gray-500 p-2 absolute rounded z-20 w-auto text-center bg-white">
                  <MdError className="inline text-2xl mr-2 text-orange-500" />
                  {emailError}
                </div>
              )}
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordError) setPasswordError("");
                  }}
                  className="block border w-full mt-4 p-5 text-sm focus:outline-none border-black placeholder-black font-bold appearance-none peer"
                  placeholder=" "
                  aria-describedby="passwordError"
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm font-bold text-black-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  {t("pass")}
                </label>
              </div>
              {passwordError && (
                <div id="passwordError" className="text-black-500 mt-2 border border-gray-500 p-2 absolute rounded z-10 w-auto text-center bg-white">
                  <MdError className="inline text-2xl mr-2 text-orange-500" />
                  {passwordError}
                </div>
              )}
              <button
                type="submit"
                className="mt-6 w-full bg-purple-500 text-white text-lg font-medium py-3 px-6 hover:bg-purple-800"
              >
                {t("login")}
              </button>
            </form>
            <div className="flex justify-center items-center mt-6">
              <p>{t("or")}</p>
              <a
                href="/forget-password"
                className="text-md font-bold underline text-purple-800 hover:text-purple-950 ml-1 decoration-purple-800 decoration-1 underline-offset-4"
              >
                {t("forget")}
              </a>
            </div>
            <div className="flex justify-center items-center mt-9 relative">
              <hr className="w-full" />
              <h1 className="absolute bg-white px-2 text-sm text-gray-500">
                {t("other")}
              </h1>
            </div>
            <div className="flex justify-center items-center mt-10">
              {/* Social login buttons here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
