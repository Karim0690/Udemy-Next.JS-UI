import Image from "next/image";
import React from "react";

const FilmnEdit = () => {
  return (
    <>
      <div className="bg-[#f7f9fa] py-4 p-4 lg:pr-6 lg:pl-12 flex flex-col lg:flex-row lg:items-center">
        <div className="flex-[8]">
          <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
            You’re ready to share your knowledge.
          </h2>
          <p className="text-gray-800 text-lg mt-6">
            This is your moment! If you’ve structured your course and used our
            guides, you&apos;re well prepared for the actual shoot. Pace
            yourself, take time to make it just right, and fine-tune when you
            edit
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
              You’re in good company
            </h2>
            <p className="text-base text-gray-800 mt-2">
              Chat and get production help with other Udemy instructors
            </p>
          </div>
          <div className="my-4">
            <button className="text-base p-3 border border-black font-bold hover:bg-gray-300">
              Join the community
            </button>
          </div>
        </div>
      </div>
      <div className="p-7 lg:p-14 max-w-[57rem]">
        <h2 className="text-2xl mb-4 font-bold text-[#1a1d23]">
          Tips
        </h2>
        <div className="text-base">
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            Take breaks and review frequently.
          </h3>
          <p className="text-gray-800">
            Check often for any changes such as new noises. Be aware of your own
            energy levels--filming can tire you out and that translates to the
            screen.
          </p>
          {/*  */}
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            Build rapport.
          </h3>
          <p className="text-gray-800">
            Students want to know who’s teaching them. Even for a course that is
            mostly screencasts, film yourself for your introduction. Or go the
            extra mile and film yourself introducing each section!
          </p>
          {/*  */}
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            Being on camera takes practice.
          </h3>
          <p className="text-gray-800">
            Make eye contact with the camera and speak clearly. Do as many
            retakes as you need to get it right.
          </p>
          {/*  */}
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            Set yourself up for editing success.
          </h3>
          <p className="text-gray-800">
            You can edit out long pauses, mistakes, and ums or ahs. Film a few
            extra activities or images that you can add in later to cover those
            cuts.
          </p>
          {/*  */}
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            Create audio marks.
          </h3>
          <p className="text-gray-800">
            Clap when you start each take to easily locate the audio spike
            during editing. Use our guides to manage your recording day
            efficiently
          </p>
          {/*  */}
          <h3 className="font-bold text-[#1a1d23] mt-10 mb-1">
            For screencasts, clean up.
          </h3>
          <p className="text-gray-800">
            Move unrelated files and folders off your desktop and open any tabs
            in advance. Make on-screen text at least 24pt and use zooming to
            highlight.
          </p>
          {/*  */}
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
          <div className="my-8">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                Create a test video
              </span>
            </h3>
            <p>Get feedback before filming your whole course</p>
          </div>
          <div className="my-8">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                Teaching Center: Guide to quality A/V
              </span>
            </h3>
            <p>Film and edit with confidence</p>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-[#1a1d23] mb-1">
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f] cursor-pointer">
                Udemy trust & safety
              </span>
            </h3>
            <p>Our policies for instructors and students</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmnEdit;
