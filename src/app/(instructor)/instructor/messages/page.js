import Link from "next/link";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
    return ( <
        >
        <
        div className = "m-20" >
        <
        h1 className = "text-3xl font-bold" > Messages < /h1> <
        div class = "relative max-w-sm flex w-full flex-col mt-4" >
        <
        nav class = "flex min-w-[240px] flex-row gap-1 p-2 justify-between" >
        <
        div role = "button"
        class = "flex w-full items-center rounded-lg p-0 transition-all" >
        <
        label
        for = "check-vertical-list-group4"
        class = "flex w-full cursor-pointer items-center px-3 py-2" >
        <
        div class = "inline-flex items-center" >
        <
        label class = "flex items-center cursor-pointer relative"
        for = "check-vertical-list-group4" >
        <
        input type = "checkbox"
        class = "peer h-5 w-5 cursor-pointer transition-all appearance-none shadow hover:shadow-md border-2 border-black checked:bg-slate-800 checked:border-slate-800"
        id = "check-vertical-list-group4" /
        >
        <
        span class = "absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        class = "h-3.5 w-3.5"
        viewBox = "0 0 20 20"
        fill = "currentColor"
        stroke = "currentColor"
        stroke - width = "1" >
        <
        path fill - rule = "evenodd"
        d = "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip - rule = "evenodd" >
        < /path> <
        /svg> <
        /span> <
        /label> <
        label class = "cursor-pointer ml-2 text-slate-600 text-sm"
        for = "check-vertical-list-group4" >
        Unread <
        /label> <
        /div> <
        /label> <
        /div> <
        div role = "button"
        class = "flex w-full items-center rounded-lg p-0 transition-all" >
        <
        label
        for = "check-vertical-list-group5"
        class = "flex w-full cursor-pointer items-center px-3 py-2" >
        <
        div class = "inline-flex items-center" >
        <
        label class = "flex items-center cursor-pointer relative"
        for = "check-vertical-list-group5" >
        <
        input type = "checkbox"
        class = "peer h-5 w-5 cursor-pointer transition-all appearance-none shadow hover:shadow-md border-2 border-black checked:bg-slate-800 checked:border-slate-800"
        id = "check-vertical-list-group5" /
        >
        <
        span class = "absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        class = "h-3.5 w-3.5"
        viewBox = "0 0 20 20"
        fill = "currentColor"
        stroke = "currentColor"
        stroke - width = "1" >
        <
        path fill - rule = "evenodd"
        d = "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip - rule = "evenodd" >
        < /path> <
        /svg> <
        /span> <
        /label> <
        label class = "cursor-pointer ml-2 text-slate-600 text-sm"
        for = "check-vertical-list-group5" >
        Important <
        /label> <
        /div> <
        /label> <
        /div> <
        div role = "button"
        class = "flex w-full items-center rounded-lg p-0 transition-all" >
        <
        label
        for = "check-vertical-list-group6"
        class = "flex w-full cursor-pointer items-center px-3 py-2" >
        <
        div class = "inline-flex items-center" >
        <
        label class = "flex items-center cursor-pointer relative"
        for = "check-vertical-list-group6" >
        <
        input type = "checkbox"
        class = "peer h-5 w-5 cursor-pointer transition-all appearance-none shadow hover:shadow-md border-2 border-black checked:bg-slate-800 checked:border-slate-800"
        id = "check-vertical-list-group6" /
        >
        <
        span class = "absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        class = "h-3.5 w-3.5"
        viewBox = "0 0 20 20"
        fill = "currentColor"
        stroke = "currentColor"
        stroke - width = "1" >
        <
        path fill - rule = "evenodd"
        d = "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip - rule = "evenodd" >
        < /path> <
        /svg> <
        /span> <
        /label> <
        label class = "cursor-pointer ml-2 text-slate-600 text-sm"
        for = "check-vertical-list-group6" >
        Not answared <
        /label> <
        /div> <
        /label> <
        /div> <
        div role = "button"
        class = "flex w-full items-center rounded-lg p-0 transition-all" >
        <
        label
        for = "check-vertical-list-group7"
        class = "flex w-full cursor-pointer items-center px-3 py-2" >
        <
        div class = "inline-flex items-center" >
        <
        label class = "flex items-center cursor-pointer relative"
        for = "check-vertical-list-group7" >
        <
        input type = "checkbox"
        class = "peer h-5 w-5 cursor-pointer transition-all appearance-none shadow hover:shadow-md border-2 border-black checked:bg-slate-800 checked:border-slate-800"
        id = "check-vertical-list-group7" /
        >
        <
        span class = "absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        class = "h-3.5 w-3.5"
        viewBox = "0 0 20 20"
        fill = "currentColor"
        stroke = "currentColor"
        stroke - width = "1" >
        <
        path fill - rule = "evenodd"
        d = "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip - rule = "evenodd" >
        < /path> <
        /svg> <
        /span> <
        /label> <
        label class = "cursor-pointer ml-2 text-slate-600 text-sm"
        for = "check-vertical-list-group7" >
        Show automated messages <
        /label> <
        /div> <
        /label> <
        /div> <
        DropdownMenu >
        <
        DropdownMenuTrigger className = "font-bold" >
        sort by: Newset first < IoIosArrowDown / >
        <
        /DropdownMenuTrigger>

        <
        DropdownMenuContent >
        <
        DropdownMenuLabel > All courses < /DropdownMenuLabel> <
        div className = "border-b-2 border-slate-200" > < /div> <
        DropdownMenuSeparator / >
        <
        DropdownMenuItem > Newset first < /DropdownMenuItem> <
        DropdownMenuItem > Oldest first < /DropdownMenuItem> <
        /DropdownMenuContent> <
        /DropdownMenu>

        <
        div className = "flex items-center space-x-2 ml-96" >
        <
        Button className = "text-black bg-white hover:bg-gray-200 border  border-black w-20 h-14 font-bold text-lg mt-6 p-6" >
        Compose <
        /Button> <
        /div> <
        /nav> <
        /div> <
        div className = "grid grid-cols-2 border border-gray-300" >
        <
        div className = " border border-gray-300 w-1/2 basis-1/4" >
        <
        div class = "flex px-4 py-3  border border-gray-300 overflow-hidden max-w-md mx-auto font-[sans-serif]" >
        <
        input type = "email"
        placeholder = "Search by keyword,sender name"
        class = "w-full outline-none bg-transparent text-gray-800 text-sm" /
        >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 192.904 192.904"
        width = "16px"
        class = "fill-violet-900 border border-gray-300 " >
        <
        path d = "m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" > < /path> <
        /svg> <
        /div> <
        div className = "pt-20 px-42  pb-28 text-center w-full max-w-134 mx-auto px-4 " >
        <
        Image className = "max-w-full"
        alt = ""
        src = "https://s.udemycdn.com/communication/empty-search.jpg"
        width = { 240 }
        height = { 180 }
        /> <
        h1 className = "  mb-4 px-24 my-auto mx-8 font-bold text-4xl leading-tight tracking-tighter max-w-3xl " >
        NO result <
        /h1> <
        p className = "text-xl text-gray-500" > Try different or Search < /p> <
        /div> <
        /div> <
        div className = "" > Hi < /div> <
        /div> <
        /div> <
        />
    );
}