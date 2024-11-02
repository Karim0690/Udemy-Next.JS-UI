"use client";

import useAuthStore from "@/app/store/AuthStore";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { redirect, useParams, useRouter } from "next/navigation";
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
  const { setUser } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    setGeneralError("");
    setEmailError("");
    setPasswordError("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (password.trim().length < 6) {
      setPasswordError(
        "Please lengthen this text to at least 6 characters or more."
      );
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
    // try {
    //   const response = await fetch(
    //     "https://udemy-eosin-eight.vercel.app/auth/signin",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email, password }),
    //     }
    //   );

    //   const data = await response.json();

    //   if (response.ok) {
    //     localStorage.setItem("token", data.token);
    //     window.location.href = "/";
    //     setEmail("");
    //     setPassword("");
    //   }
    //   if (!response.ok) {
    //     setGeneralError(data.message);
    //   }
    // } catch (err) {
    //   setGeneralError(err.message);
    // }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError("");
  };

  const t = useTranslations("Login");
  const { locale } = useParams();

  return (
    <>
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
                    onChange={handleEmailChange}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm font-bold text-black-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    {t("email")}
                  </label>
                </div>
                {emailError && (
                  <div className="text-black-500 mt-2 border border-gray-500 p-2 absolute rounded z-20 w-auto text-center bg-white">
                    <MdError className="inline text-2xl mr-2 text-orange-500" />
                    {emailError}
                  </div>
                )}
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="block border w-full mt-4 p-5 text-sm focus:outline-none border-black placeholder-black font-bold appearance-none peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm font-bold text-black-500 duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    {t("pass")}
                  </label>
                </div>
                {passwordError && (
                  <div className="text-black-500 mt-2 border border-gray-500 p-2 absolute rounded z-10 w-auto text-center bg-white">
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
                <button className="border border-black p-2 hover:bg-gray-200 mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </button>
                <button className="border border-black p-2 hover:bg-gray-200 mx-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    ></path>
                  </svg>
                </button>
                <button className="border border-black p-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                  </svg>
                </button>
              </div>
              <div className="flex justify-center items-center mt-12 bg-slate-50 p-4">
                <p> {t("noAccount")}</p>
                <a
                  href={`/${locale}/signup`}
                  className="text-md font-bold underline text-purple-800 hover:text-purple-950 ml-1 decoration-purple-800 decoration-1 underline-offset-4"
                >
                  {t("signup")}
                </a>
              </div>
              <hr className="w-full border-gray-300" />
              <div className="flex justify-center items-center bg-slate-50 p-4">
                <a
                  href="#"
                  className="text-md font-bold underline text-purple-800 hover:text-purple-950 ml-1 decoration-purple-800 decoration-1 underline-offset-4"
                >
                  {t("org")}
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
