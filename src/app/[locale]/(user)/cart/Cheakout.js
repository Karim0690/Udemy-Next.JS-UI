"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import React from "react";


const Cheakout = () => {
  const {data:session}=useSession()
  console.log(session);
  
  const handleCheckout = async () => {
    let { data } = await axios.get(`http://127.0.0.1:3001/cart`, {
      headers: {
        Authorization: session.accessToken,
      },
    });
    if (data.message === "success") {
      const response = await axios.post(
        `http://127.0.0.1:3001/paypal/pay/${data.cart._id}`,
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
        className="bg-[#a435f0] hover:bg-[#8710d8] text-white font-bold w-full p-3 my-3"
        onClick={() => {
          handleCheckout();
        }}
      >
        Cheackout
      </button>
    </>
  );
};

export default Cheakout;
