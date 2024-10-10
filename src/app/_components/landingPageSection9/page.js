import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';



const LandingPageSection9 = () => {
  const people = [
    {
      name: "Jim Hemgen",
      job: "Principal",
      image: "https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg",
      title: "Booz Allen Hamilton",
      textBold: " data scientists, with highly relevant and in-demand tech skills ",
      text1:
        "Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its",
      text2: "that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.",
    },
    {
      name: "Ian Stevens",
      job: "Global Head of Capability Development North America",
      image: "https://s.udemycdn.com/home/ub-case-studies/Ian_Stevens.png",
      title: "Publicis Sapient",
      text1: "With Udemy Business",
      textBold: " employees were able to marry the two together, technology and consultant soft skills. ",
      text2: "We're thankful that once they got in and took their key IT courses on AWS, Azure, Google Cloud, Big Data, and DevOps that they efficiently moved over to Consulting courses to help drive their career forward."
    },
    {
      name: "Ismaeel Ameen",
      job: "Head of Data Engineering Development and Data Management",
      image: "https://s.udemycdn.com/home/ub-case-studies/Ismaeel_Ameen.png",
      title: "Robert Walters",
      text1: "To stay at the leading edge of IT innovation, your team needs to regularly reinvent its skillset. With Udemy Business, I can give my team the space to learn and take the initiative. It means we can",
      textBold: " produce higher quality work more quickly. ",
      text2: "",
    },
    {
      name: "Karen Hunter",
      job: "America's Team Lead Learning & Development",
      image: "https://s.udemycdn.com/home/ub-case-studies/Karen_hunter.png",
      title: "Steelcase",
      text1: "Udemy has been a great platform to stay competitive in the digital transformation of the workplace by offering",
      textBold: " fresh, relevant, personalized on-demand learning content ",
      text2: "powered by a dynamic content marketplace.",
    },
  ];
  return (
    <>
      <div className="w-full bg-[#f7f9fa] mt-[2.4rem] flex justify-center font-sans">
        <Carousel className="w-[60%] p-0 relative top-[-1.6rem] lg:top-0">
          <CarouselContent className="p-0">
            {people.map((p, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="border-0 bg-transparent">
                    <CardContent className="p-0">
                      <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="grid grid-cols-2 w-full border border-gray-300 bg-white my-10" >
                          <div className="p-6">
                            <Image src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" width="18" height="16" alt="new" className="my-2 " ></Image>
                            <span>{p.text1}<span className="font-bold">{p.textBold}</span>{p.text2}</span>
                            <h1 className="font-bold mt-20 underline" ><Link href="/" className="text-[#5022c3]" >Read full story</Link></h1>
                          </div>
                          <div className="m-auto text-center">
                            <Image
                              src={p.image}
                              width={400}
                              height={400}
                              alt=""
                              className="w-32 h-32 mx-auto rounded-full"
                            />
                            <h1 className="text-xl font-bold mt-6 ">{p.name}</h1>
                            <h1 className="text-gray-500 px-20">{p.job}</h1>
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
      <div className="flex justify-center bg-[#f7f9fa] " >
        <h1 className="text-[#5022c3] font-bold text-center" ><Link href="/" >View more customer stories</Link></h1>
        <FontAwesomeIcon icon={faAngleRight} className="text-[#5022c3] w-3 mt-1 ml-2" />
      </div>
    </>
  );
};

export default LandingPageSection9;
