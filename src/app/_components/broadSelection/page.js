"use client";

import CourseComponent from "../CourseComponent/CourseComponent";
import CoursesSlider from "../CoursesSlider/CoursesSlider";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";

function BroadSelection() {
  const t = useTranslations("LandingPage");
  const [activeTab, setActiveTab] = useState("python");
  const tabs = [
    { id: "python", label: t("python") },
    { id: "Microsoft Excel", label: t("excel") },
    { id: "Web Development", label: t("web") },
    { id: "JavaScript", label: t("js") },
    { id: "Data Science", label: t("dataScience") },
    { id: "Amazon AWS", label: t("aws") },
    { id: "Drawing", label: t("drawing") },
  ];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [PythonCourse, setPythonCourse] = useState([]);
  const [JSCourse, setJSCourse] = useState([]);

  const fetchPython = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/public/courses?relatedTopic=672b9f751377fcd73804100f`
      );
      if (data.status === "success") {
        setPythonCourse(data.data.courses);
      } else {
        setPythonCourse([]);
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
      setError("Failed to fetch Python courses, please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const fetchJs = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/public/courses?relatedTopic=671ad10145e395ac7f4bec6b`
      );
      if (data.status === "success") {
        setJSCourse(data.data.courses);
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    fetchPython();
    fetchJs();
  }, []);

  return (
    <>
      <div className="mx-20 mt-20">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold pb-4 text-gray-700">
            {t("courseSelection")}
          </h1>
          <p>{t("coursedesc")}</p>
        </div>
      </div>

      <div className="mx-16 py-8 relative">
        <div>
          <div className="font-bold text-center text-gray-500"></div>
          <div className="font-bold text-center text-gray-500">
            <ul className="flex border-b border-gray-100 lg:hidden">
              <Swiper spaceBetween={10} slidesPerView="auto" className="w-full">
                {tabs.map((tab) => (
                  <SwiperSlide key={tab.id} className="!w-auto">
                    <div
                      className={`inline-block p-4 rounded-t-lg hover:cursor-pointer ${
                        activeTab === tab.id
                          ? "text-black border-black"
                          : "border-transparent hover:text-black"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ul>

            {/* Standard layout for large screens */}
            <ul className="hidden lg:flex border-b border-gray-100">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <div
                    className={`inline-block p-4 rounded-t-lg hover:cursor-pointer ${
                      activeTab === tab.id
                        ? "text-black border-black"
                        : "border-transparent hover:text-black"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Content for each tab */}
          <div className="p-6 border border-gray-300 text-black">
            {activeTab === "python" && (
              <div>
                <CourseComponent
                  title={t("pythonH")}
                  content={t("pythonP")}
                  button={t("pythonButton")}
                />
                {console.log(PythonCourse)}
                <div className="">
                  {loading ? (
                    <div className="flex flex-col space-y-3">
                      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                  ) : PythonCourse && PythonCourse.length > 0 ? (
                    <CoursesSlider courses={PythonCourse} />
                  ) : (
                    <div className="py-3 font-bold"> No Available Courses</div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "Microsoft Excel" && (
              <div>
                <CourseComponent
                  title={t("excelH")}
                  content={t("excelP")}
                  button={t("excelButton")}
                />
                <div className="">
                  <CoursesSlider />
                </div>
              </div>
            )}

            {activeTab === "Web Development" && (
              <div>
                <CourseComponent
                  title={t("webH")}
                  content={t("webP")}
                  button={t("webButton")}
                />
                <div className="">
                  <CoursesSlider />
                </div>
              </div>
            )}

            {activeTab === "JavaScript" && (
              <div>
                <CourseComponent
                  title={t("jsH")}
                  content={t("jsP")}
                  button={t("jsButton")}
                />
                <div className="">
                  {JSCourse && JSCourse.length > 0 && (
                    <CoursesSlider courses={JSCourse} />
                  )}
                </div>
              </div>
            )}
            {activeTab === "Data Science" && (
              <div>
                <CourseComponent
                  title={t("dataScienceH")}
                  content={t("dataScienceP")}
                  button={t("dataScienceButton")}
                />
                <div className="">
                  <CoursesSlider />
                </div>
              </div>
            )}
            {activeTab === "Amazon AWS" && (
              <div>
                <CourseComponent
                  title={t("awsH")}
                  content={t("awsP")}
                  button={t("awsButton")}
                />
                <div className="">
                  <CoursesSlider />
                </div>
              </div>
            )}
            {activeTab === "Drawing" && (
              <div>
                <CourseComponent
                  title={t("drawingH")}
                  content={t("drawingP")}
                  button={t("drawingButton")}
                />
                <div className="">
                  <CoursesSlider />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BroadSelection;
