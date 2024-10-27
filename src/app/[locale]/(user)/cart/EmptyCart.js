import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyCart = () => {
  return (
    <>
      <div className="border border-gray-200 flex flex-col justify-center items-center py-9">
        <div className="mb-5">
          <Image
            src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg"
            width={240}
            height={280}
            alt=""
          />
        </div>
        <div className="mb-10">
          <p className="text-black-500">
            Your cart is empty. Keep shopping to find a course!
          </p>
        </div>
        <div className="mb-5">
          <Link
            href="/"
            className="ud-btn ud-btn-primary ud-btn-large bg-purple-500 text-white p-4 font-extrabold hover:bg-purple-700"
          >
            Keep Shopping
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
