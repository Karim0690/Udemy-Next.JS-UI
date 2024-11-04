import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Page = async ({ searchParams: { token } }) => {
  const { data } = await axios.post(`http://127.0.0.1:3001/paypal/cheakout`, {
    token,
  });
  if (data.data.status === "COMPLETED") {
    let { data } = await axios.get(`http://127.0.0.1:3001/cart`, {
      headers: {
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhMmQ1YTIwMWY4MDZmOTJlZWJiMjUiLCJuYW1lIjoiS2FyaW0gQWJkZWxrYXJlZW0iLCJlbWFpbCI6IkthcmltQXltYW4zNjBAZ21haWwuY29tIiwicm9sZSI6WyJzdHVkZW50IiwiaW5zdHJ1Y3RvciJdLCJpYXQiOjE3MzA0OTM4MjIsImV4cCI6MTc2MjA1MTQyMn0.m4Uc8Dy0TSbbeh5oJ072n1fxMf6kzd-_egSyEzKYXq0`,
      },
    });
    if (data.message === "success") {
      await axios.post(
        `http://127.0.0.1:3001/orders/${data.cart._id}`,
        {},
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmFhMmQ1YTIwMWY4MDZmOTJlZWJiMjUiLCJuYW1lIjoiS2FyaW0gQWJkZWxrYXJlZW0iLCJlbWFpbCI6IkthcmltQXltYW4zNjBAZ21haWwuY29tIiwicm9sZSI6WyJzdHVkZW50IiwiaW5zdHJ1Y3RvciJdLCJpYXQiOjE3MzA0OTM4MjIsImV4cCI6MTc2MjA1MTQyMn0.m4Uc8Dy0TSbbeh5oJ072n1fxMf6kzd-_egSyEzKYXq0`,
          },
        }
      );
    }
  } else {
    redirect("/");
  }

  return (
    <>
      <div className="container h-64 mx-auto">
        <div className="w-full h-36 bg-[#acd2cc] my-14">
          <div className="flex items-start gap-5 p-4">
            <IoMdCheckmarkCircle className="text-5xl" />
            <div>
              <div className="flex flex-col">
                <span className={`font-bold "text-black" text-xl`}>
                  Great Choise
                </span>
                <span className={`font-bold "text-black"`}>
                  <b>30-Day Guarantee!</b> We want you to love every course you
                  take on Udemy. if it&apos;s not right, you have 30 days to
                  return it.
                </span>
              </div>
              <Link href={"/"}>
                <button className="my-4 bg-gray-900 p-3 text-white font-bold">
                  Back to Landing Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
