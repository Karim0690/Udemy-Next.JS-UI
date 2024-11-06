"use client";

import HeartButton from "../HeartButton/HeartButton";
import useCartStore from "@/app/store/cartStore";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React from "react";
import { IoMdCheckmark, IoMdCheckmarkCircle } from "react-icons/io";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { toast } from "sonner";

const CoursePopper = ({ courseTitle, courseId }) => {
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
  const t = useTranslations("Categories");
  const { data: session } = useSession();
  const fetchUsersCart = useCartStore((state) => state.fetchUsersCart);

  const addToCart = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/cart`,
        {
          course: courseId,
        },
        {
          headers: {
            Authorization: session.accessToken,
          },
        }
      );
      if (data.message === "success") {
        showToast("Course added to cart successfully", false);
        if (session?.accessToken) {
          fetchUsersCart(session.accessToken);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="bg-white border">
        <div className="p-6">
          <h3 className="font-bold text-lg my-2">{courseTitle}</h3>
          <p className="text-xs text-green-800 my-3">
            Updated <b>July 2023</b>
          </p>
          <p className="text-xs text-gray-400 my-2">
            22 total hours . All Levels . Subtitle
          </p>
          <p className="my-3">
            Learn Python like a Professional Start from the basics and go all
            the way to creating your own applications and games
          </p>
          <div className="my-3">
            <div className="flex items-center gap-5">
              <IoMdCheckmark />
              <p>
                You will learn how to leverage the power of Python to solve
                tasks.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <IoMdCheckmark />
              <p>
                You will build games and programs that use Python libraries.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <IoMdCheckmark />
              <p>
                You will be able to use Python for your own work problems or
                personal projects.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className="p-3 flex-1 text-white font-bold bg-[#a435f0] hover:bg-[#8710d8]"
              onClick={() => {
                addToCart();
              }}
            >
              {t("addtocart")}
            </button>
            <HeartButton className={"rounded-full w-12 h-12"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePopper;
