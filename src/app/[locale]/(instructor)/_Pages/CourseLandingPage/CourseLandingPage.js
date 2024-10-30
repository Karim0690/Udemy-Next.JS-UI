"use client";
import React, { useEffect, useState } from "react";
import RichText from "../../_components/RichText/RichText";
import { IoMdInformationCircle } from "react-icons/io";
import AutoSuggest from "../../_components/AutoSuggest/AutoSuggest";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoPerson } from "react-icons/io5";
import useCourseStore from "@/app/store/courseStore";
import axios from "axios";

const CourseLandingPage = ({ course, setBasics }) => {
  const { categories, fetchCategories } = useCourseStore();

  const [formData, setFormData] = useState({
    title: course.title || "",
    subtitle: course.subtitle || "",
    description: course.description || "",
    category: course.category || "",
    subcategory: course.subcategory || "",
    topics: course.topics || [],
    relatedTopic: course.relatedTopic || null,
    language: course.language || "",
    level: course.level || "",
    courseImage: course.courseImage || "",
    promotionalVideo: course.promotionalVideo || "",
  });

  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const loadCategoriesData = async () => {
      await fetchCategories();
      if (formData.category) {
        await fetchSubcategories(formData.category);
      }
    };
    loadCategoriesData();
  }, [fetchCategories, formData.category]);

  const fetchSubcategories = async (category) => {
    try {
      if (category) {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/category/${category}/subcategories`
        );
        setSubcategories(response.data.result);
      } else {
        setSubcategories([]);
      }
    } catch (error) {
      console.error("Failed to fetch subcategories", error);
      setSubcategories([]);
    }
  };

  useEffect(() => {
    setBasics((prev) => ({
      ...prev,
      ...formData,
    }));
  }, [formData, setBasics]);

  const MAX_TITLE_LENGTH = 60;
  const MAX_SUBTITLE_LENGTH = 120;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "title" && value.length > MAX_TITLE_LENGTH) return;
    if (name === "subtitle" && value.length > MAX_SUBTITLE_LENGTH) return;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLanguageChange = (e) => {
    setFormData((prev) => ({ ...prev, language: e.target.value }));
  };

  const handleLevelChange = (e) => {
    setFormData((prev) => ({ ...prev, level: e.target.value }));
  };

  const handleCategoryChange = async (e) => {
    const selectedCategory = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategory,
      subcategory: "",
    }));
    await fetchSubcategories(selectedCategory);
  };

  const handleSubcategoryChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      subcategory: e.target.value,
    }));
  };

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const [uploadProgress, setUploadProgress] = useState(0);

  const [uploadVideoProgress, setUploadVideoProgress] = useState(0);
  const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME;
  const preset_key = process.env.NEXT_PUBLIC_CLOUD_PRESET;
  const [imageLoading, setImageLoading] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    setImageLoading(true);

    try {
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        }
      );

      setFormData((prevData) => ({
        ...prevData,
        courseImage: data.secure_url,
      }));
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setImageLoading(false);
    }
  };

  const handleVideoChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const MAX_VIDEO_SIZE = 100 * 1024 * 1024;
    if (file.size > MAX_VIDEO_SIZE) {
      setError("File size exceeds the maximum limit of 100 MB.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    setVideoLoading(true);

    try {
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/video/upload`,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadVideoProgress(percentCompleted);
          },
        }
      );

      setFormData((prevData) => ({
        ...prevData,
        promotionalVideo: data.secure_url,
      }));
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setVideoLoading(false);
    }
  };

  return (
    <div className="py-9 px-7 md:px-12">
      <p>
        Your course landing page is crucial to your success on Udemy. If it’s
        done right, it can also help you gain visibility in search engines like
        Google. As you complete this section, think about creating a compelling
        Course Landing Page that demonstrates why someone would want to enroll
        in your course. Learn more about{" "}
        <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f]">
          creating your course landing page
        </span>{" "}
        and{" "}
        <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f]">
          course title standards.
        </span>
      </p>
      {/* Course Title */}
      <div className="my-5">
        <h2 className="font-bold text-base">Course title</h2>
        <div className="relative mt-4 w-full">
          <input
            name="title"
            className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Insert your course title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <span className="absolute right-2 bottom-3 pr-1 text-gray-600">
            {`${MAX_TITLE_LENGTH - formData.title.length}`}
          </span>
        </div>
        <span className="text-xs text-gray-500">
          Your title should be a mix of attention-grabbing, informative, and
          optimized for search
        </span>
      </div>

      {/* Course Subtitle */}
      <div className="my-5">
        <h2 className="font-bold text-base">Course Subtitle</h2>
        <div className="relative mt-4 w-full">
          <input
            name="subtitle"
            className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white pr-12" // Add padding to the right side
            type="text"
            placeholder="Insert your course Subtitle"
            value={formData.subtitle}
            onChange={handleInputChange}
          />
          <span className="absolute right-4 bottom-3 pr-1 text-gray-600">
            {`${MAX_SUBTITLE_LENGTH - formData.subtitle.length}`}
          </span>
        </div>
        <span className="text-xs text-gray-500">
          Use 1 or 2 related keywords, and mention 3-4 of the most important
          areas that you&apos;ve covered during your course.
        </span>
      </div>

      {/* Course Description */}
      <div className="my-5">
        <h2 className="font-bold text-base mb-4">Course description</h2>
        <div className="w-[900px]">
          <RichText
            onChange={(content) =>
              setBasics((prevData) => ({ ...prevData, description: content }))
            }
            content={formData.description}
          />
        </div>
        <span className="text-xs text-gray-500">
          Description should have minimum 200 words.
        </span>
      </div>

      {/* Course Basic Info */}
      <div className="my-5">
        <h2 className="font-bold text-base mb-4">Basic Info</h2>
        <div className="flex gap-4 flex-wrap justify-start">
          {/* Language Selection */}
          <div className="md:flex-1 lg:flex-auto min-w-72">
            <div className="border border-black p-3">
              <select
                id="lang-options"
                name="language"
                required
                className="block w-full text-base focus:outline-none bg-transparent text-gray-800"
                value={formData.language}
                onChange={handleLanguageChange}
              >
                <option value="English">English (US)</option>
                <option value="Arabic">Arabic</option>
              </select>
            </div>
          </div>

          {/* Level Selection */}
          <div className="md:flex-1 lg:flex-auto min-w-72">
            <div className="border border-black p-3">
              <select
                id="level-options"
                name="level"
                required
                className="block w-full text-base focus:outline-none bg-transparent text-gray-800"
                value={formData.level}
                onChange={handleLevelChange}
              >
                <option value="0">--Select Level--</option>
                <option value="Beginner Level">Beginner Level</option>
                <option value="Intermediate Level">Intermediate Level</option>
                <option value="Expert Level">Expert Level</option>
                <option value="All Levels">All Levels</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-1 lg:flex-auto min-w-72 gap-5">
            <div className="border border-black p-3">
              <select
                id="category-options"
                name="category"
                required
                className="block w-full text-base focus:outline-none bg-transparent text-gray-800"
                value={formData.category}
                onChange={handleCategoryChange}
              >
                <option value="">--Select Category--</option>
                {categories &&
                  categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              {formData.category && (
                <div className="border border-black p-3">
                  <select
                    id="subcategory-options"
                    name="subcategory"
                    required
                    className="block w-full text-base focus:outline-none bg-transparent text-gray-800"
                    value={formData.subcategory}
                    onChange={handleSubcategoryChange}
                  >
                    <option value="">--Select Subcategory--</option>
                    {subcategories.length > 0 &&
                      subcategories.map((subcategory) => (
                        <option key={subcategory._id} value={subcategory._id}>
                          {subcategory.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* What is primarily taught in your course? */}
      <div className="my-5 relative">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-bold text-base">
            What is primarily taught in your course?
          </h2>
          <button
            type="button"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
            className="focus:outline-none"
          >
            <IoMdInformationCircle className="text-xl" />
          </button>

          {tooltipVisible && (
            <div
              id="tooltip-right"
              role="tooltip"
              className="absolute z-10 left-[350px] w-[300px] inline-block p-6 text-sm text-gray-600 bg-white border border-gray-200"
            >
              Each individual topic chosen should comprehensively describe your
              course&apos;s content without being too broad. E.g. &quotThe
              Complete Tennis Course&quot should have &quot;Tennis&quot; – not
              &quot;Tennis Serve&quot; (specific, but not comprehensive) and not
              &quot;Sports&quot; (comprehensive, but not specific).{" "}
              <a
                href="#"
                className="text-violet-700 underline underline-offset-2"
              >
                Learn more.
              </a>
            </div>
          )}
        </div>
        <AutoSuggest
          courseTopics={formData.topics}
          relatedTopic={formData.relatedTopic}
          setFormData={setFormData}
        />
      </div>

      {/* Course image */}
      <div className="my-5">
        <h2 className="font-bold text-base">Course image</h2>
        <div className="mt-2 w-full flex flex-col md:flex-row">
          <div className="border border-gray-200 flex-1 relative">
            {imageLoading && (
              <div className="absolute w-full h-full flex justify-center items-center">
                <div className="w-full h-full bg-black opacity-30"></div>
                <div role="status" className="absolute">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            {formData.courseImage ? (
              <Image
                src={formData.courseImage}
                width={420}
                height={220}
                alt=""
                className="w-full h-[220px]"
              />
            ) : (
              <Image
                src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
                width={750}
                height={422}
                alt=""
              />
            )}
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 flex-1">
            <p>
              Upload your course image here. It must meet our{" "}
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f]">
                course image quality standards
              </span>{" "}
              to be accepted. Important guidelines: 750x422 pixels; .jpg, .jpeg,
              .gif, or .png. No text on the image.
            </p>
            <div className="mt-4 flex w-full">
              {uploadProgress == 0 ? (
                <span className="p-3 text-gray-500 border border-black flex-1">
                  No file selected
                </span>
              ) : (
                <div className="flex-1">
                  <div className="relative w-full h-full bg-gray-400">
                    <div
                      className="absolute h-full bg-violet-700 text-center text-white py-3"
                      style={{ width: `${uploadProgress}%` }}
                    >
                      {uploadProgress}%
                    </div>
                  </div>
                </div>
              )}
              {uploadProgress == 100 ? (
                <label className="bg-white border border-black p-3 cursor-pointer hover:bg-gray-100">
                  <span className="font-bold text-black">Change</span>
                  <input
                    name="courseImage"
                    className="hidden"
                    type="file"
                    accept=".jpg, .jpeg, .png, .gif"
                    onClick={() => {
                      setUploadProgress(0);
                    }}
                  />
                </label>
              ) : (
                <label className="bg-white border border-black p-3 cursor-pointer hover:bg-gray-100">
                  <span className="font-bold text-black">Upload File</span>
                  <input
                    name="courseImage"
                    className="hidden"
                    type="file"
                    accept=".jpg, .jpeg, .png, .gif"
                    onChange={handleFileChange}
                  />
                </label>
              )}
              {/* File input */}
            </div>
          </div>
        </div>
      </div>

      {/* Course Video */}
      <div className="my-5">
        <h2 className="font-bold text-base">Promotional video</h2>
        <div className="mt-2 w-full flex flex-col md:flex-row">
          <div className="border border-gray-200 flex-1 relative">
            {videoLoading && (
              <div className="absolute w-full h-full flex justify-center items-center">
                <div className="w-full h-full bg-black opacity-30"></div>
                <div role="status" className="absolute">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
            {formData.promotionalVideo ? (
              <video
                src={formData.promotionalVideo}
                width={750}
                height={422}
                controls
              />
            ) : (
              <Image
                src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
                width={750}
                height={422}
                alt=""
              />
            )}
          </div>
          <div className="mt-4 md:mt-0 md:ml-4 flex-1">
            <p>
              Upload your promotional video here. It must meet our{" "}
              <span className="text-[#5022c3] underline underline-offset-4 hover:text-[#3b198f]">
                video quality standards
              </span>{" "}
              to be accepted. Important guidelines: MP4 format, maximum size
              100MB.
            </p>
            <div className="mt-4 flex w-full">
              {uploadVideoProgress == 0 ? (
                <span className="p-3 text-gray-500 border border-black flex-1">
                  No file selected
                </span>
              ) : (
                <div className="flex-1">
                  <div className="relative w-full h-full bg-gray-200">
                    <div
                      className="absolute h-full bg-violet-700"
                      style={{ width: `${uploadVideoProgress}%` }}
                    />
                    <span className="absolute inset-0 text-center text-white py-3">
                      {uploadVideoProgress}%
                    </span>
                  </div>
                </div>
              )}

              {/* File input */}
              {uploadVideoProgress == 100 ? (
                <label className="bg-white border border-black p-3 cursor-pointer hover:bg-gray-100">
                  <span className="font-bold text-black">Change</span>
                  <input
                    name="promotionalVideo"
                    className="hidden"
                    type="file"
                    accept="video/mp4"
                    onClick={() => {
                      setUploadProgress(0);
                    }}
                  />
                </label>
              ) : (
                <label className="bg-white border border-black p-3 cursor-pointer hover:bg-gray-100">
                  <span className="font-bold text-black">Upload Video</span>
                  <input
                    name="promotionalVideo"
                    className="hidden"
                    type="file"
                    accept="video/mp4"
                    onChange={handleVideoChange}
                  />
                </label>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Instructor Profile */}
      <div className="my-5">
        <h2 className="font-bold text-base">Instructor profile(s)</h2>
        <div className="flex gap-4 items-center my-6">
          <Avatar className="bg-gray-800 text-white w-[50px] h-[50px]">
            <AvatarFallback>
              <IoPerson />
            </AvatarFallback>
          </Avatar>
          <p className="text-[#5022c3] hover:text-[#3b198f] font-medium cursor-pointer">
            Karim Abdelkareem
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseLandingPage;