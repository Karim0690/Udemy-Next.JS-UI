"use client";

import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import useCartStore from "@/app/store/cartStore";
import { Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { fetchUsersCart, cart } = useCartStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadCart = async () => {
      await fetchUsersCart();
      setLoading(false);
    };

    loadCart();
  }, [fetchUsersCart]);

  return (
    <div className="p-10 h-screen">
      <div className="mx-20">
        <h1 className="font-bold text-4xl mb-4">Shopping Cart</h1>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner className="h-16 w-16" />
          </div>
        ) : (
          <div className="my-8">
            {cart && cart.items.length > 0 ? (
              <CartItems data={cart} />
            ) : (
              <EmptyCart />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
