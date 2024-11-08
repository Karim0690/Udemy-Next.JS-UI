import DisplayCourse from "@/app/_components/DisplayCourse/DisplayCourse";
import React from "react";

const page = ({ params }) => {
  const { title,locale } = params;
  return (
    <>
      <DisplayCourse slug={title} locale={locale} />
    </>
  );
};

export default page;
