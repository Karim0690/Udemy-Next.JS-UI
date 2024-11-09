/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import AccountSidenav from "../accountSidenav/AccountSidenav";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { toast } from "sonner";

const page = () => {
  const t = useTranslations("CloseAccount");
  const showToast = (message, isError = false) => {
    const toastId = toast("", {
      description: (
        <div className="flex flex-col">
          <div className="flex items-center gap-5">
            {" "}
            {isError ? (
              <TbAlertOctagonFilled className="text-6xl" />
            ) : (
              <IoMdCheckmarkCircle className="text-4xl" />
            )}{" "}
            <span className={`font-bold "text-black"`}> {message} </span>{" "}
          </div>{" "}
          <button
            className="mt-5 mx-14 bg-gray-800 text-white w-20 p-3"
            onClick={() => toast.dismiss(toastId)}
          >
            {t("dismiss")}
          </button>{" "}
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

  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCloseAccount = async () => {
    try {
      const { data } = await axios.post(
        `http://127.0.0.1:3001/user/close-account/6718e7e6d862afcf2b83f769`,
        {
          password,
        }
      );
      if (data.message === "success") {
        showToast("Your changes have been saved successfully");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error closing account:", error);
      setError(error.response.data.message);
      showToast(
        "Your changes have not been saved. Please address the issues.",
        true
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center py-10 flex-1 mx-4 md:mx-8 lg:mx-20">
        <AccountSidenav />
        <div className="border border-gray-300 flex-1 max-w-[900px]">
          <div className="text-black">
            <div className="flex border-b border-gray-300 py-4">
              <div className="mx-auto max-w-7xl px-6 text-center">
                <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">
                  {t("closeAccount")}
                </h1>{" "}
                <p className="font-text mt-2 leading-6 ">
                  {t("closeAccountPermanently")}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex-1">
              <div className="px-4 max-w-[700px] mx-auto mt-4">
                <p>
                  <b className="text-red-700 "> {t("warning")}</b>

                  {t("accountClosureWarning")}

                  <br />
                  <br />
                  {t("accountReinstatementNotice")}
                </p>{" "}
                <div className="flex items-center mb-80 space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-zinc-800 text-white hover:bg-zinc-700 h-12 font-semibold text-lg mt-6">
                        {t("closeAccount")}
                      </Button>{" "}
                    </DialogTrigger>{" "}
                    <DialogContent className="sm:max-w-[600px] bg-white">
                      <DialogHeader>
                        <DialogTitle> {t("closeYourAccount")}</DialogTitle>{" "}
                      </DialogHeader>{" "}
                      <div className="pt-3">
                        <b> {t("areYouSureCloseAccount")}</b>{" "}
                      </div>{" "}
                      <div className="grid gap-4">
                        <div className="items-center gap-4">
                          <input
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="border border-black w-full p-2"
                            placeholder="Enter your password"
                          />
                        </div>{" "}
                        {error && (
                          <div className="p-3 bg-[#fcbca0] text-gray-800 flex items-center gap-4">
                            <TbAlertOctagonFilled className="text-3xl text-black" />
                            <p className="font-semibold"> {error} </p>{" "}
                          </div>
                        )}
                        <div className="mt-4 ">
                          <div className="flex justify-end ">
                            <button
                              type="submit"
                              className="bg-black text-white font-bold hover:bg-gray-800 p-3"
                              disabled={isLoading}
                              onClick={handleCloseAccount}
                            >
                              {isLoading
                                ? t("closeAccount...")
                                : t("closeAccount...")}
                            </button>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </DialogContent>{" "}
                  </Dialog>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default page;
