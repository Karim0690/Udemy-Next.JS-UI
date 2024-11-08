/* eslint-disable react-hooks/rules-of-hooks */
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";
import { useTranslations } from "next-intl";
import React from "react";

const Page = async () => {
  const t = useTranslations("Cart");
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
    <div className="p-0 md:p-10">
      <div className="container">
        <h1 className="font-bold text-4xl mb-4 p-6 md:p-0">
          {t("shoppingCart")}{" "}
        </h1>
        <div className="lg:my-8">
          {cart && cart.items ? (
            <CartItems data={cart} session={session} />
          ) : (
            <EmptyCart />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
