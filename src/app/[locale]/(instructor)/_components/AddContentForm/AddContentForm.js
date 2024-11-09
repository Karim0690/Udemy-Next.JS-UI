"use client";

import useCourseStore from "@/app/store/courseStore";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const AddContentForm = ({
  addVideo,
  setAddVideo,
  id,
  videoAdded,
  setAddContent,
  courseId,
}) => {
  const [uploadVideoProgress, setUploadVideoProgress] = useState(0);
  const [videoLoading, setVideoLoading] = useState(false);
  const [Data, setData] = useState({});
  const [fileData, setFileData] = useState({ name: "", lastModified: "" });
  const [error, setError] = useState("");
  const cancelTokenSource = useRef(null); // Reference to store the cancel token
  const { fetchCourse } = useCourseStore();
  const params = useParams();

  const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME;
  const preset_key = process.env.NEXT_PUBLIC_CLOUD_PRESET;

  const handleVideoChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const MAX_VIDEO_SIZE = 4 * 1024 * 1024 * 1024;
    if (file.size > MAX_VIDEO_SIZE) {
      setError("File size exceeds the maximum limit of 4 GB.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    setVideoLoading(true);
    setError(""); // Clear any previous error

    cancelTokenSource.current = axios.CancelToken.source();

    try {
      const date = new Date();
      const formattedDate = `${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${date
        .getDate()
        .toString()
        .padStart(2, "0")}/${date.getFullYear()}`;

      setFileData({ name: file.name, lastModified: formattedDate });

      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/video/upload`,
        formData,
        {
          cancelToken: cancelTokenSource.current.token, // Attach the cancel token
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadVideoProgress(percentCompleted);
          },
        }
      );
      setData({
        resourceTitle: data.original_filename,
        duration: data.duration,
        resource: data.secure_url,
      });

      // Ensure data is available before making a PUT request
      if (data.secure_url) {
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/lectures/${id}/course/${courseId}`,
          {
            resourceTitle: data.original_filename,
            duration: data.duration,
            resource: data.secure_url,
          }
        );

        if (response.data.message === "success") {
          videoAdded();
          fetchCourse(params.id);
        }
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Error uploading video. Please try again.");
    } finally {
      setVideoLoading(false);
    }
  };

  const handleCancelUpload = () => {
    if (cancelTokenSource.current) {
      cancelTokenSource.current.cancel("Upload canceled by the user.");
      setUploadVideoProgress(0);
      setFileData({ name: "", lastModified: "" });
      setAddVideo(false);
      setAddContent(null);
    }
  };

  // useEffect(() => {
  //   const uploadLectureVideo = async () => {
  //     await axios.put(
  //       `${process.env.NEXT_PUBLIC_LOCAL_API}/lectures/${id}/course/${courseId}`,
  //       formData
  //     );
  //   };
  //   uploadLectureVideo();
  // }, [formData, id, courseId]);

  const t = useTranslations("Curriculum");

  return (
    <div className="relative">
      <div
        className={`absolute ${
          params.locale === "en" ? "right-14" : "left-14"
        } -top-[16px] md:-top-[28px] bg-white flex items-center gap-2 border border-black border-b-0 p-1  text-sm cursor-default`}
      >
        <p className="hidden md:block font-bold text-xs md:text-base">
          {addVideo ? t("content-type") : t("add-video")}
        </p>
        <IoMdClose
          className="text-sm md:text-lg cursor-pointer"
          onClick={() => {
            setAddContent(null);
            setAddVideo(true);
          }}
        />
      </div>
      {addVideo ? (
        <div
          className={`bg-white text-center gap-2 border border-black border-t-0 p-4 ${
            params.locale === "en" ? "ml-2 md:ml-20 mr-2" : "mr-2 md:mr-20 ml-2"
          } relative`}
        >
          <p>
            {t("add-video-des1")}
            <span className="text-[#5022c3] cursor-pointer underline underline-offset-4 hover:text-[#3b198f]">
              {t("add-video-des2")}
            </span>
          </p>
          <button
            className="relative flex flex-col items-center gap-2 bg-gray-50 border border-gray-300 mx-auto mt-5 w-20 font-medium hover:bg-gray-900 group overflow-hidden"
            onClick={() => setAddVideo(false)}
          >
            {/* Gray circle */}
            <FaCirclePlay className="text-3xl mt-2 text-gray-200 transition-all duration-300 transform group-hover:translate-y-[-100%] group-hover:opacity-0" />

            {/* White circle */}
            <FaCirclePlay className="text-3xl absolute top-full mt-2 text-white transition-all duration-300 transform group-hover:translate-y-[-230%]" />

            {/* Video label */}
            <span className="text-gray-800 text-xs w-full relative z-10 bg-gray-200 p-1 group-hover:bg-gray-950 group-hover:text-white">
              {t("video")}
            </span>
          </button>
        </div>
      ) : uploadVideoProgress === 0 ? (
        <div
          className={`bg-white gap-2 border border-black border-t-0 ${
            params.locale === "en" ? "ml-20 mr-2" : "mr-20 ml-2"
          } p-4 `}
        >
          <div className="border-b">
            <p className="font-bold pb-3 border-b-2 w-fit border-black">
              {t("upload-video")}
            </p>
          </div>
          <div className="mt-4 flex w-full">
            <span className="p-3 text-gray-900 font-medium border border-black flex-1">
              {t("no-file-selected")}
            </span>

            {/* File input */}
            <label className="bg-white border border-black p-3 cursor-pointer hover:bg-gray-100">
              <span className="font-bold text-black">{t("select-video")}</span>
              <input
                name="source"
                className="hidden"
                type="file"
                accept=".mp4, .mov, .avi"
                onChange={handleVideoChange}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            <span className="font-bold">{t("note")}</span>
            {t("all-files")}
          </p>
        </div>
      ) : (
        <div
          className={`bg-white gap-2 border border-black border-t-0 p-4 ${
            params.locale === "en" ? "ml-2 md:ml-20 mr-2" : "mr-2 md:mr-20 ml-2"
          }`}
        >
          <div className="border-b">
            <p className="font-bold pb-3 border-b-2 w-fit border-black">
              {t("upload-video")}
            </p>
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr className="">
                <th className="px-2 py-2 w-[40%]">{t("filename")}</th>
                <th className="px-1 py-2">{t("type")}</th>
                <th className="px-4 py-2 w-[30%]">{t("status")}</th>
                <th className="px-1 py-2">{t("date")}</th>
                <th className="px-1 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-2">{fileData.name}</td>
                <td className="px-1 py-2">{t("video")}</td>
                <td className="px-4 py-2 h-max flex items-center justify-center">
                  <div className="w-full bg-gray-200 h-2.5">
                    <div
                      className={`bg-purple-700 h-2.5`}
                      style={{ width: `${uploadVideoProgress}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 p-3">{uploadVideoProgress}%</span>
                </td>
                <td className="px-1 py-2">{fileData.lastModified}</td>
                <td
                  className="px-1 py-2 font-medium text-violet-700 hover:text-violet-900 cursor-pointer text-right"
                  onClick={handleCancelUpload}
                >
                  x
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddContentForm;
