"use client";

import RichText from "../../_components/RichText/RichText";
import InstructorHeader from "../InstructorHeader/InstructorHeader";
import SideNav from "../InstructorSidenav/SideNav";
import InstructorFooter from "../instractorFooter/page";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Page() {
  const t = useTranslations("ProfileSettings");
  const [activeTab, setActiveTab] = useState(t("udemyProfile"));
  console.log("Translations :", t);
  const [formData, setFormData] = useState({
    name: "",
    headline: "",
    social: {
      facebook: "",
      twitter: "",
      linkedin: "",
      youtube: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChangeUpdate = (event) => {
    const { name, value } = event.target;

    if (name in formData.social) {
      // Update social field
      setFormData((prevData) => ({
        ...prevData,
        social: {
          ...prevData.social,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    console.log(formData.social.facebook);
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.put(
        `https://udemy-eosin-eight.vercel.app/user/669904f9ad62aaee0f072f8a`,

        formData,
      );
      setSuccess("User data updated successfully!");
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message ||
          "An error occurred. Please try again later.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const MAX_CHARS = 60;
  const [remainingChars, setRemainingChars] = useState(MAX_CHARS);

  const handleChange = () => {
    if (MAX_CHARS - value.length >= 0) {
      setRemainingChars(MAX_CHARS - value.length);
    }
  };
  const { locale } = useParams();
  return (
    <>
      <InstructorHeader />
      {/* Main Content */}
      <div>
        <div className="hidden md:block">
          <SideNav />
        </div>
        <div className={`flex-1 ${locale === "en" ? "ml-24" : " mr-24"}`}>
          <h1 className="mb-10 font-semibold text-5xl leading-tight tracking-tighter max-w-3xl">
            {t("title")}
          </h1>
          <div className="container flex w-full">
            <div className="w-full">
              <div className="text-2xl font-bold text-center text-gray-500 flex w-full">
                <ul className="flex">
                  {[
                    t("udemyProfile"),
                    t("profilePicture"),
                    t("privacySettings"),
                  ].map((tab) => (
                    <li key={tab} className="me-2">
                      <div
                        className={`inline-block p-4 border-b-2 rounded-t-lg hover:cursor-pointer ${
                          activeTab === tab
                            ? "text-black border-black"
                            : "border-transparent hover:text-black"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* border */}
              <div className="border-b-2 border-gray-200"></div>
              <div>
                <div className=" py-6 text-black ">
                  {activeTab === t("udemyProfile") && (
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name"
                          >
                            {t("firstName")}
                          </label>
                          <input
                            className="appearance-none block w-full  text-gray-700 border border-black  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            name="name"
                            placeholder={t("firstName")}
                            value={formData.name}
                            onChange={(e) => {
                              handleChangeUpdate(e);
                            }}
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-last-name"
                          >
                            {t("website")}
                          </label>
                          <input
                            className="appearance-none block w-full disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 text-gray-700  border border-black py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder={t("url")}
                            disabled
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name"
                          >
                            {t("lastName")}
                          </label>
                          <input
                            className="appearance-none block w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder={t("lastName")}
                            name="lastName"
                            /*    value={formData.name}
                            onChange={(e) => {
                              handleChangeUpdate(e);
                            }} */
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                          <label
                            for="grid-twittre-url"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          >
                            {t("twitter")}
                          </label>
                          <div className="relative mb-4 flex w-full items-stretch">
                            <span
                              className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                              id="basic-addon3"
                            >
                              http://www.twitter.com/
                            </span>
                            <input
                              type="text"
                              className="relative m-0 block flex-auto  appearance-none  w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-twittre-url"
                              aria-describedby="basic-addon3"
                              name="twitter"
                              value={formData.social.twitter}
                              onChange={(e) => {
                                handleChangeUpdate(e);
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-headline"
                          >
                            {t("headline")}
                          </label>
                          <div className="relative">
                            <input
                              name="headline"
                              value={formData.headline}
                              onChange={(e) => {
                                handleChangeUpdate(e);
                              }}
                              className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-first-name"
                              type="text"
                              placeholder={t("instructor")}
                              /*     value={bio}
                              onChange={handleChange} */
                            />
                            <span
                              className={`absolute top-1 ${
                                locale === "en" ? "right-0" : "left-0"
                              }  m-2 text-gray-500`}
                            >
                              {remainingChars}
                            </span>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                          <label
                            for="grid-facebook-url"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          >
                            {t("facebook")}
                          </label>
                          <div className="relative mb-4 flex w-full items-stretch">
                            <span
                              className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                              id="basic-addon3"
                            >
                              http://www.facebook.com/
                            </span>
                            <input
                              name="facebook"
                              value={formData.social.facebook}
                              onChange={(e) => {
                                handleChangeUpdate(e);
                              }}
                              type="text"
                              className="relative m-0 block flex-auto  appearance-none  w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-facebooke-url"
                              aria-describedby="basic-addon3"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-biography"
                          >
                            {t("biography")}
                          </label>
                          <RichText />
                          <div className="text-gray-400 font-normal text-xs mt-2">
                            {t("biographydescription")}
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                          <label
                            for="grid-linkedin-url"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          >
                            {t("linkedin")}
                          </label>
                          <div className="relative mb-4 flex w-full items-stretch">
                            <span
                              className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                              id="basic-addon3"
                            >
                              http://www.linkedin.com/
                            </span>
                            <input
                              name="linkedin"
                              value={formData.social.linkedin}
                              onChange={(e) => {
                                handleChangeUpdate(e);
                              }}
                              type="text"
                              className="relative m-0 block flex-auto  appearance-none  w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-linkedin-url"
                              aria-describedby="basic-addon3"
                            />
                          </div>

                          <label
                            for="grid-youtube-url"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          >
                            {t("youtube")}
                          </label>
                          <div className="relative mb-4 flex w-full items-stretch">
                            <span
                              className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                              id="basic-addon3"
                            >
                              http://www.youtube.com/
                            </span>
                            <input
                              name="youtube"
                              value={formData.social.youtube}
                              onChange={(e) => {
                                handleChangeUpdate(e);
                              }}
                              type="text"
                              className="relative m-0 block flex-auto appearance-none  w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                              id="grid-youtube-url"
                              aria-describedby="basic-addon3"
                            />
                          </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                          <label
                            for="grid-youtube-url"
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          >
                            {t("language")}
                          </label>
                          <select
                            id="laguage"
                            className=" border  border-black py-3 px-4 mb-3 text-gray-900 text-sm  block w-full h-12"
                          >
                            <option className="  " selected>
                              {" "}
                              {t("chooseLanguage")}
                            </option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="ES">Spain</option>
                            <option value="IT">Italy</option>
                            <option value="UK">United Kingdom</option>
                            <option value="NL">Netherlands</option>
                            <option value="AU">Australia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="IN">India</option>
                            <option value="BR">Brazil</option>
                            <option value="MX">Mexico</option>
                            <option value="CN">China</option>
                            <option value="RU">Russia</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="bg-black text-white hover:bg-gray-700 w-20 h-14 font-bold text-lg mt-4"
                        >
                          {isLoading ? t("...save") : t("save")}
                        </Button>
                      </div>
                    </form>
                  )}
                  {activeTab === t("profilePicture") && (
                    <div className="pt-3">
                      <p className="font-heading font-bold leading-tight tracking-normal text-xl">
                        {t("imagePreview")}
                      </p>
                      <div className="text-gray-500 py-2 font-text font-normal leading-relaxed text-lg">
                        {" "}
                        {t("minimumRequirements")}
                      </div>
                      <div className="flex items-center justify-center w-full">
                        <label
                          for="dropzone-file"
                          className="flex flex-col items-center justify-center w-[50%] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                {" "}
                                {t("clickToUpload")}{" "}
                              </span>{" "}
                              {t("orDragAndDrop")}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, JPG or GIF (MAX. 800x400px)
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                      {/* button save */}
                      <div className="flex items-center space-x-2">
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="bg-zinc-800 text-white hover:bg-zinc-700 w-20 h-14 font-bold text-lg mt-6"
                        >
                          {isLoading ? t("...save") : t("save")}
                        </Button>
                      </div>
                    </div>
                  )}
                  {activeTab === t("privacySettings") && (
                    <div className="pt-6 max-w-5xl h-screen">
                      <div className="flex items-center gap-3 mb-3">
                        <Checkbox
                          id="terms"
                          className="checked:bg-black checked:text-white"
                        />
                        <label
                          htmlFor="terms"
                          className="font-bold leading-tight tracking-tight text-lg  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {t("showCourses")}
                        </label>
                      </div>
                      <div className="flex items-center gap-3 mb-3 ">
                        <Checkbox id="terms" />
                        <label
                          htmlFor="terms"
                          className=" font-bold  text-lg leading-tight tracking-tight  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {t("showProfile")}
                        </label>
                      </div>
                      <Button className="bg-black text-white hover:bg-zinc-700 mt-6 w-20 h-14 font-bold text-lg">
                        Save
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InstructorFooter />
    </>
  );
}
