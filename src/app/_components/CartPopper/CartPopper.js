"use client";

import useCartStore from "@/app/store/cartStore";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePopper } from "react-popper";

const CartPopper = ({
  trigger,
  content,
  buttonContent,
  placement = "bottom",
}) => {
  const [showPopper, setShowPopper] = useState(false);
  const triggerRef = useRef();
  const [popperElement, setPopperElement] = useState(null);
  const timeoutRef = useRef(null);
  const { data: session } = useSession();
  const [cart, setCart] = useState(null);
  useEffect(async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/cart`,
        {
          headers: {
            Authorization: session?.accessToken,
          },
        }
      );
      if(response.data.message==="success"){

        setCart(response.data.cart)
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  }, []);

  const { styles, attributes } = usePopper(triggerRef.current, popperElement, {
    placement: placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [-90, 30],
        },
      },
    ],
  });

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowPopper(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPopper(false);
    }, 100);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={triggerRef}
    >
      {trigger}

      {showPopper && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="bg-white shadow-lg border w-[320px] max-w-[320px]"
        >
          <div className="p-3 w-full flex flex-col z-10">
            {cart ? (
              <>
                {cart.items.map((item) => (
                  <div className="flex gap-2 items-center my-1" key={item.id}>
                    <div>
                      <Image
                        src={item.course.courseImage} // Ensure item has a valid imageUrl
                        width={350}
                        height={350}
                        alt={item.title}
                        className="w-[80px] h-[80px]"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold overflow-hidden line-clamp-2 mb-1">
                        {item.course.title}
                      </h4>
                      <p className="text-xs text-gray-500 overflow-hidden line-clamp-1 mb-1">
                        {item.course.instructor
                          ? item.course.instructor.name
                          : "No instructor"}
                      </p>
                      <p className="font-bold">{`E£${item.price}`}</p>
                    </div>
                  </div>
                ))}
                <hr className="border-b-1 border-gray-200 w-full my-3" />
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-xl">{`Total: E£${totalPrice.toFixed(
                    2
                  )}`}</h3>
                  <button className="bg-gray-900 text-white font-bold w-full p-3 hover:bg-[#3e4143] z-20">
                    Go to cart
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col text-base font-sans text-gray-500 mb-1 text-center font-semibold">
                {content}
                <Link
                  href="/"
                  className="py-3 w-full text-violet-600 text-sm font-bold hover:text-violet-900 text-center"
                >
                  {buttonContent}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPopper;
