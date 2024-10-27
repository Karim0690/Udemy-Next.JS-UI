import React from "react";
import { IoMdInformationCircle } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const Accessibility = () => {
  return (
    <>
      <div className="py-4 px-7 lg:px-10">
        <div className="border border-gray-300 my-10 p-4 flex lg:gap-5">
          <IoMdInformationCircle className="text-4xl text-gray-800 w-full  md:w-[20%] lg:w-[10%]" />
          <div className=" px-4">
            <h2 className="font-bold">Create accessible learning content</h2>
            <p className=" mb-2">
              Accessibility provides a person with a disability access to — and
              benefits of — the same information, interactions, and services as
              a person without a disability in a way that’s sensible,
              meaningful, and usable. In short, it’s the inclusive practice of
              ensuring there are no barriers to learning for as many people as
              possible.
            </p>
            <p className=" mb-2">
              Some may think that accessibility is primarily aimed at helping
              people with physical disabilities, such as those with hearing or
              vision loss. However, making content accessible to everyone isn’t
              just the equitable thing to do, it also helps to broaden your
              reach so that more learners can benefit from your courses.
            </p>
            <p className=" mb-2">
              Learn more about{" "}
              <span className="text-[#5022c3] hover:text-[#3b198f]">
                creating accessible content
              </span>{" "}
              in Udemy’s Teaching Center.
            </p>
          </div>
        </div>
        <div >
          <h2 className="font-bold text-2xl text-gray-800">
            Accessibility checklists
          </h2>
          <p className="my-2">
            To help you create accessible course content, we’ve provided
            Instructors with recommendations and best practices to consider
            while creating new courses or updating existing content. Please
            review these accessibility recommendations and checklists to
            indicate whether your course meets the guidelines.
          </p>
          <p className="my-2">
            Note: while these accessibility guidelines are strongly recommended,
            they are not a requirement prior to publishing your course. Though
            content that does meet these accessibility guidelines may benefit
            from a greater number of learners who could take your course.
          </p>
        </div>
        <div className="my-10 text-xs">
          <div className="border-t">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Close captions accessibility checklists
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc text-base pl-5">
                    <li className="my-2">
                      All auto-generated captions should be reviewed to check
                      for accuracy. Captions must meet a 99% rate of accuracy.
                    </li>
                    <li className="my-2">
                      Any relevant sound effects pertinent to the course must be
                      noted in the captions, example: (Beeps).
                    </li>
                    <li className="my-2">
                      Any non-speech elements such as music are captured in the
                      captions, example: (Jazzy music).
                    </li>
                    <li className="my-2">
                      Verbal delivery style indicators are captured in the
                      captions, example: (Exclaims).
                    </li>
                    <li className="my-2">
                      Captions identify speakers on and off camera.
                    </li>
                  </ul>
                  <p className="text-base mt-4">
                    Learn more about providing{" "}
                    <span className="text-[#5022c3] hover:text-[#3b198f]">
                      accessible closed captions
                    </span>{" "}
                    in the Udemy Teaching Center.
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
              Captions in this course meet these guidelines
            </label>
          </div>
        </div>
        <div className="my-10">
          <div className="border-t">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Audio content accessibility checklist
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc text-base pl-5">
                    <li className="my-2">
                      Audio can stand on its own, like an audiobook.
                    </li>
                    <li className="my-2">
                      Visual content (when not just for decoration) is
                      explained.
                    </li>
                    <li className="my-2">
                      Interactions shown on screen are fully explained, without
                      skipping steps.
                    </li>
                    <li className="my-2">
                      Spoken content uses plain language, at a measured (not too
                      quick) pace.
                    </li>
                    <li className="my-2">
                      Figures of speech, idioms, jargon, or slang are avoided,
                      and unfamiliar terms or acronyms are defined.
                    </li>
                    <li className="my-2">
                      Captions for all spoken content have been reviewed for
                      accuracy - especially proper names, acronyms,
                      abbreviations, and technical terms.
                    </li>
                  </ul>
                  <p className="mt-4">
                    Learn more about{" "}
                    <span className="text-[#5022c3] hover:text-[#3b198f]">
                      accessible audio content
                    </span>{" "}
                    in the Udemy Teaching Center.
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
                  Course materials accessibility checklist
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc text-base pl-5">
                    <li className="my-2">
                      A table of contents for long documents and a glossary of
                      terms are provided.
                    </li>
                    <li className="my-2">
                      Semantic markup for headings, bulleted lists, or numbered
                      lists has been applied to all documents.
                    </li>
                    <li className="my-2">
                      Content is organized in short paragraphs and/or simple
                      tables.
                    </li>
                    <li className="my-2">
                      Links to external resources use descriptive language.
                    </li>
                    <li className="my-2">
                      Alternative text is provided for all images in documents
                      or slide presentations.
                    </li>
                    <li className="my-2">
                      Strong color contrast has been used for text and images.
                    </li>
                  </ul>
                  <p className="text-base mt-4">
                    Learn more about{" "}
                    <span className="text-[#5022c3] hover:text-[#3b198f]">
                      accessible course materials
                    </span>{" "}
                    in the Udemy Teaching Center.
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
              Materials attached to this course meet these guidelines
            </label>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-gray-800">
            Accessibility resources
          </h2>
          <div className=" text-[#5022c3]">
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              Creating accessible learning content
            </p>
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              Audio content for accessible learning
            </p>
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              Visual content for accessible learning
            </p>
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              Planning your course accessibility considerations
            </p>
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              Creating accessible resource documents
            </p>
            <p className="my-2 cursor-pointer hover:text-[#3b198f]">
              Marking your course as accessible
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessibility;
