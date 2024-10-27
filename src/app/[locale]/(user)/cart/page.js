import Image from "next/image";
import Link from "next/link";
import React from "react";
import EmptyCart from "./EmptyCart";

const Page = () => {
  return (
    <div className="p-10">
      <div className="mx-20">
        <h1 className="font-bold text-4xl mb-4">Shopping Cart</h1>
        <div className="my-8">
          <p className="font-bold mb-2">0 Courses in Cart</p>
          <EmptyCart />
        </div>
      </div>
    </div>
  );
};

export default Page;
