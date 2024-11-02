import StarRating from "../RatingStars/RatingStars";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup } from "@/components/ui/radio-group";
import React from "react";

const FilterAccordion = ({ t }) => {
  return (
    <>
      <Accordion
        type="multiple"
        defaultValue={["item-1", "item-2"]}
        className="w-full font-sans"
      >
        <AccordionItem value="item-1" className="border-t border-gray-200">
          <AccordionTrigger>{t("ratings")}</AccordionTrigger>
          <AccordionContent>
            <RadioGroup className="gap-0">
              <div className="flex items-center space-x-2">
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
              <div className="flex items-center space-x-2">
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
              <div className="flex items-center space-x-2">
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
              <div className="flex items-center space-x-2">
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
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t("topics")}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="python" className="h-4 w-4" />
                <label
                  htmlFor="python"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Python</span>
                  <span className="text-sm text-gray-700 ml-1">(892)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="javascript" className="h-4 w-4" />
                <label
                  htmlFor="javascript"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">JavaScript</span>
                  <span className="text-sm text-gray-700 ml-1">(3,331)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="unity" className="h-4 w-4" />
                <label
                  htmlFor="unity"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Unity</span>
                  <span className="text-sm text-gray-700 ml-1">(3,126)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="java" className="h-4 w-4" />
                <label
                  htmlFor="java"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Java</span>
                  <span className="text-sm text-gray-700 ml-1">(4,745)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="web-development"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="web-development"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Web Development</span>
                  <span className="text-sm text-gray-700 ml-1">(2,327)</span>
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t("subcategory")}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="web-development"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="web-development"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Web Development</span>
                  <span className="text-sm text-gray-700 ml-1">(892)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="programming-language"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="programming-language"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Programming Language</span>
                  <span className="text-sm text-gray-700 ml-1">(3,331)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="data-science" className="h-4 w-4" />
                <label
                  htmlFor="data-science"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Data Science</span>
                  <span className="text-sm text-gray-700 ml-1">(3,126)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="game-development"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="game-development"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Game Development</span>
                  <span className="text-sm text-gray-700 ml-1">(4,745)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="mobile-development"
                  className="h-4 w-4"
                />
                <label
                  htmlFor="mobile-development"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Mobile Development</span>
                  <span className="text-sm text-gray-700 ml-1">(2,327)</span>
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{t("level")}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <input type="checkbox" id="beginner" className="h-4 w-4" />
                <label
                  htmlFor="beginner"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Beginner</span>
                  <span className="text-sm text-gray-700 ml-1">(892)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="all-levels" className="h-4 w-4" />
                <label
                  htmlFor="all-levels"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">All Levels</span>
                  <span className="text-sm text-gray-700 ml-1">(3,331)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="intermediate" className="h-4 w-4" />
                <label
                  htmlFor="intermediate"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Intermediate</span>
                  <span className="text-sm text-gray-700 ml-1">(3,126)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="Expert" className="h-4 w-4" />
                <label
                  htmlFor="Expert"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">6-17 Hour</span>
                  <span className="text-sm text-gray-700 ml-1">(4,745)</span>
                </label>
              </div>
            </div>
          </AccordionContent>
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
                  <span className="text-sm text-gray-700 ml-1">(892)</span>
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input type="checkbox" id="free" className="h-4 w-4" />
                <label
                  htmlFor="free"
                  className="text-sm font-medium leading-none ml-2 cursor-pointer"
                >
                  <span className="font-normal">Free</span>
                  <span className="text-sm text-gray-700 ml-1">(3,331)</span>
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
