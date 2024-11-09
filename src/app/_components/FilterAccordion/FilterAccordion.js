"use client";

import StarRating from "../RatingStars/RatingStars";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup } from "@/components/ui/radio-group";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";

const FilterAccordion = ({
  rating,
  setRating,
  topics,
  setTopics,
  subcategory,
  setSubcategory,
  level,
  setLevel,
  price,
  setPrice,
  category,
}) => {
  const t = useTranslations("Categories");
  const { locale } = useParams();
  const handleSubcategoryChange = (subcategoryId) => {
    setSubcategory(subcategoryId);
  };
  const handleTopicChange = (topicId) => {
    setTopics(topicId);
  };
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <>
      <Accordion
        type="multiple"
        defaultValue={["item-1", "item-2"]}
        className="w-full font-sans"
      >
        {/* <AccordionItem value="item-1" className="border-t border-gray-200">
          <AccordionTrigger>{t("ratings")}</AccordionTrigger>
          <AccordionContent>
            <RadioGroup className="gap-0">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="rating-4.5"
                  name="rating"
                  value="4.5"
                  className="h-4 w-4 bg-black border-black text-black border-2"
                />
                <label htmlFor="rating-4.5" className="flex items-center">
                  <StarRating rating={4.5} />
                  <span>4.5 & up</span>
                  <span className="text-xs text-gray-700 ml-1">(10,000)</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="rating-4"
                  name="rating"
                  value="4"
                  className="h-4 w-4 bg-black border-black text-black border-2"
                />
                <label htmlFor="rating-4" className="flex items-center">
                  <StarRating rating={4} />
                  <span>4.5 & up</span>
                  <span className="text-xs text-gray-700 ml-1">(10,000)</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="rating-3.5"
                  name="rating"
                  value="3.5"
                  className="h-4 w-4 bg-black border-black text-black border-2"
                />
                <label htmlFor="rating-3.5" className="flex items-center">
                  <StarRating rating={3.5} />
                  3.5 & up
                  <span className="text-xs text-gray-700 ml-1">(10,000)</span>
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="rating-3"
                  name="rating"
                  value="3"
                  className="h-4 w-4 bg-black border-black text-black border-2"
                />
                <label htmlFor="rating-3" className="flex items-center">
                  <StarRating rating={3} />
                  3.0 & up
                  <span className="text-sm text-gray-700 ml-1">(10,000)</span>
                </label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem> */}
        <AccordionItem value="item-2">
          <AccordionTrigger>{t("topics")}</AccordionTrigger>
          <AccordionContent>
            {category?.subcategories.map((subcategory) => {
              return (
                <div key={subcategory._id}>
                  {subcategory.topics.map((topic) => {
                    return (
                      <div key={topic._id} className="flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <input
                            type="radio"
                            id={`topic-${topic._id}`}
                            name={`subcategory-${subcategory._id}`}
                            className="h-4 w-4"
                            checked={topics.includes(topic._id)}
                            onChange={() => handleTopicChange(topic._id)}
                          />
                          <label
                            htmlFor={`topic-${topic._id}`}
                            className="text-sm font-medium leading-none ml-2 cursor-pointer"
                          >
                            <span className="font-normal">
                              {locale === "en"
                                ? topic.name
                                : topic.nameAr || topic.name}
                            </span>
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </AccordionContent>
          {topics && (
            <button
              className="text-violet-700 underline underline-offset-2 hover:text-violet-900 text-sm mb-3"
              onClick={() => {
                setTopics("");
              }}
            >
              Clear Topics Filter
            </button>
          )}
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t("subcategory")}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              {category?.subcategories?.map((subcategoryItem) => (
                <div
                  className="flex items-center gap-2 mb-2"
                  key={subcategoryItem._id}
                >
                  <input
                    type="radio"
                    id={`subcategory-${subcategoryItem._id}`}
                    name="subcategory"
                    className="h-4 w-4"
                    checked={subcategory === subcategoryItem._id}
                    onChange={() =>
                      handleSubcategoryChange(subcategoryItem._id)
                    }
                  />
                  <label
                    htmlFor={`subcategory-${subcategoryItem._id}`}
                    className="text-sm font-medium leading-none ml-2 cursor-pointer"
                  >
                    <span className="font-normal">
                      {locale === "en"
                        ? subcategoryItem.name
                        : subcategoryItem.nameAr}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
          {subcategory && (
            <button
              className="text-violet-700 underline underline-offset-2 hover:text-violet-900 text-sm mb-3"
              onClick={() => {
                setSubcategory("");
              }}
            >
              Clear subcategory Filter
            </button>
          )}
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{t("level")}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              {/* Beginner Level Radio */}
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  id="beginner"
                  name="level"
                  value="Beginner Level"
                  className="h-4 w-4"
                  checked={level === "Beginner Level"}
                  onChange={handleLevelChange}
                />
                <label
                  htmlFor="beginner"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Beginner</span>
                </label>
              </div>

              {/* All Levels Radio */}
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  id="all-levels"
                  name="level"
                  value="All Levels"
                  className="h-4 w-4"
                  checked={level === "All Levels"}
                  onChange={handleLevelChange}
                />
                <label
                  htmlFor="all-levels"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">All Levels</span>
                </label>
              </div>

              {/* Intermediate Level Radio */}
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  id="intermediate"
                  name="level"
                  value="Intermediate Level"
                  className="h-4 w-4"
                  checked={level === "Intermediate Level"}
                  onChange={handleLevelChange}
                />
                <label
                  htmlFor="intermediate"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Intermediate</span>
                </label>
              </div>
            </div>
          </AccordionContent>
          {level && (
            <button
              className="text-violet-700 underline underline-offset-2 hover:text-violet-900 text-sm mb-3"
              onClick={() => {
                setLevel("");
              }}
            >
              Clear Level Filter
            </button>
          )}
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>{t("price")}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="paid" className="h-4 w-4" />
                <label
                  htmlFor="paid"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Paid</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="free" className="h-4 w-4" />
                <label
                  htmlFor="free"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Free</span>
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FilterAccordion;
