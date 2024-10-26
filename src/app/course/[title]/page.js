import DisplayCourse from "@/app/_components/DisplayCourse/DisplayCourse";
import React from "react";

const page = ({ params }) => {
  const { title } = params;
  console.log(title);
  return (
    <div>
      <DisplayCourse slug={title} />
    </div>
  );
};

export default page;
