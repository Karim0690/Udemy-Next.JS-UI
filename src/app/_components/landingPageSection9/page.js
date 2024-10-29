"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const LandingPageSection9 = () => {
  const { locale } = useParams();
  const t = useTranslations("LandingPage");

  const people = [
    {
      name: "Jim Hemgen",
      job: t("job1"),
      image: "https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg",
      title: "Booz Allen Hamilton",
      textBold: t("textBold1"),
      text: t("text1"),
      textT: t("textT1"),
    },
    {
      name: "Ian Stevens",
      job: t("job2"),
      image: "https://s.udemycdn.com/home/ub-case-studies/Ian_Stevens.png",
      title: "Publicis Sapient",
      text: t("text2"),
      textBold: t("textBold2"),
      textT: t("textT2"),
    },
    {
      name: "Ismaeel Ameen",
      job: t("job3"),
      image: "https://s.udemycdn.com/home/ub-case-studies/Ismaeel_Ameen.png",
      title: "Robert Walters",
      text: t("text3"),
      textBold: t("textBold3"),
      textT: "",
    },
    {
      name: "Karen Hunter",
      job: t("job4"),
      image: "https://s.udemycdn.com/home/ub-case-studies/Karen_hunter.png",
      title: "Steelcase",
      textBold: t("textBold4"),
      text: t("text4"),
      textT: t("textT4"),
    },
  ];

  return (
    <>
      <div
        className="w-full bg-[#f7f9fa] mt-[2.4rem] flex justify-center font-sans"
        style={{ direction: "ltr" }}
      >
        <Carousel className="w-[90%] md:w-[80%] lg:w-[60%] p-0 relative top-[-1.6rem] lg:top-0">
          <CarouselContent className="p-0">
            {people.map((p, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="border-0 bg-transparent">
                    <CardContent
                      className="p-0"
                      style={{ direction: locale === "ar" ? "rtl" : "ltr" }}
                    >
                      <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="flex flex-col md:flex-row w-full border border-gray-300 bg-white my-10">
                          <div className="p-6 flex-1">
                            <Image
                              src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                              width="18"
                              height="16"
                              alt="new"
                              className="my-2 "
                            ></Image>
                            <span>
                              {p.text}
                              <span className="font-bold">{p.textBold}</span>
                              {p.textT}
                            </span>
                            <h1 className="font-bold mt-20 underline">
                              <Link href="/" className="text-[#5022c3]">
                                {t("story")}
                              </Link>
                            </h1>
                          </div>
                          <div className="flex-1 m-auto text-center">
                            <Image
                              src={p.image}
                              width={400}
                              height={400}
                              alt=""
                              className="w-32 h-32 mx-auto rounded-full"
                            />
                            <h1 className="text-xl font-bold mt-6 ">
                              {p.name}
                            </h1>
                            <h1 className="text-gray-500 px-10">{p.job}</h1>
                            <h1 className="mt-6 mb-6 ">{p.title}</h1>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-[#2d2f31] text-white hover:text-white hover:bg-gray-700 absolute top-[12rem] left-[-1.7rem] border-[#6a6f73]" />
          <CarouselNext className="hidden md:flex bg-[#2d2f31] text-white hover:text-white hover:bg-gray-700 absolute top-[12rem] right-[-1.7rem] border-[#6a6f73]" />
        </Carousel>
      </div>
      <div className="flex justify-center bg-[#f7f9fa] ">
        <h1 className="text-[#5022c3] font-bold text-center">
          <Link href="/">{t("customer")}</Link>
        </h1>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-[#5022c3] w-3 mt-1 ml-2"
        />
      </div>
    </>
  );
};

export default LandingPageSection9;
