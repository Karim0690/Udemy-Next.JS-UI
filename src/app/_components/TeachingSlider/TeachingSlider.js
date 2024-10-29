import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const TeachingSlider = () => {
  const t = useTranslations("Teaching");

  const people = [
    {
      name: "Frank Kane",
      image: "https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg",
      title: t("Ktitle"),
      description: t("KDescription"),
    },
    {
      name: "Paulo Dichone",
      image: "https://s.udemycdn.com/teaching/instructors/en/paulo-1x.jpg",
      title: t("Ptitle"),
      description: t("PDescription"),
    },
    {
      name: "Deborah Grayson Riege",
      image: "https://s.udemycdn.com/teaching/instructors/en/deborah-1x.jpg",
      title: t("Dtitle"),
      description: t("DDescription"),
    },
  ];
  return (
    <>
      <div
        className="w-full bg-[#f7f9fa] mt-[2.4rem] flex justify-center font-sans"
        style={{ direction: "ltr" }}
      >
        <Carousel className="w-[60%] p-0 relative top-[-1.6rem] lg:top-0">
          <CarouselContent className="p-0">
            {people.map((p, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="border-0 bg-transparent">
                    <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row	 items-center justify-center">
                        <Image
                          src={p.image}
                          width={400}
                          height={400}
                          alt=""
                          className="lg:w-1/2 lg:mr-6"
                        />
                        <div className="lg:w-1/2 lg:mr-[3.2rem]">
                          <p className="text-xl lg:text-2xl font-base text-[#333] ">
                            “{p.description}”
                          </p>
                          <div className="font-semibold mt-4">{p.name}</div>
                          <div className="text-[#6a6f73]">{p.title}</div>
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
    </>
  );
};

export default TeachingSlider;
