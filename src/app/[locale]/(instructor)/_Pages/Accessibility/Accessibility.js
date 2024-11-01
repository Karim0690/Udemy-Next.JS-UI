import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useTranslations } from "next-intl";
import React from "react";
import { IoMdInformationCircle } from "react-icons/io";

const Accessibility = () => {
  const t = useTranslations("Accessibility");
  return (
    <>
      <div className="py-4 px-7 lg:px-10">
        <div className="border border-gray-300 my-10 p-4 flex lg:gap-5">
          <IoMdInformationCircle className="text-4xl text-gray-800 w-full  md:w-[20%] lg:w-[10%]" />
          <div className=" px-4">
            <h2 className="font-bold">
              {t("create_accessible_learning_content")}
            </h2>
            <p className="mb-2">{t("accessibility_description")}</p>
            <p className="mb-2">{t("broaden_reach")}</p>
            <p className=" mb-2">
              {t("learn_more")}
              <span className="text-[#5022c3] hover:text-[#3b198f]">
                {t("creating_accessible")}
              </span>{" "}
              {t("teaching_center")}
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-gray-800">
            {t("accessibility_checklists")}
          </h2>
          <p className="my-2">{t("checklist_description")}</p>
          <p className="my-2">{t("guidelines_note")}</p>
        </div>
        <div className="my-10 text-xs">
          <div className="border-t">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  {t("close_captions_accessibility_checklists")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc text-base pl-5">
                    <li className="my-2">{t("caption_accuracy")}</li>
                    <li className="my-2">{t("sound_effects")}</li>
                    <li className="my-2">{t("non_speech_elements")}</li>
                    <li className="my-2">{t("verbal_delivery_indicators")}</li>
                    <li className="my-2">{t("identify_speakers")}</li>
                  </ul>
                  <p className="text-base mt-4">
                    {t("learnMoreAboutProviding")}
                    <span className="text-[#5022c3] hover:text-[#3b198f]">
                      {t("accessibleClosedCaptions")}
                    </span>{" "}
                    {t("udemyTeachingCenter")}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex items-center space-x-2 my-10">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("captionsGuidelines")}
            </label>
          </div>
        </div>
        <div className="my-10">
          <div className="border-t">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  {t("audioContentChecklist")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc text-base pl-5">
                    <li className="my-2">{t("audioCanStandAlone")}</li>
                    <li className="my-2">{t("visualContentExplained")}</li>
                    <li className="my-2">{t("interactionsExplained")}</li>
                    <li className="my-2">{t("spokenContentPlainLanguage")}</li>
                    <li className="my-2">{t("avoidFiguresOfSpeech")}</li>
                    <li className="my-2">{t("captionsReviewedForAccuracy")}</li>
                  </ul>
                  <p className="mt-4">
                    {t("learn_more")}
                    <span className="text-[#5022c3] hover:text-[#3b198f]">
                      {t("accessibleAudioContent")}
                    </span>{" "}
                    {t("teaching_center")}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex items-center space-x-2 my-10">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Audio content in this course meet these guidelines
            </label>
          </div>
        </div>
        <div className="my-10">
          <div className="border-t">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  {t("courseMaterialsAccessibilityChecklist")}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc text-base pl-5">
                    <li className="my-2">{t("tableOfContentsProvided")}</li>
                    <li className="my-2">{t("semanticMarkupApplied")}</li>
                    <li className="my-2">
                      {t("contentOrganizedShortParagraphs")}
                    </li>
                    <li className="my-2">{t("descriptiveLinks")}</li>
                    <li className="my-2">{t("alternativeTextProvided")}</li>
                    <li className="my-2">{t("strongColorContrast")}</li>
                  </ul>
                  <p className="text-base mt-4">
                    {t("learn_more")}
                    <span className="text-[#5022c3] hover:text-[#3b198f]">
                      {t("accessibleCourseMaterials")}
                    </span>{" "}
                    {t("teaching_center")}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex items-center space-x-2 my-10">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t("materialsMeetGuidelines")}
            </label>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-gray-800">
            {t("accessibilityResources")}
          </h2>
          <div className=" text-[#5022c3]">
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              {t("creatingAccessibleLearningContent")}
            </p>
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              {t("audioContentForAccessibleLearning")}
            </p>
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              {t("visualContentForAccessibleLearning")}
            </p>
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              {t("planningCourseAccessibility")}
            </p>
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              {t("creatingAccessibleResourceDocs")}
            </p>
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              {t("markingCourseAsAccessible")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessibility;
