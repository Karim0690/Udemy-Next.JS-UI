import Image from "next/image";
import React from "react";

const SetupnTest = () => {
  return (
    <>
      <div className="bg-[#f7f9fa] py-4 p-6 lg:pr-6 lg:pl-12 flex flex-col lg:flex-row lg:items-center">
        <div className="flex-[8]">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            Arrange your ideal studio and get early feedback
          </h2>
          <p className="text-gray-800 text-lg mt-6">
            It&apos;s important to get your audio and video set up correctly
            now, because it&apos;s much more difficult to fix your videos after
            you&apos;ve recorded. There are many creative ways to use what you
            have to create professional looking video.
          </p>
        </div>
        <div className="text-center md:flex md:justify-between mt-8 lg:block lg:flex-[4] items-center shadow p-4 lg:ml-6 lg:text-center bg-white">
          <Image
            src="https://s.udemycdn.com/instructor/manage/video-help.jpg"
            width={120}
            height={90}
            alt=""
            className="mx-auto mb-4 md:hidden lg:block w-[120px]"
          />
          <div>
            <h2 className="text-lg font-bold text-[#1a1d23]">
              Free expert video help
            </h2>
            <p className="text-base text-gray-800 mt-2">
              Get personalized advice on your audio and video
            </p>
          </div>
          <div className="my-4">
            <button className="text-base p-3 border border-black font-bold hover:bg-gray-300">
              Create a test video
            </button>
          </div>
        </div>
      </div>
      <div className="p-7 lg:p-14 max-w-[57rem]">
        <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
          Tips
        </h2>
        <div>
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            Equipment can be easy.
          </h3>
          <p className="text-base text-gray-800">
            You don’t need to buy fancy equipment. Most smartphone cameras can
            capture video in HD, and you can record audio on another phone or
            external microphone.
          </p>
          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            Students need to hear you.
          </h3>
          <p className="text-base text-gray-800">
            A good microphone is the most important piece of equipment you will
            choose. There are lot of affordable options.. Make sure it’s
            correctly plugged in and 6-12 inches (15-30 cm) from you.
          </p>
          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            Make a studio.
          </h3>
          <p className="text-base text-gray-800">
            Clean up your background and arrange props. Almost any small space
            can be transformed with a backdrop made of colored paper or an
            ironed bed sheet.
          </p>
          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            Light the scene and your face.
          </h3>
          <p className="text-base text-gray-800">
            Turn off overhead lights. Experiment with three point lighting by
            placing two lamps in front of you and one behind aimed on the
            background.
          </p>
          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            Reduce noise and echo.
          </h3>
          <p className="text-base text-gray-800">
            Turn off fans or air vents, and record at a time when it’s quiet.
            Place acoustic foam or blankets on the walls, and bring in rugs or
            furniture to dampen echo.
          </p>
          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            Mix and match your lecture types.
          </h3>
          <p className="text-base text-gray-800">
            Alternate between filming yourself, your screen, and slides or other
            visuals. Showing yourself can help learners feel connected.
          </p>
          {/*  */}
          <h3 className="text-base font-bold text-[#1a1d23] mt-10 mb-1">
            Be creative.
          </h3>
          <p className="text-base text-gray-800">
            Students won’t see behind the scenes. No one will know if you’re
            surrounded by pillows for soundproofing...unless you tell other
            instructors in the community!
          </p>
        </div>
        {/* ****************************** */}
        <div className="mt-12 text-base">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            Requirements
          </h2>
          <ul className="list-disc mt-8 ml-6 text-gray-800">
            <li className="my-1">
              Film and export in HD to create videos of at least 720p, or 1080p
              if possible
            </li>
            <li className="my-1">
              Audio should come out of both the left and right channels and be
              synced to your video
            </li>
            <li className="my-1">
              Audio should be free of echo and background noise so as not to be
              distracting to students
            </li>
          </ul>
        </div>
        {/* ****************************** */}
        <div className="mt-12 text-base">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            Resources
          </h2>
          <div className="my-8 ">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                Teaching Center: Guide to equipment
              </span>
            </h3>
            <p>Make a home studio on a budget</p>
          </div>
          <div className="my-8">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                Udemy Trust & Safety
              </span>
            </h3>
            <p>Our policies for instructors and students</p>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                Join the community
              </span>
            </h3>
            <p>A place to talk with other instructors</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetupnTest;
