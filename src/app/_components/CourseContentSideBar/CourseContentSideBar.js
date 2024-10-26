"use client"
import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { ScrollArea } from "@/components/ui/scroll-area"

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
            <SidebarProvider className={`${openSection?"" :"hidden"} `}>
                <div className="flex flex-col">


                <div className={` bg-white h-7 w-72 pt-2  pb-11  border-t-neutral-950 border-1 px-5`}>
                        <div className="flex justify-between ">
                            <p className="font-semibold	">Course Conetent</p>
                            <HoverCard>
                                <HoverCardTrigger className="font-medium mr-2">
                                   
                                    <IoIosCloseCircle onClick={()=>setOpenSection(false)}/>
                                
                                </HoverCardTrigger>
                                <HoverCardContent className="text-center w-fit px-3 py-1 bg-[#2D2F31] text-white">
                                    Close Panel
                                </HoverCardContent>
                            </HoverCard>


                        </div>
                    </div>
                    <SidebarMenu className="w-72">
                        <ScrollArea className="h-[500]  rounded-md border p-4">

                            <Collapsible defaultOpen className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton >click here</SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem >item 1 </SidebarMenuSubItem>
                                            <SidebarMenuSubItem >item 2 </SidebarMenuSubItem>
                                            <SidebarMenuSubItem >item 3 </SidebarMenuSubItem>
                                            <SidebarMenuSubItem >item 4 </SidebarMenuSubItem>
                                            <SidebarMenuSubItem >item 5 </SidebarMenuSubItem>
                                            <SidebarMenuSubItem >item 6 </SidebarMenuSubItem>
                                            <SidebarMenuSubItem >item 7 </SidebarMenuSubItem>
                                            <SidebarMenuSubItem >item 8 </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>

                        </ScrollArea>

                    </SidebarMenu>
                </div>
            </SidebarProvider>
            <div className="z-[1] bg-[#2D2F31]">

            </div>
        </>
    )
}

export default CourseContentSideBar