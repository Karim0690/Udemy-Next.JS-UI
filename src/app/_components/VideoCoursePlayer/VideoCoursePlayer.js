"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { CldVideoPlayer } from "next-cloudinary";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { PiMonitorPlay } from "react-icons/pi";

// const CldVideoPlayer = dynamic(
//   () => import("next-cloudinary").then((m) => m.CldVideoPlayer),
//   { ssr: false }
// );

function CldVideoPlayerWrapper({ src }) {
  return (
    <CldVideoPlayer
      className="w-full h-full"
      width="1920"
      height="1080"
      src={src}
      colors={{
        accent: "#A435F0",
        base: "#000",
        text: "#FFF",
      }}
    />
  );
}
const VideoCoursePlayer = ({ sections }) => {
  const [openSection, setOpenSection] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(
    "https://res.cloudinary.com/djtjlvuvb/video/upload/v1731139637/kgvbkobqqs6sdp52pfi1.mp4"
  );
  const [selectedItemIndex, setSelectedItemIndex] = useState(null); // Track selected item

  const handleItemClick = (resource, index) => {
    console.log({ resource, index });
    setCurrentVideo(resource);
    setSelectedItemIndex(index); // Update selected item index
  };
  // console.log({ currentVideo });
  return (
    <>
      <div className="relative h-full flex">
        <CldVideoPlayerWrapper key={currentVideo} src={currentVideo} />

        <div className=" sm:hidden  lg:block ">
          {!openSection && (
            <div
              onClick={() => setOpenSection(true)}
              className={`${
                openSection ? "hidden" : ""
              } group absolute top-4 right-1 z-10 bg-[#2D2F31] text-center  h-16 flex justify-center items-center text-white w-16 hover:w-40 transition-all duration-300`}
            >
              <FaArrowLeft />
              <div className="hidden text-white font-bold text-lg ml-2 group-hover:block">
                Course Content
              </div>
            </div>
          )}

          <SidebarProvider className={`${openSection ? "" : "hidden"} h-full `}>
            <div className="flex flex-col">
              <div
                className={` bg-white h-7 w-full pt-2  pb-11  border-t-neutral-950 border-1 px-5`}
              >
                <div className="flex justify-between ">
                  <p className="font-semibold	">Course Conetent</p>
                  <HoverCard>
                    <HoverCardTrigger className="font-medium mr-2">
                      <IoIosCloseCircle onClick={() => setOpenSection(false)} />
                    </HoverCardTrigger>
                    <HoverCardContent className="text-center w-fit px-3 py-1 bg-[#2D2F31] text-white">
                      Close Panel
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              <SidebarMenu className="w-[350px]">
                <ScrollArea className="h-[500px] rounded-md border p-4">
                  {/* Repeat this block for each section */}
                  {sections.map((section, index) => (
                    <Collapsible key={index} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="flex flex-col items-start justify-between h-18 bg-[#F7F9FA] py-5 border-b-2 text-lg font-semibold text-gray-700">
                            <span>
                              Section {index + 1}: {section.title}
                            </span>
                            <div className="text-sm text-gray-500">
                              0 / {sections[0].items.length} | 2min
                            </div>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub className="px-4 py-2">
                            {section.items.map((item, itemindex) => (
                              <SidebarMenuSubItem
                                key={itemindex}
                                className={`flex items-center space-x-2 py-2 text-gray-700 ${
                                  selectedItemIndex === itemindex
                                    ? "bg-gray-200"
                                    : ""
                                } `}
                                onClick={() =>
                                  handleItemClick(item.item.resource, itemindex)
                                }
                              >
                                <div className="flex flex-col gap-1 items-start">
                                  <div>{item.item.title}</div>
                                  <div className="flex  gap-2 text-xs text-gray-500">
                                    <PiMonitorPlay />{" "}
                                    <div className="mb-3">
                                      {Math.floor(item.item.duration)} min
                                    </div>
                                  </div>
                                </div>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ))}

                  {/* Add more sections as needed */}
                </ScrollArea>
              </SidebarMenu>
            </div>
          </SidebarProvider>
        </div>
      </div>
    </>
  );
};

export default VideoCoursePlayer;
