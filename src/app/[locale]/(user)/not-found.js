import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <div className="flex justify-center items-center flex-col pt-20 px-42 pb-20 text-center w-[60%] mx-auto px-4 ">
          <div>
            <Image
              alt=""
              src="https://s.udemycdn.com/error_page/error-desktop-v1.jpg"
              width={480}
              height={300}
            />
          </div>
          <div>
            <h1 className="px-24 my-auto mx-8 font-bold text-4xl leading-tight tracking-tighter max-w-3xl">
              We can&apos;t find the page you&apos;re looking for
            </h1>
          </div>
          <div>
            <p className="text-xl mt-4">
              Visit our{" "}
              <a
                href="/"
                className="underline text-[#5022c3] underline-offset-[5px]"
              >
                support page
              </a>{" "}
              for further assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
