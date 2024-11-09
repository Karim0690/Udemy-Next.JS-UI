"use client";

import AccountSidenav from "../accountSidenav/AccountSidenav";
import useUserStore from "@/app/store/userStore";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { toast } from "sonner";

const Page = () => {
  const t = useTranslations("editAccount");
  const { data: session } = useSession();
  const [userData, setUserData] = useState();
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const { locale } = useParams();

  useEffect(() => {
    if (session?.user?._id) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.NEXT_PUBLIC_LOCAL_API}/user/${session.user._id}`
          );
          setUserData(data.user);
          setEmail(data.user.email);
          setPageIsLoading(false);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setPageIsLoading(false);
        }
      };
      fetchData();
    }
  }, [session]);

  useEffect(() => {
    if (userData) {
      setEmail(userData.email); // Set email when userData is fetched
      setEmailData((prevData) => ({ ...prevData, email: userData.email }));
    }
  }, [userData]);

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
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /*Password */
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handlePasswordChange = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    !passwordData && setError("Please Enter Data!");
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    try {
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/user/change-password/${session.user._id}`,
        passwordData
      );
      if (data.message === "success") {
        setSuccess("Password updated successfully!");
        setPasswordData({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        showToast("Your changes have been saved successfully");
      } else {
        setError(data.message);
      }
    } catch (error) {
      showToast(
        "Your changes have not been saved. Please address the issues.",
        true
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
  /*Email*/
  const [emailData, setEmailData] = useState({
    email: email,
    password: "",
  });
  const handleEmailChange = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/user/change-email/${session.user._id}`,
        emailData
      );
      if (data.message === "success") {
        showToast("Your changes have been saved successfully");
        setEmailData({ email: "", password: "" });
        window.location.reload();
      }
    } catch (error) {
      console.log(error.response.data.message);
      console.error(error);
      setEmailError(
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
      <div className="flex flex-col md:flex-row justify-center py-10 flex-1 mx-4 md:mx-8 lg:mx-20">
        <AccountSidenav />
        <div className="border border-gray-300 flex-1 max-w-[900px]">
          <div className="flex border-b border-gray-300 py-4">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">
                {t("account")}
              </h1>
              <p className="font-text mt-2 leading-6">
                {t("editAccountSettings")}
              </p>
            </div>
          </div>
          {pageIsLoading ? (
            <div className="flex-1 flex justify-center items-center mt-4">
              <Spinner className="h-16 w-16 text-gray-900/50" />
            </div>
          ) : (
            <div className="flex-1">
              <div className="px-4 max-w-[700px] mx-auto my-6">
                <h2 className="font-semibold px-3 "> {t("email")} </h2>
                <div className="w-full px-3 mt-2  min-w-[200px]">
                  <div className="relative flex border border-black">
                    <div
                      className={`w-full ${
                        locale === "en" ? "pl-3 pr-10" : "pr-16 pl-10"
                      }  py-4 bg-transparent text-slate-600 text-sm`}
                    >
                      <span className="text-black flex-1">
                        {t("yourEmailAddress")} <b>{email}</b>
                      </span>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="absolute inset-y-0 right-0 flex items-center">
                            <Button
                              type="button"
                              className="h-full p-0  border-l border-black shadow-none text-slate-900 hover:bg-slate-100 w-12 flex justify-center items-center"
                            >
                              <MdModeEdit className="text-2xl" />
                            </Button>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] bg-white">
                          <DialogHeader>
                            <DialogTitle>{t("changeYourEmail")}</DialogTitle>
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
                                placeholder={t("enterYourEmail")}
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
                                placeholder={t("enterYourPassword")}
                              />
                            </div>
                            {emailError && (
                              <div className="p-3 bg-[#fcbca0] text-gray-800 flex items-center gap-4">
                                <TbAlertOctagonFilled className="text-3xl text-black" />
                                <p className="font-semibold">{emailError}</p>
                              </div>
                            )}
                            {success && (
                              <div className="text-green-500">{success}</div>
                            )}
                            <div className="mt-4">
                              <div className="mb-4">
                                <p>{t("emailChangeWarning")}</p>
                              </div>
                              <div className="flex justify-end">
                                <Button
                                  type="submit"
                                  className="bg-black text-white font-bold hover:bg-gray-800 h-12 w-20"
                                  disabled={isLoading}
                                >
                                  {isLoading ? t("saving") : t("save")}
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
              <div className="flex-1">
                <div className="px-4 max-w-[700px] mx-auto">
                  <div>
                    <h2 className="font-semibold px-3 mt-6">
                      {" "}
                      {t("password")}{" "}
                    </h2>
                    <div className="w-full px-3 mt-2 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="current-password"
                      ></label>
                      <input
                        className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="current-password"
                        type="password"
                        name="oldPassword"
                        value={passwordData.oldPassword}
                        onChange={handlePasswordChangeUpdate}
                        placeholder={t("enterCurrentPassword")}
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
                        placeholder={t("enterNewPassword")}
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
                        placeholder={t("retypeNewPassword")}
                      />
                    </div>
                    {error && (
                      <div className="mx-3 p-3 bg-[#fcbca0] text-gray-800 flex items-center gap-4">
                        <TbAlertOctagonFilled className="text-3xl text-black" />
                        <p className="font-semibold">{error}</p>
                      </div>
                    )}

                    {/* Save button */}
                    <div className="flex items-center ml-3">
                      <button
                        className="bg-zinc-800 text-white hover:bg-zinc-700 p-3 font-bold my-6"
                        onClick={() => {
                          handlePasswordChange();
                        }}
                      >
                        {t("changePassword")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
