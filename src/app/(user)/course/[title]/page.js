import DisplayCourse from "@/app/_components/DisplayCourse/DisplayCourse";
import React from "react";

const page = ({ params }) => {
  const { title } = params;
  return (
    <>
      <DisplayCourse slug={title} />
    </>
  );
};

export default page;
