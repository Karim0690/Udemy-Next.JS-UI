/* eslint-disable react-hooks/rules-of-hooks */
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import axios from "axios";
import { getServerSession } from "next-auth";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Page = async ({ searchParams: { token } }) => {
  const t = useTranslations("succesCart");
  const session = await getServerSession(authOptions);

  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_LOCAL_API}/paypal/cheakout`,
    {
      token,
    }
  );
  if (data.data.status === "COMPLETED") {
    let { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/cart`,
      {
        headers: {
          Authorization: session.accessToken,
        },
      }
    );
    if (data.message === "success") {
      console.log(data);

      await axios.post(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/orders/${data.cart._id}`,
        {},
        {
          headers: {
            Authorization: session.accessToken,
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
                  {t("greatChoice")}
                </span>
                <span className={`font-bold "text-black"`}>
                  <b> {t("thirtyDayGuarantee")}</b> {t("thirtyDayReturnPolicy")}
                </span>
              </div>
              <Link href={"/"}>
                <button className="my-4 bg-gray-900 p-3 text-white font-bold">
                  {t("backToLandingPage")}
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
