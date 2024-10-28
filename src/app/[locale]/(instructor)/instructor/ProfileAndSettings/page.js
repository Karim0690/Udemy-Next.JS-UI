"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Page() {
  const t = useTranslations("ProfileSettings");
  console.log("Translations :", t);
  
  const [activeTab, setActiveTab] = useState(t("udemyProfile"));
  const [bio, setBio] = useState("");
  const MAX_CHARS = 60;
  const [remainingChars, setRemainingChars] = useState(MAX_CHARS);

  const handleChange = (e) => {
    const value = e.target.value;
    if (MAX_CHARS - value.length >= 0) {
      setBio(value);
      setRemainingChars(MAX_CHARS - value.length);
    }
  };

  return (
    <div className="max-w-7xl min-h-screen px-24 mx-auto">
      <h1 className="mt-6 mb-14 font-bold text-3xl leading-tight tracking-tighter max-w-3xl">
        {t("title")}
      </h1>
      <div className="container flex justify-center p-8">
        <div>
          <div className="text-2xl font-bold text-center text-gray-500 flex justify-center">
            <ul className="flex w-[fit-content] border-b-2 border-gray-200">
              {["Udemy profile", "Profile picture", "Privacy settings"].map(
                (tab) => (
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
                )
              )}
            </ul>
          </div>
          <div className="text-left">
            <div className="p-6 text-black mr-6">
              {activeTab === t("ProfileSettings.udemyProfile") && (
                <form>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        {t("firstName")}
                      </label>
                      <input
                        className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        placeholder={t("firstName")}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        {t("website")}
                      </label>
                      <input
                        className="appearance-none block w-full disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 text-gray-700 border border-black py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="URL"
                        disabled
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        {t("lastName")}
                      </label>
                      <input
                        className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        placeholder={t("lastName")}
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        {t("twitter")}
                      </label>
                      <div className="relative mb-4 flex w-full items-stretch">
                        <span className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6]">
                          http://www.twitter.com/
                        </span>
                        <input
                          type="text"
                          className="relative m-0 block flex-auto appearance-none w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        {t("headline")}
                      </label>
                      <div className="relative">
                        <input
                          className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          type="text"
                          placeholder="Instructor at Udemy"
                          value={bio}
                          onChange={handleChange}
                        />
                        <span className="absolute top-0 right-0 m-2 text-gray-500">
                          {remainingChars}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button className="bg-zinc-800 text-white hover:bg-zinc-700 w-20 h-14 font-bold text-lg mt-6">
                        {t("save")}
                      </Button>
                    </div>
                  </div>
                </form>
              )}
              {activeTab === t("Profile picture") && (
                <div className="pt-3">
                  <p className="font-heading font-bold leading-tight tracking-normal text-xl">
                    {t("imagePreview")}
                  </p>
                  <div className="text-gray-500 py-2 font-text font-normal leading-relaxed text-lg">
                    {t("minimumRequirements")}
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">
                            {t("clickToUpload")}
                          </span>{" "}
                          {t("orDragAndDrop")}
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button className="bg-zinc-800 text-white hover:bg-zinc-700 w-20 h-14 font-bold text-lg mt-6">
                      {t("save")}
                    </Button>
                  </div>
                </div>
              )}
              {activeTab === t("ProfileSettings.Privacy setting") && (
                <div className="pt-6 max-w-5xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="showProfile" />
                    <label htmlFor="showCourses" className="font-bold text-lg">
                      {t("privacySettings.showCourses")}
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Checkbox id="showCourses" />

                    <label htmlFor="showProfile" className="font-bold text-lg">
                      {t("privacySettings.showProfile")}
                    </label>
                  </div>
                  <Button className="bg-black text-white hover:bg-zinc-700 mt-6 w-20 h-14 font-bold text-lg">
                    {t("save")}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
