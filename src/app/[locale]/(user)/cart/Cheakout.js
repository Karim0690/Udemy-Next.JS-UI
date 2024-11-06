"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";

const Cheakout = () => {
  const { data: session } = useSession();
  const handleCheckout = async () => {
    let { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/cart`,
      {
        headers: {
          Authorization: session.accessToken,
        },
      }
    );
    if (data.message === "success") {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/paypal/pay/${data.cart._id}`,
        null
      );
      if (response.data.message === "success") {
        window.location.href = response.data.link;
      }
    }
  };

  return (
    <>
      <button
        className="bg-[#a435f0] hover:bg-[#8710d8] text-white font-bold w-full p-3 my-3 hidden md:block"
        onClick={() => {
          handleCheckout();
        }}
      >
        Cheackout
      </button>
      <div className="block md:hidden fixed z-30 bottom-0 p-3 bg-white w-full">
        <button
          className="bg-[#a435f0] hover:bg-[#8710d8] text-white font-bold w-full p-3 my-3"
          onClick={() => {
            handleCheckout();
          }}
        >
          Cheackout
        </button>
      </div>
    </>
  );
};

export default Cheakout;
