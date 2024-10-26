"use client";
import axios from "axios";
import React, { useState } from "react";

const Price = ({ id, price }) => {
  const [priceTier, setPriceTier] = useState(price || "");
  const [priceModified, setPriceModified] = useState(false);

  const handleAddPrice = async () => {
    if (priceTier) {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${id}`,
        {
          price: priceTier,
        },
      );
      setPriceModified(false);
    }
  };

  const handlePriceChange = (event) => {
    setPriceTier(event.target.value);
    setPriceModified(true);
  };

  return (
    <>
      <div className="py-9 px-7 lg:px-12">
        <div className="my-5">
          <h2 className="font-bold text-base">Set a price for your course</h2>
          <p className="w-[90%] lg:w-[70%]">
            Please select the currency and the price tier for your course. If
            you’d like to offer your course for free, it must have a total video
            length of less than 2 hours. Also, courses with practice tests can
            not be free.
          </p>
        </div>
        {/* Add Price Form */}
        <div className="my-5">
          <div className="flex gap-8">
            <div>
              <h3 className="font-bold text-base">Currency</h3>
              <div className="relative">
                <select className="border border-black w-20 py-3 flex justify-between outline-none">
                  <option value="USD">USD</option>
                </select>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-base">Price tier</h3>
              <div className="relative">
                <select
                  className="border border-black w-40 py-3 flex justify-between outline-none"
                  value={priceTier}
                  onChange={handlePriceChange}
                >
                  <option value="">Select</option>
                  <option value="0">Free</option>
                  <option value="19.99">$19.99 (tire 1)</option>
                  <option value="22.99">$22.99 (tire 2)</option>
                  <option value="24.99">$24.99 (tire 3)</option>
                  <option value="27.99">$27.99 (tire 4)</option>
                  <option value="29.99">$29.99 (tire 5)</option>
                  <option value="34.99">$34.99 (tire 6)</option>
                  <option value="39.99">$39.99 (tire 7)</option>
                  <option value="44.99">$44.99 (tire 8)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <button
          className={`mt-2 text-white font-bold px-6 py-3 ${
            priceModified ? "bg-gray-900" : "cursor-not-allowed bg-[#969798]"
          }`}
          onClick={handleAddPrice}
          disabled={!priceTier}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Price;
