import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";
import React from "react";

const Page = async () => {
  const session = await getServerSession(authOptions);
  let cart;
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/cart`,
      {
        headers: {
          Authorization: session?.accessToken,
        },
      }
    );
    if (response.data.message === "success") {
      cart = response.data.cart;
    }
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="p-10 h-screen">
      <div className="mx-20">
        <h1 className="font-bold text-4xl mb-4">Shopping Cart</h1>
        <div className="my-8">
          {cart && cart.items ? <CartItems data={cart} /> : <EmptyCart />}
        </div>
      </div>
    </div>
  );
};

export default Page;
