import ApplyCoupon from "./ApplyCoupon";
import Cheakout from "./Cheakout";
import RemoveButton from "./RemoveButton";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const CartItems = ({ data }) => {
  const t = useTranslations("CartItems");
  let items = data.items;

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 order-2 md:order-1 p-6 md:p-0">
          <p className="font-bold mb-2 flex-1">
            {items.length > 0 ? items.length : 0} {t("coursesInCart")}
          </p>
          <div className="py-2">
            {items.map((item) => (
              <div
                key={item._id}
                className="border-t py-4 flex items-start gap-5 mb-4"
              >
                <Image
                  src={item.course.courseImage}
                  width={200}
                  height={200}
                  alt={item.course.title}
                  className="w-[50px] h-[50px] lg:w-[110px] lg:h-[70px]"
                />
                <div className="flex-1 flex flex-col md:flex-row justify-between items-start">
                  <div>
                    <h1 className="font-bold text">{item.course.title}</h1>
                    <p className="text-gray-600 text-xs">
                      {item.course.instructor
                        ? item.course.instructor.name
                        : "No Instructor"}
                    </p>
                  </div>
                  <RemoveButton id={item._id} />
                </div>

                <div className="w-20">
                  <p className="font-bold text-violet-600">{`E£${item.price}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 order-1 md:oreder-2 ">
          <div className="flex flex-row md:flex-col items-center md:items-start gap-2 px-6 md:px-0">
            <h1 className="font-bold text-sm md:text-lg text-gray-500">
              {t("total")}
            </h1>
            <h1 className="font-bold text-lg md:text-4xl">
              E£
              {data.totalPriceAfterDiscount > 0
                ? data.totalPriceAfterDiscount.toFixed(2)
                : data.totalPrice.toFixed(2)}
            </h1>
          </div>
          <p className="text-gray-500 text-sm line-through px-6 md:px-0">
            {data.totalPriceAfterDiscount.toFixed(2) > 0 &&
              `E£${data.totalPrice.toFixed(2)}`}
          </p>
          <p className="px-6 md:px-0">
            {data.discount > 0 && `${data.discount}% off`}
          </p>
          <Cheakout />
          <hr />
          <p className="py-3 text-sm text-black font-bold px-6 md:px-0">
            Promotions
          </p>
          <div className="w-full px-6 md:px-0">
            <ApplyCoupon discount={data.discount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
