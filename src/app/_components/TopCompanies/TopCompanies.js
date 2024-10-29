import Image from "next/image";
import React from "react";

const TopCompanies = () => {
  return (
    <div className="border border-slate-300 p-4 mt-11 mb-9">
      <h3 className="text-slate-900	font-bold">
        Top companies offer this course to their employees
      </h3>
      <p className="text-slate-500">
        This course was selected for our collection of top-rated courses trusted
        by businesses worldwide.{" "}
        <span className="text-purple-500">Learn more</span>
      </p>
      <div className="flex space-x-2 items-center md:space-x-4 h-10">
        <Image
          width={90}
          height={60}
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
          alt="Nasdaq Logo"
          className="w-16 md:w-32"
        />
        <Image
          width={90}
          height={60}
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
          alt="Volkswagen Logo"
          className="w-8 h-10 md:w-32"
        />
        <Image
          width={90}
          height={60}
          src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
          alt="Box Logo"
          className="w-8 h-10 md:w-32"
        />
        <Image
          width={90}
          height={60}
          src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
          alt="NetApp Logo"
          className="w-16 h-10 md:w-32"
        />
        <Image
          width={90}
          height={60}
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
          alt="Eventbrite Logo"
          className="w-16 h-10 md:w-32"
        />
      </div>
    </div>
  );
};

export default TopCompanies;
