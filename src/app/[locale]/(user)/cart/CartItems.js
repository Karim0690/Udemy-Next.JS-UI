import ApplyCoupon from "./ApplyCoupon";
import Cheakout from "./Cheakout";
import RemoveButton from "./RemoveButton";
import Image from "next/image";
import React from "react";

const CartItems = ({ data }) => {
  let items = data.items;

  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <p className="font-bold mb-2 flex-1">
          {items.length > 0 ? items.length : 0} Courses in Cart
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
                className="w-[110px] h-[70px]"
              />
              <div className="flex-1 flex justify-between items-start">
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
      <div className="w-1/4">
        <h1 className="font-bold text-lg text-gray-500">Total:</h1>
        <h1 className="font-bold text-4xl">
          E£
          {data.totalPriceAfterDiscount > 0
            ? data.totalPriceAfterDiscount.toFixed(2)
            : data.totalPrice.toFixed(2)}
        </h1>
        <p className="text-gray-500 text-sm line-through">
          {data.totalPriceAfterDiscount.toFixed(2) > 0 &&
            `E£${data.totalPrice.toFixed(2)}`}
        </p>
        <p>{data.discount > 0 && `${data.discount}% off`}</p>
        <Cheakout />
        <hr />
        <p className="py-3 text-sm text-black font-bold">Promotions</p>
        <div className="flex w-full">
          <ApplyCoupon discount={data.discount} />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
