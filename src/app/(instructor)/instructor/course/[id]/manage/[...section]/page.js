import ManagementCourse from "@/app/(instructor)/_components/ManagementCourse/ManagementCourse";
import React from "react";
import axios from "axios";

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
