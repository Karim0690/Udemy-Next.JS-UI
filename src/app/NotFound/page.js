// import {useTranslations} from 'next-intl';
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function NotFound() {
    const t = useTranslations("notFound");

    console.log("Translations :", t);
    return ( <
        >
        <
        div className = "flex items-center justify-center " >
        <
        div className = "pt-20 px-42  pb-28 text-center w-full max-w-134 mx-auto px-4 " >
        <
        Image className = "max-w-full"
        alt = ""
        src = "https://s.udemycdn.com/error_page/error-desktop-v1.jpg"
        width = { 480 }
        height = { 300 }
        /> <
        h1 className = "   px-24 my-auto mx-8 font-bold text-4xl leading-tight tracking-tighter max-w-3xl" > { t("title") } <
        /h1> <
        p className = "text-xl" > { t("visit") } <
        a href = "/"
        className = "text-sm underline  text-blue-700" > { t("support") } <
        /a> { t("for") } <
        /p> <
        /div> <
        /div> <
        />
    );
}