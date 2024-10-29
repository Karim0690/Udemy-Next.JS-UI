"use client"
import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area"
import { FaArrowLeft } from "react-icons/fa";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarProvider } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const CourseContentSideBar = () => {
    const [openSection, setOpenSection] = useState(true);
    return (
        <>
            <div onClick={() => setOpenSection(true)} className={`${openSection ? "hidden" : ""} group z-[6] bg-[#2D2F31] text-center  h-full flex justify-center items-center text-white w-16 hover:w-40 transition-all duration-300`}>
                <FaArrowLeft />
                <div className="hidden text-white font-bold text-lg ml-2 group-hover:block">
                    Course Content
                </div>
            </div>

            <SidebarProvider className={`${openSection ? "" : "hidden"} h-fulleeeeee `}>
                <div className="flex flex-col">


                    <div className={` bg-white h-7 w-72 pt-2  pb-11  border-t-neutral-950 border-1 px-5`}>
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
                    <SidebarMenu className="w-72">
                        <ScrollArea className="h-[500px] rounded-md border p-4">
                            {/* Repeat this block for each section */}
                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton className="flex items-center justify-between h-18 bg-[#F7F9FA] py-5 border-b-2 text-lg font-semibold text-gray-700">
                                            <span>Section 11: Course Summary</span>
                                            <span className="text-sm text-gray-500">0 / 1 | 2min</span>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub className="px-4 py-2">
                                            <SidebarMenuSubItem className="flex items-center space-x-2 py-2 text-gray-700">
                                                <input type="checkbox" className="mr-2" />
                                                <span>394. Thank You and Please Leave a Rating for the course</span>
                                                <span className="ml-auto text-xs text-gray-500">2min</span>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem className="flex items-center space-x-2 py-2 text-gray-700">
                                                <input type="checkbox" className="mr-2" />
                                                <span>394. Thank You and Please Leave a Rating for the course</span>
                                                <span className="ml-auto text-xs text-gray-500">2min</span>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>

                            {/* Add more sections as needed */}
                        </ScrollArea>
                    </SidebarMenu>

                </div>
            </SidebarProvider>

        </>
    )
}

export default CourseContentSideBar