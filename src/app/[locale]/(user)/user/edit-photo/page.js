"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { toast } from "sonner";
import AccountSidenav from "../accountSidenav/AccountSidenav";

const page = () => {
  const [formPhoto, setFormPhoto] = useState({
    photo: "",
  });
  const showToast = (message, isError = false) => {
    const toastId = toast("", {
      description: (
        <div className="flex flex-col">
          <div className="flex items-center gap-5">
            {isError ? (
              <TbAlertOctagonFilled className="text-6xl" />
            ) : (
              <IoMdCheckmarkCircle className="text-4xl" />
            )}
            <span className={`font-bold "text-black"`}>{message}</span>
          </div>
          <button
            className="mt-5 mx-14 bg-gray-800 text-white w-20 p-3"
            onClick={() => toast.dismiss(toastId)}
          >
            Dismiss
          </button>
        </div>
      ),
      style: {
        background: isError ? "#fcbca0" : "#acd2cc",
        fontSize: "16px",
        color: "#1c1c1c",
        padding: "12px",
        borderRadius: "0",
        border: isError ? "1px solid #f5c6cb" : "1px solid #ccc",
      },
    });
  };
  const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME;
  const preset_key = process.env.NEXT_PUBLIC_CLOUD_PRESET;
  const [imageLoading, setImageLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const imageData = new FormData();
    imageData.append("file", file);
    imageData.append("upload_preset", preset_key);
    setImageLoading(true);

    try {
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        imageData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        }
      );

      setFormPhoto({ photo: data.secure_url });
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setImageLoading(false);
    }
  };

  const handleSubmitPhoto = async () => {
    if (formPhoto.photo) {
      try {
        let { data } = await axios.put(
          `http://localhost:3001/user/66aa2d5a201f806f92eebb25`,
          formPhoto
        );
        if (data.message === "success")
          showToast("Your changes have been saved successfully");
      } catch (error) {
        showToast(
          "Your changes have not been saved. Please address the issues.",
          true
        );
        console.error(error);
        setError(
          error.response?.data?.message ||
            "An error occurred. Please try again later."
        );
      }
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center py-10 flex-1 mx-4 md:mx-8 lg:mx-20">
        <AccountSidenav />
        <div className="border border-gray-300 flex-1 max-w-[900px]">
          <div className="flex border-b border-gray-300 py-4">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">
                Photo
              </h1>
              <p className="font-text mt-2 leading-6 ">
                Add a nice photo of yourself for your profile.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="px-4 max-w-[700px] mx-auto my-6">
              {" "}
              <p className="font-heading font-bold my-4 leading-tight tracking-normal">
                Image preview
              </p>
              <div className="flex items-center justify-center w-full">
                <div className="border border-black w-full h-60 p-2">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    {imageLoading && (
                      <div className="absolute w-full h-full flex justify-center items-center">
                        <div className="w-full h-full bg-black opacity-30"></div>
                        <div role="status" className="absolute">
                          <svg
                            aria-hidden="true"
                            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    )}
                    <Image
                      width={200}
                      height={200}
                      src={
                        formPhoto.photo ||
                        "https://img-c.udemycdn.com/user/200_H/anonymous_3.png"
                      }
                      alt="User Avatar"
                      className="w-[200px] h-[220px]"
                    />
                  </div>
                </div>
              </div>
              {/* input file */}
              <div className="mt-4 flex-1">
                <div className="mt-4 flex w-full">
                  {uploadProgress == 0 ? (
                    <span className="p-3 text-gray-500 border border-black flex-1">
                      No file selected
                    </span>
                  ) : (
                    <div className="flex-1">
                      <div className="relative w-full h-full bg-gray-400">
                        <div
                          className="absolute h-full bg-violet-700 text-center text-white py-3"
                          style={{ width: `${uploadProgress}%` }}
                        >
                          {uploadProgress}%
                        </div>
                      </div>
                    </div>
                  )}
                  {uploadProgress == 100 ? (
                    <label className="bg-white border border-black p-3 cursor-pointer hover:bg-gray-100">
                      <span className="font-bold text-black">Change</span>
                      <input
                        name="courseImage"
                        className="hidden"
                        type="file"
                        accept=".jpg, .jpeg, .png, .gif"
                        onClick={() => {
                          setUploadProgress(0);
                        }}
                      />
                    </label>
                  ) : (
                    <label className="bg-white border border-black p-3 cursor-pointer hover:bg-gray-100">
                      <span className="font-bold text-black">Upload File</span>
                      <input
                        name="courseImage"
                        className="hidden"
                        type="file"
                        accept=".jpg, .jpeg, .png, .gif"
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                  {/* File input */}
                </div>
              </div>
              {/* button save */}
              <div className="flex items-center mb-28 space-x-2">
                <button
                  type="submit"
                  className={`${
                    formPhoto.photo
                      ? "bg-zinc-800 hover:bg-zinc-700"
                      : "bg-gray-400 cursor-not-allowed"
                  } text-white  w-20 h-12 font-bold text-lg mt-6`}
                  disabled={!formPhoto.photo}
                  onClick={() => {
                    handleSubmitPhoto();
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
