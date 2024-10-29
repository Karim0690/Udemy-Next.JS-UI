import ManagementCourse from "@/app/[locale]/(instructor)/_components/ManagementCourse/ManagementCourse";
import axios from "axios";
import React from "react";

const Page = async ({ params: { id, section } }) => {
  const path = section[0];
  // let data = {};
  // let response = await axios(`${process.env.LOCAL_API}/course/${id}`);
  // data = response.data.data.course;

  return (
    <>
      <ManagementCourse id={id} path={path} />
    </>
  );
};

export default Page;
