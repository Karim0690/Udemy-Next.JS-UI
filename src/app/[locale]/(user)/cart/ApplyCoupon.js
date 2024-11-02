"use client";

import useCartStore from "@/app/store/cartStore";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { toast } from "sonner";

const ApplyCoupon = ({ discount }) => {
  const [code, setCode] = useState("");
  const { fetchUsersCart } = useCartStore();

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
  const router = useRouter();
  const applyCuopon = async () => {
    try {
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/cart`,
        { code: code },
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhMmQ1YTIwMWY4MDZmOTJlZWJiMjUiLCJuYW1lIjoiS2FyaW0gQWJkZWxrYXJlZW0iLCJlbWFpbCI6IkthcmltQXltYW4zNjBAZ21haWwuY29tIiwicm9sZSI6WyJzdHVkZW50IiwiaW5zdHJ1Y3RvciJdLCJpYXQiOjE3MzAyMTgxNjYsImV4cCI6MTc2MTc3NTc2Nn0.F-HpJoI6sNENg8pkuWqZ0qlJ-y-WScNJcOGgQi98SFM`, // Replace with your actual token or handle it securely
          },
        }
      );
      if (data.message === "success") {
        router.refresh();
        showToast("Coupon applied successfully", false);
        setCode("");
      } else {
        showToast(data.message, true);
      }
    } catch (err) {
      console.error(err);
      // Handle error as needed, e.g., display an error message to the user.
    } finally {
      fetchUsersCart();
    }
  };

  const removeCoupon = async () => {
    try {
      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/cart`,
        {},
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhMmQ1YTIwMWY4MDZmOTJlZWJiMjUiLCJuYW1lIjoiS2FyaW0gQWJkZWxrYXJlZW0iLCJlbWFpbCI6IkthcmltQXltYW4zNjBAZ21haWwuY29tIiwicm9sZSI6WyJzdHVkZW50IiwiaW5zdHJ1Y3RvciJdLCJpYXQiOjE3MzAyMTgxNjYsImV4cCI6MTc2MTc3NTc2Nn0.F-HpJoI6sNENg8pkuWqZ0qlJ-y-WScNJcOGgQi98SFM`, // Replace with your actual token or handle it securely
          },
        }
      );
      if (data.message === "success") {
        router.refresh();
        showToast("Coupon removed successfully", false);
      } else {
        showToast(data.message, true);
      }
    } catch (err) {
      console.error(err);
      // Handle error as needed, e.g., display an error message to the user.
    } finally {
      fetchUsersCart();
    }
  };
  return (
    <div>
      <div className="flex">
        <input
          type="text"
          className="border border-black px-3 py-1 flex-1 outline-none"
          placeholder="Enter Coupon"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="bg-[#a435f0] hover:bg-[#8710d8] text-white font-bold text-sm px-3 py-1"
          onClick={() => {
            applyCuopon();
          }}
        >
          Apply
        </button>
      </div>

      <div>
        {discount > 0 && (
          <button
            className="text-violet-700 hover:text-violet-900 text-sm py-3 cursor-pointer"
            onClick={() => {
              removeCoupon();
            }}
          >
            Remove Coupon
          </button>
        )}
      </div>
    </div>
  );
};

export default ApplyCoupon;
