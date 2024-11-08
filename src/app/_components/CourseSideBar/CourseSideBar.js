"use client";

import CoursePrice from "../CorusePrice/CoursePrice";
import HeartButton from "../HeartButton/HeartButton";
import useCartStore from "@/app/store/cartStore";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdPlayCircle } from "react-icons/md";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { toast } from "sonner";


const CourseSideBar = ({ course, courseImg, price, locale }) => {
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
  const { data: session } = useSession();
  const fetchUsersCart = useCartStore((state) => state.fetchUsersCart);

  const addToCart = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/cart`,
        {
          course: course._id,
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
      showToast(e.response.data.message, true);
    }
  };
  const img = courseImg;
  const [isSticky, setIsSticky] = useState(false);
  const [isRelative, setIsRelative] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    // Determine if the sidebar should be sticky
    if (scrollY > 500) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }

    // Determine if we are near the bottom of the page
    if (scrollY + windowHeight >= documentHeight - 300) {
      setIsRelative(true); // Return to relative when close to the bottom
    } else {
      setIsRelative(false); // Otherwise, it can be sticky
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = useTranslations("CoursePage");

  return (
    <div
      className={`transition-all duration-300  ${isRelative ? "" : "relative"}`}
    >
      <div className="flex flex-col bg-white lg:shadow-2xl w-full">
        <div className="mb-1 w-full">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src={img}
              alt="Course Preview"
              width={200}
              height={300}
              objectFit="cover"
              className="transition-transform duration-300 transform hover:scale-105 w-full"
            />
            <span className="absolute h-full inset-0 font-extrabold flex mb-3 items-end justify-center text-white bg-black bg-opacity-15 hover:bg-opacity-50 transition-opacity duration-200">
              <p className="text-sm font-medium py-2">{t("preview")}</p>
            </span>
            <Dialog>
              <DialogTrigger className="absolute inset-0 flex items-center justify-center border-none">
                <MdPlayCircle className="text-6xl text-white" />
              </DialogTrigger>
              <DialogContent className="bg-[#191a1b] text-white w-full h-full">
                <DialogHeader>
                  <DialogTitle className="text-sm">
                    {t("coursePreview")}
                  </DialogTitle>
                  <DialogDescription className="text-xl">
                    {course.title}
                  </DialogDescription>
                  <video width="full" height="auto" controls>
                    <source src={course.promotionalVideo} type="video/mp4" />
                  </video>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div
          className={`transition-all duration-300 lg:w-[360px] ${
            isSticky && !isRelative
              ? `lg:fixed lg:top-4 ${
                  locale === "en" ? "lg:right-36" : "lg:left-28"
                }  lg:bg-white lg:z-20`
              : "relative"
          } `}
        >
          <div className="flex-grow px-6">
            <h2 className="text-xl my-2 text-gray-700 font-semibold">
              {t("subscripe")}
            </h2>
            <p className="text-sm text-gray-700 mb-4">{t("persoalPlan")}</p>
            <div className="flex justify-center">
              <Button
                className="w-99 mb-2 bg-purple-700 h-14 text-slate-100 mx-auto font-bold"
                variant="brand"
              >
                {t("try")}
              </Button>
            </div>
            <div className="text-sm text-gray-500 text-center">
              {t("starting")}
            </div>
            <div className="text-sm text-gray-500 text-center mt-2">
              {t("cancel")}
            </div>
          </div>

          <div className="flex items-center justify-center mt-5">
            <div className="border-t border-gray-300 flex-grow mr-3"></div>
            <span className="text-gray-500">{t("or")}</span>
            <div className="border-t border-gray-300 flex-grow ml-3"></div>
          </div>

          <div className="mt-4 p-6">
            <p className="text-xl font-bold text-gray-900">
              <CoursePrice price={price} />
            </p>
            <div className="flex flex-1 mt-3 justify-between space-x-2">
              <button
                className="w-full p-3 text-lg border border-black"
                onClick={() => {
                  addToCart();
                }}
              >
                {t("addtocart")}
              </button>

              <HeartButton className="basis-1/4" />
            </div>
            <div className="text-sm text-gray-500 text-center mt-5">
              {t("moneyBack")}
            </div>
            <div className="text-sm text-gray-500 text-center mt-2">
              {t("full")}
            </div>

            {/* <div className="flex justify-between mt-5">
              <Button
                className="underline decoration-indigo-500"
                variant="link"
              >
                Share
              </Button>
              <Button variant="ghost">Gift this course</Button>
              <Button variant="ghost">Apply Coupon</Button>
            </div>
            <div className="flex mt-12">
              <Input type="text" placeholder="Enter Coupon" className="h-12" />
              <Button className="hover:bg-slate-600 bg-slate-700 text-slate-200 h-12 font-bold">
                Apply
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSideBar;
