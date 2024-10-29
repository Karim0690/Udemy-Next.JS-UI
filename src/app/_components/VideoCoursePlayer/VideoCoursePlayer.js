"use client";
// import { CldVideoPlayer } from 'next-cloudinary';
import React from "react";
import dynamic from "next/dynamic";
const CldVideoPlayer = dynamic(
  () => import("next-cloudinary").then((m) => m.CldVideoPlayer),
  { ssr: false },
);
const VideoCoursePlayer = () => {
  return (
    <>
      <CldVideoPlayer
        width="1920"
        height="1080"
        src="https://res.cloudinary.com/djtjlvuvb/video/upload/v1729369464/cbx06ulgjz9vadhd90md.mp4"
        colors={{
          accent: "#A435F0",
          base: "#000",
          text: "#FFF",
        }}
      />
    </>
  );
};

export default VideoCoursePlayer;
