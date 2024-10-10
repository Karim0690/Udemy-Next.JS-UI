"use client";
import { useState } from "react";
import CourseComponent from "../CourseComponent/CourseComponent";
import CoursesSlider from "../CoursesSlider/CoursesSlider";

function BroadSelection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    swipeToSlide: true,
  };
  const [activeTab, setActiveTab] = useState("python");
  return (
    <>
      <div className="mx-10 mt-20">
        <div>
          <h1 className="text-5xl font-bold pb-4 text-gray-700">
            A broad selection of courses
          </h1>
          <p>
            Choose from over 250,000 online video courses with new additions
            published every month
          </p>
        </div>
      </div>

      <div className="mx-10 py-8">
        <div>
          <div className="text-xl font-bold text-center text-gray-500">
            <ul className="flex border-b border-gray-100">
              {/* Plan your python tab */}
              <li>
                <div
                  className={`inline-block p-4 rounded-t-lg hover:cursor-pointer ${
                    activeTab === "python"
                      ? "text-black border-black"
                      : "border-transparent hover:text-black"
                  }`}
                  onClick={() => setActiveTab("python")}
                >
                  Python
                </div>
              </li>

              {/* Record your video tab */}
              <li>
                <div
                  className={`inline-block p-4  rounded-t-lg hover:cursor-pointer ${
                    activeTab === "Microsoft Excel"
                      ? "text-black border-black"
                      : "border-transparent hover:text-black"
                  }`}
                  onClick={() => setActiveTab("Microsoft Excel")}
                >
                  Microsoft Excel
                </div>
              </li>

              {/* Launch your course tab */}
              <li>
                <div
                  className={`inline-block p-4  rounded-t-lg hover:cursor-pointer ${
                    activeTab === "Web Development"
                      ? "text-black border-black"
                      : "border-transparent hover:text-black"
                  }`}
                  onClick={() => setActiveTab("Web Development")}
                >
                  Web Development
                </div>
              </li>
              <li>
                <div
                  className={`inline-block p-4  rounded-t-lg hover:cursor-pointer ${
                    activeTab === "JavaScript"
                      ? "text-black border-black"
                      : "border-transparent hover:text-black"
                  }`}
                  onClick={() => setActiveTab("JavaScript")}
                >
                  JavaScript
                </div>
              </li>
              <li>
                <div
                  className={`inline-block p-4 rounded-t-lg hover:cursor-pointer ${
                    activeTab === "Data Science"
                      ? "text-black border-black"
                      : "border-transparent hover:text-black"
                  }`}
                  onClick={() => setActiveTab("Data Science")}
                >
                  Data Science
                </div>
              </li>
              <li>
                <div
                  className={`inline-block p-4  rounded-t-lg hover:cursor-pointer ${
                    activeTab === "Amazon AWS"
                      ? "text-black border-black"
                      : "border-transparent hover:text-black"
                  }`}
                  onClick={() => setActiveTab("Amazon AWS")}
                >
                  Amazon AWS
                </div>
              </li>
              <li>
                <div
                  className={`inline-block p-4  rounded-t-lg hover:cursor-pointer ${
                    activeTab === "Drawing"
                      ? "text-black border-black"
                      : "border-transparent hover:text-black"
                  }`}
                  onClick={() => setActiveTab("Drawing")}
                >
                  Drawing
                </div>
              </li>
            </ul>
          </div>

          {/* Content for each tab */}
          <div className="p-6 border border-gray-300 text-black">
            {activeTab === "python" && (
              <div>
                <CourseComponent
                  title="Expand your career opportunities with Python"
                  content="Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to"
                  button="Explore Python"
                />
                <div className="">
                  <CoursesSlider settings={settings} />
                </div>
              </div>
            )}

            {activeTab === "Microsoft Excel" && (
              <div>
                <CourseComponent
                  title="Analyze and visualize data with Excel"
                  content="Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to..."
                  button="Explore Microsoft Excel"
                />
                <div className="">
                  <CoursesSlider settings={settings} />
                </div>
              </div>
            )}

            {activeTab === "Web Development" && (
              <div>
                <CourseComponent
                  title="Build websites and applications with Web Development"
                  content="The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on."
                  button="Explore Web Development"
                />
                <div className="">
                  <CoursesSlider settings={settings} />
                </div>
              </div>
            )}

            {activeTab === "JavaScript" && (
              <div>
                <CourseComponent
                  title="Grow your software development skills with JavaScript"
                  content="JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build"
                  button="Explore JavaScript"
                />
                <div className="">
                  <CoursesSlider settings={settings} />
                </div>
              </div>
            )}
            {activeTab === "Data Science" && (
              <div>
                <CourseComponent
                  title="Lead data-driven decisions with Data Science"
                  content="Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics..."
                  button="Explore Data Science"
                />
                <div className="">
                  <CoursesSlider settings={settings} />
                </div>
              </div>
            )}
            {activeTab === "Amazon AWS" && (
              <div>
                <CourseComponent
                  title="Become an expert in cloud computing with AWS Certification"
                  content="Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking, and more. The better you become at cloud computing, the more..."
                  button="Explore Amazon AWS"
                />
                <div className="">
                  <CoursesSlider settings={settings} />
                </div>
              </div>
            )}
            {activeTab === "Drawing" && (
              <div>
                <CourseComponent
                  title="Expand your creative skillset with Drawing"
                  content="Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area..."
                  button="Explore Drawing"
                />
                <div className="">
                  <CoursesSlider settings={settings} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BroadSelection;
