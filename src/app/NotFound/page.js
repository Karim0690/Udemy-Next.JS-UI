import Image from "next/image";
import React from "react";
export default function NotFound() {
    return ( <
        >
        <
        div className="flex items-center justify-center " >
            <
        div className="pt-20 px-42  pb-28 text-center w-full max-w-134 mx-auto px-4 "  >
                <
                    Image className="max-w-full"
                    alt=""
                    src="https://s.udemycdn.com/error_page/error-desktop-v1.jpg"
                    width={480}
                    height={300}
                /> <
        h1 className="   px-24 my-auto mx-8 font-bold text-4xl leading-tight tracking-tighter max-w-3xl" >
                    We can’ t find the page you’ re looking
                    for <
        /h1> <
        p className="text-xl" >
                        Visit our <
        a href="/"
                            className="text-sm underline  text-blue-700" >
                            support page <
        /a>
                            for further assistance. <
        /p> <
        /div> <
        /div> <
        />
                            );
}