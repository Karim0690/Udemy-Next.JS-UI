"use client";
import React from "react";
import { IoMdCheckmarkCircle, IoMdInformationCircle } from "react-icons/io";
import { toast } from "sonner";
import { IoMdSearch } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Promotions = () => {
  const referralLink =
    "http://localhost:3000/course/draft/6079509/?referralCode=6FA73D998B855DC87F56";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(referralLink);

    const toastId = toast("", {
      description: (
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <IoMdCheckmarkCircle className="text-4xl" />
            <span className="font-bold">Copied to Your Clipboard</span>
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
        background: "#acd2cc",
        fontSize: "16px",
        color: "#1c1c1c",
        padding: "12px",
        borderRadius: "0",
        border: "1px solid #ccc",
      },
    });
  };

  return (
    <>
      <div className="py-9 px-7 lg:px-12">
        {/* Coupon Information Banner */}
        <div className="my-5 p-4 border border-gray-300 flex gap-4 md:gap-5 items-start md:items-center">
          <IoMdInformationCircle className="text-5xl w-[10%] md:w-[5%]" />
          <p className="font-bold flex-1">
            We have updated the coupon system, and there is more to come.
            Announcing new free coupon limits and bulk coupon creation.{" "}
            <span className="text-[#5022c3] hover:text-[#3b198f] underline underline-offset-4 cursor-pointer">
              Learn more
            </span>
          </p>
        </div>

        {/* Refer Students Section */}
        <div className="my-5 p-4 border border-gray-300">
          <h2 className="text-xl font-bold text-gray-800">Refer students</h2>
          <p className="mt-2">
            Any time a student uses this link, we will credit you with the sale.{" "}
            <span className="text-[#5022c3] hover:text-[#3b198f] underline underline-offset-4 cursor-pointer">
              Learn more
            </span>
          </p>

          <div className="flex items-center mt-4 lg:w-[85%]">
            <input
              name="promotionsCode"
              className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={referralLink}
              readOnly
            />
            <button
              className="border border-l-0 border-black px-5 py-[10px] -top-[6px] relative font-bold hover:bg-gray-100"
              onClick={handleCopyClick}
            >
              Copy
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Coupons</h2>
          <div className="my-2 p-4 border border-gray-300">
            <p className="font-bold mb-2">
              {new Date().toLocaleString("default", { month: "long" })} coupons
            </p>
            <p className="text-lg">
              You cannot create coupons for a free course
            </p>
          </div>
        </div>

        <div className="my-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <h2 className="font-bold text-gray-800">
              Active/Scheduled coupons
            </h2>
            <p className="text-[#5022c3] hover:text-[#3b198f] underline underline-offset-4 cursor-pointer">
              Create multiple coupons
            </p>
          </div>
          <div className="my-2 p-4 md:border border-gray-300 text-center">
            <p>No coupon found</p>
          </div>
        </div>

        <div className="my-10 hidden md:block">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-800">Expired coupons</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="Search coupon code"
                className="border border-black p-2 w-60"
              />
              <button className=" bg-gray-800 text-white py-2 px-3 hover:bg-gray-700">
                <IoMdSearch className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="my-2 p-4 border border-gray-300 text-center">
            <p>No coupon found</p>
          </div>
        </div>
        {/* small */}
        <div className="my-10 block md:hidden">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="font-bold text-gray-800">
                Expired coupons
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search coupon code"
                    className="border border-black p-2 w-full"
                  />
                  <button className=" bg-gray-800 text-white py-2 px-3 hover:bg-gray-700">
                    <IoMdSearch className="text-2xl" />
                  </button>
                </div>
                <div className="my-2 p-4 text-center">
                  <p>No coupon found</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Promotions;
