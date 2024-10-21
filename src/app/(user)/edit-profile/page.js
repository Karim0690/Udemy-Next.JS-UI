"use client";

import RichText from "@/app/(instructor)/_components/RichText/RichText";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
// import React, { useState } from "react";
import { MdEdit, MdModeEdit } from "react-icons/md";

// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

export default function Page() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    headline: "",
    language: "",
    biography: "",
    social: {
      website: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      youtube: "",
    },
    photo: " ",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleChangeUpdate = (event) => {
    const { name, value } = event.target;
    if (name in formData.social) {
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
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    console.log(formData);

    try {
      const response = await axios.put(
        `http://localhost:3001/user/669904f9ad62aaee0f072f8a`,

        formData
      );
      setSuccess("User data updated successfully!");
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const [passwordData, setPasswordData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handlePasswordChange = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const { password, newPassword, confirmPassword } = passwordData;

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3001/user/change-password/669904f9ad62aaee0f072f8a`,
        {
          oldPassword: password,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        }
      );

      setSuccess("Password updated successfully!");
      setPasswordData({ password: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };
  const handlePasswordChangeUpdate = (event) => {
    const { name, value } = event.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [formPhoto, setFormPhoto] = useState({
    photo: "",
  });
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
      setSuccess("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setImageLoading(false);
    }
  };
  useEffect(() => {
    const updateUser = async () => {
      if (!formPhoto.photo) return;
      try {
        await axios.put(
          `http://localhost:3001/user/669904f9ad62aaee0f072f8a`,
          formPhoto
        );
        console.log("User data updated successfully!");
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    };

    updateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formPhoto.photo]);

  const handleSubmitPhoto = async (event) => {
    event.preventDefault();
    if (formPhoto.photo) {
      try {
        await axios.put(
          `http://localhost:3001/user/669904f9ad62aaee0f072f8a`,
          formPhoto
        );
        setSuccess("User data updated successfully!");
      } catch (error) {
        console.error(error);
        setError(
          error.response?.data?.message ||
            "An error occurred. Please try again later."
        );
      }
    }
  };
  const [emailData, setEmailData] = useState({
    email: "",
    password: "",
  });
  const handleEmailChange = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const { email, password } = emailData;

    try {
      const response = await axios.put(
        `http://localhost:3001/user/669904f9ad62aaee0f072f8a`,
        {
          email,
          password,
        }
      );

      setSuccess("Email updated successfully!");
      setEmailData({ email: "", password: "" }); // إعادة تعيين المدخلات
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChangeUpdate = (event) => {
    const { name, value } = event.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="pt-6 px-48 pb-12  grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-2 border border-gray-300">
          <div className="flex justify-center p-4">
            <div className="bg-gray-800 inline-flex items-center justify-center rounded-full bg-cover font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl text-white w-16 h-16">
              KA
            </div>
          </div>
          <div className=" font-bold leading-tight tracking-normal text-center pt-4">
            Karim Abdelkareem
          </div>
          <ul className="py-4">
            <li>
              <a
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === "View public profile"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab("View public profile")}
              >
                View public profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === "Profile"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab("Profile")}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === "Photo"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab("Photo")}
              >
                Photo
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === "Account Security"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab("Account Security")}
              >
                Account Security
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === "Privacy"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab("Privacy")}
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block text-sm   hover:bg-gray-500 hover:text-white px-4 py-1 ${
                  activeTab === "Close account"
                    ? "bg-gray-500 text-white"
                    : "text-black"
                }`}
                onClick={() => setActiveTab("Close account")}
              >
                Close account
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-10 border border-gray-300">
          <div className=" text-black mr-6">
            {/* profile Tap */}
            {activeTab === "Profile" && (
              <>
                <div className="flex border-b border-gray-300 py-4">
                  <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">
                      Public profile
                    </h1>
                    <p className="font-text mt-2 leading-6 ">
                      Add information about yourself
                    </p>
                  </div>
                </div>
                <div className="mx-32 px-7">
                  <form onSubmit={handleSubmit}>
                    <h2 className="font-semibold px-3 mt-3">Basics:</h2>
                    <div className="w-full px-3 mt-2 m mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      ></label>
                      <input
                        className="appearance-none block w-full  text-gray-700 border border-black  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => {
                          handleChangeUpdate(e);
                        }}
                      />
                    </div>

                    <div className="w-full  px-3 mt-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      ></label>
                      <input
                        className="appearance-none block w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={(e) => {
                          handleChangeUpdate(e);
                        }}
                      />
                    </div>
                    <div className="w-full  px-3 mt-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-headline"
                      ></label>
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
                          placeholder="Headline"
                          /*     value={bio}
                            onChange={handleChange} */
                        />
                        <span className="absolute top-0 right-0 m-2 text-gray-500">
                          {/* {remainingChars} */}
                        </span>
                      </div>
                      <div className="flex align-center text-gray-600 text-xs">
                        Add a professional headline like, "Instructor at Udemy"
                        or "Architect."
                      </div>
                    </div>
                    <div className="w-full px-3 mt-6 md:mb-0  ">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-biography"
                      ></label>
                      <RichText
                        value={formData.biography}
                        name="biography"
                        onChange={(e) => {
                          handleChangeUpdate(e);
                        }}
                      />
                      <div className="text-gray-600 text-xs align-center mt-2">
                        Links and coupon codes are not permitted in this
                        section.
                      </div>
                    </div>
                    <div className="w-full px-3 mt-6 md:mb-0 border-b border-gray-300">
                      <label
                        htmlFor="language"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Language
                      </label>
                      <select
                        name="language"
                        value={formData.language}
                        onChange={handleChangeUpdate}
                        id="language"
                        className="border border-black py-3 px-4 mb-3 text-gray-900 text-sm block w-full h-12"
                      >
                        <option value="English (US)">English (US)</option>
                        <option value="Canada">Canada</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Spain">Spain</option>
                        <option value="Italy">Italy</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Australia">Australia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="India">India</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Mexico">Mexico</option>
                        <option value="China">China</option>
                        <option value="Russia">Russia</option>
                      </select>
                    </div>

                    <div className="w-full  px-3 mt-6 md:mb-0">
                      <h2 className="font-bold"> Links:</h2>
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
                        for="grid-first-name"
                      ></label>
                      <input
                        className="appearance-none block w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Website (http(s)://..)"
                        name="website"
                        value={formData.social.website}
                        onChange={(e) => {
                          handleChangeUpdate(e);
                        }}
                      />
                    </div>
                    <div className="w-full  px-3 mt-6 md:mb-0">
                      <label
                        for="grid-twittre-url"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      ></label>
                      <div className="relative  flex w-full items-stretch">
                        <span
                          className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                          id="basic-addon3"
                        >
                          http://www.twitter.com/
                        </span>
                        <input
                          placeholder="Twitter Profile"
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
                      <div className="flex align-center text-gray-600 text-xs">
                        Add your Twitter username (e.g. johnsmith).
                      </div>
                    </div>
                    <div className="w-full px-3 mt-6 md:mb-0">
                      <label
                        for="grid-facebook-url"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      ></label>
                      <div className="relative  flex w-full items-stretch">
                        <span
                          className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                          id="basic-addon3"
                        >
                          http://www.facebook.com/
                        </span>
                        <input
                          placeholder="Facebook Profile"
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
                      <div className="flex align-center text-gray-600 text-xs">
                        Input your Facebook username (e.g. johnsmith).
                      </div>
                    </div>

                    <div className="w-full  px-3 mt-6 md:mb-0">
                      <label
                        for="grid-linkedin-url"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      ></label>
                      <div className="relative  flex w-full items-stretch">
                        <span
                          className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                          id="basic-addon3"
                        >
                          http://www.linkedin.com/
                        </span>
                        <input
                          placeholder="LinkedIn Profile"
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
                      <div className="flex align-center text-gray-600 text-xs">
                        Input your LinkedIn resource id (e.g. in/johnsmith).
                      </div>
                    </div>
                    <div className="w-full  px-3 mt-6 md:mb-0">
                      <label
                        for="grid-youtube-url"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      ></label>
                      <div className="relative flex w-full items-stretch">
                        <span
                          className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                          id="basic-addon3"
                        >
                          http://www.youtube.com/
                        </span>
                        <input
                          placeholder="YouTube  Profile"
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
                      <div className="flex align-center text-gray-600 text-xs">
                        Input your Youtube username (e.g. johnsmith).
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 my-6 px-3 ">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-black text-white hover:bg-gray-700 w-20 h-12 font-bold text-lg mt-4"
                      >
                        {isLoading ? "Saving..." : "Save"}
                      </Button>
                    </div>
                  </form>
                </div>
              </>
            )}

            {/* Photo Tap */}
            {activeTab === "Photo" && (
              <>
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

                <form className="mx-32 px-7" onSubmit={handleSubmitPhoto}>
                  <p className="font-heading font-bold my-4 leading-tight tracking-normal">
                    Image preview
                  </p>

                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>

                  {/* Show preview of the uploaded image */}
                  {/*   {formData.photo && (
                    <div className="mt-4">
                      <img
                        src={formData.photo}
                        alt="Uploaded preview"
                        className="h-40"
                      />
                    </div>
                  )} */}

                  {/* button save */}
                  <div className="flex items-center mb-28 space-x-2">
                    <button
                      type="submit"
                      className="bg-zinc-800 text-white hover:bg-zinc-700 w-20 h-12 font-bold text-lg mt-6"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Close account Tap */}
            {activeTab === "Close account" && (
              <>
                <div className="flex border-b border-gray-300 py-4">
                  <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">
                      Close Account
                    </h1>
                    <p className="font-text mt-2 leading-6 ">
                      Close your account permanently
                    </p>
                  </div>
                </div>
                <div className="mx-32 px-7">
                  <div className="mt-4">
                    <p>
                      <b className="text-red-700 "> Warning: </b>
                      If you close your account, you will be unsubscribed from
                      all 0 of your courses and will lose access to your account
                      and data associated with your account forever, even if you
                      choose to create a new account using the same email
                      address in the future.
                      <br />
                      <br />
                      Please note, if you want to reinstate your account after
                      submitting a deletion request, you will have 14 days after
                      the initial submission date to reach out to
                      privacy@udemy.com to cancel this request.
                    </p>
                  </div>
                  {/* button save */}
                  {/* <div className="flex items-center mb-80 space-x-2">
                    <Button className="bg-zinc-800 text-white hover:bg-zinc-700 h-12 font-semibold text-lg mt-6">
                      Close account
                    </Button>
                  </div> */}

                  <div className="flex items-center mb-80 space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-zinc-800 text-white hover:bg-zinc-700 h-12 font-semibold text-lg mt-6">
                          Close account
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] bg-white">
                        <DialogHeader>
                          <DialogTitle>Close Your Account</DialogTitle>
                        </DialogHeader>
                        <div className="pt-3">
                          <b>
                            Are you sure you want to close your account? 
                          </b>
                        </div>
                        <form
                          // onSubmit={handleEmailChange}
                          className="grid gap-4"
                        >
                          <div className="items-center gap-4">
                            <input
                              id="password"
                              type="password"
                              name="password"
                              value={emailData.password}
                              onChange={handleEmailChangeUpdate}
                              className="border border-black w-full p-2"
                              placeholder="Enter your password"
                            />
                          </div>

                          <div className="mt-4">
                            <div className="flex justify-end">
                              <Button
                                type="submit"
                                className="bg-black text-white font-bold hover:bg-gray-800 h-14 w-25"
                                disabled={isLoading}
                              >
                                {isLoading ? "Close account..." : "Close account"}
                              </Button>
                            </div>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </>
            )}

            {/* Privacy Tap  */}
            {activeTab === "Privacy" && (
              <>
                <div className="flex border-b border-gray-300 py-4">
                  <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">
                      Privacy
                    </h1>
                    <p className="font-text mt-2 leading-6 ">
                      Modify your privacy settings here.
                    </p>
                  </div>
                </div>
                <div className="mx-32 px-7 mt-6">
                  <h2 className="mb-6 font-bold">Profile page settings</h2>

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
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-3 text-lg leading-tight tracking-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="check-2"
                    >
                      Show your profile to logged-in users
                    </label>
                  </div>
                  {/* Show courses you're taking on your profile page */}
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
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="cursor-pointer ml-3 text-lg leading-tight tracking-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="check-3"
                    >
                      Show courses you're taking on your profile pag
                    </label>
                  </div>
                  <Button className="bg-gray-900 text-white hover:bg-gray-700 mt-6 w-24 mb-80 h-14 font-bold text-lg">
                    Save
                  </Button>
                </div>
              </>
            )}

            {/* Account Security Tap */}
            {activeTab === "Account Security" && (
              <>
                <div className="flex border-b border-gray-300 py-4">
                  <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">
                      Account
                    </h1>
                    <p className="font-text mt-2 leading-6">
                      Edit your account settings and change your password here
                    </p>
                  </div>
                </div>
                <div className="mx-32 px-7 my-6">
                  <h2 className="font-semibold px-3 ">Email:</h2>
                  <div className="w-full px-3 mt-2  min-w-[200px]">
                    <div className="relative">
                      <div className="w-full pl-3 pr-10 py-4 bg-transparent text-slate-600 text-sm border border-black">
                        <span className="text-black ">
                          Your email address is <b>543125983a@emailfoxi.pro</b>
                        </span>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="absolute inset-y-0 right-0 flex items-center">
                              <Button
                                type="button"
                                className="h-full p-0 border border-black text-slate-900 hover:bg-slate-100 w-10 flex justify-center items-center"
                              >
                                <MdModeEdit />
                              </Button>
                            </div>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[600px] bg-white">
                            <DialogHeader>
                              <DialogTitle>Change your email</DialogTitle>
                            </DialogHeader>
                            <form
                              onSubmit={handleEmailChange}
                              className="grid gap-4 py-4"
                            >
                              <div className="items-center gap-4">
                                <input
                                  id="email"
                                  name="email"
                                  value={emailData.email}
                                  onChange={handleEmailChangeUpdate}
                                  className="border border-black w-full p-2"
                                  placeholder="Enter your email"
                                />
                              </div>
                              <div className="items-center gap-4">
                                <input
                                  id="password"
                                  type="password"
                                  name="password"
                                  value={emailData.password}
                                  onChange={handleEmailChangeUpdate}
                                  className="border border-black w-full p-2"
                                  placeholder="Enter your password"
                                />
                              </div>
                              {error && (
                                <div className="text-red-500">{error}</div>
                              )}
                              {success && (
                                <div className="text-green-500">{success}</div>
                              )}
                              <div className="mt-4">
                                <div className="mb-4">
                                  <p>
                                    For your security, if you change your email
                                    address your saved credit card information
                                    will be deleted.
                                  </p>
                                </div>
                                <div className="flex justify-end">
                                  <Button
                                    type="submit"
                                    className="bg-black text-white font-bold hover:bg-gray-800 h-12 w-20"
                                    disabled={isLoading}
                                  >
                                    {isLoading ? "Saving..." : "Save"}
                                  </Button>
                                </div>
                              </div>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-300"></div>
                <div className="mx-32 px-7">
                  <form onSubmit={handlePasswordChange}>
                    <h2 className="font-semibold px-3 mt-6">Password:</h2>
                    <div className="w-full px-3 mt-2 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="current-password"
                      ></label>
                      <input
                        className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="current-password"
                        type="password"
                        name="password"
                        value={passwordData.password}
                        onChange={handlePasswordChangeUpdate}
                        placeholder="Enter current password"
                      />
                    </div>

                    <div className="w-full px-3 mt-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="new-password"
                      ></label>
                      <input
                        className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="new-password"
                        type="password"
                        name="newPassword"
                        value={passwordData.newPassword}
                        onChange={handlePasswordChangeUpdate}
                        placeholder="Enter new password"
                      />
                    </div>

                    <div className="w-full px-3 mt-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="confirm-password"
                      ></label>
                      <input
                        className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="confirm-password"
                        type="password"
                        name="confirmPassword"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChangeUpdate}
                        placeholder="Re-type new password"
                      />
                    </div>

                    {/* Save button */}
                    <div className="flex items-center mb-80 space-x-2">
                      <Button className="bg-zinc-800 text-white hover:bg-zinc-700 h-16 font-bold text-lg mt-6">
                        Change password
                      </Button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
