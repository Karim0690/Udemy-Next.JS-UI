"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const t = useTranslations("Teaching");

  const [activeTab, setActiveTab] = useState("plan-curriculum");

  return (
    <div className="container flex justify-center p-8">
      <div>
        <div className="text-2xl font-bold text-center text-gray-500 flex justify-center">
          <ul className="flex w-[fit-content] border-b-2 border-gray-200">
            <li className="me-2">
              <div
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:cursor-pointer ${
                  activeTab === "plan-curriculum"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("plan-curriculum")}
              >
                {t("curriculum")}
              </div>
            </li>

            <li className="me-2">
              <div
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:cursor-pointer ${
                  activeTab === "record-video"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("record-video")}
              >
                {t("video")}
              </div>
            </li>

            <li className="me-2">
              <div
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:cursor-pointer ${
                  activeTab === "launch-course"
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                }`}
                onClick={() => setActiveTab("launch-course")}
              >
                {t("course")}
              </div>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <div className="p-6 text-black mr-6">
            {activeTab === "plan-curriculum" && (
              <div className="flex justify-center items-center">
                <div className="w-[24rem] mr-[50px]">
                  <p className="text-lg">{t("ct1")}</p>
                  <p className="text-lg mt-2">{t("ct2")}</p>
                  <h3 className="text-base font-bold my-6">{t("ct3")}</h3>
                  <p className="text-lg mt-2">{t("ct4")}</p>
                </div>
                <div>
                  <Image
                    src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg"
                    width={480}
                    height={480}
                    alt=""
                  />
                </div>
              </div>
            )}

            {activeTab === "record-video" && (
              <div className="flex justify-center items-center">
                <div className="w-[24rem] mr-[50px]">
                  <p className="text-lg">{t("v1")}</p>
                  <p className="text-lg mt-2">{t("v2")}</p>
                  <h3 className="text-base font-bold my-6"> {t("v3")}</h3>
                  <p className="text-lg mt-2">{t("v4")}</p>
                </div>
                <div>
                  <Image
                    src="https://s.udemycdn.com/teaching/record-your-video-v3.jpg"
                    width={480}
                    height={480}
                    alt=""
                  />
                </div>
              </div>
            )}

            {activeTab === "launch-course" && (
              <div className="flex justify-center items-center">
                <div className="w-[24rem] mr-[50px]">
                  <p className="text-lg">{t("c1")}</p>
                  <p className="text-lg mt-2">{t("c2")}</p>
                  <h3 className="text-base font-bold my-6"> {t("c3")}</h3>
                  <p className="text-lg mt-2">{t("c4")}</p>
                </div>
                <div>
                  <Image
                    src="https://s.udemycdn.com/teaching/launch-your-course-v3.jpg"
                    width={480}
                    height={480}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
