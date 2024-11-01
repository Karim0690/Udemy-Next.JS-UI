"use client";

import axios from "axios";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Price = ({ id, price }) => {
  const t = useTranslations("Price");
  const [priceTier, setPriceTier] = useState(price || "");
  const [priceModified, setPriceModified] = useState(false);

  const handleAddPrice = async () => {
    if (priceTier) {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_LOCAL_API}/course/${id}`,
        {
          price: priceTier,
        }
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
          <h2 className="font-bold text-base">
            {" "}
            {t("set_a_price_for_your_course")}
          </h2>
          <p className="w-[90%] lg:w-[70%]">
            {t("please_select_currency_and_price_tier")}
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
              <h3 className="font-bold text-base">{t("price_tier")} </h3>
              <div className="relative">
                <select
                  className="border border-black w-40 py-3 flex justify-between outline-none"
                  value={priceTier}
                  onChange={handlePriceChange}
                >
                  <option value="">{t("select")}</option>
                  <option value="0">{t("free")}</option>
                  <option value="19.99">{t("tier1")}</option>
                  <option value="22.99">{t("tier2")}</option>
                  <option value="24.99">{t("tier3")}</option>
                  <option value="27.99">{t("tier4")}</option>
                  <option value="29.99">{t("tier5")}</option>
                  <option value="34.99">{t("tier6")}</option>
                  <option value="39.99">{t("tier7")}</option>
                  <option value="44.99">{t("tier8")}</option>
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
          {t("save")}
        </button>
      </div>
    </>
  );
};

export default Price;
