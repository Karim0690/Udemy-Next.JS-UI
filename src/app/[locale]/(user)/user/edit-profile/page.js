"use client";

import AccountSidenav from "../accountSidenav/AccountSidenav";
import RichText3 from "@/app/[locale]/(instructor)/_components/RichText3/RichText";
import useUserStore from "@/app/store/userStore";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Page() {
  const { user, userData, setUser, fetchUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUser(user._id);
      setIsLoading(false);
    }
  }, [user, fetchUser]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    headline: "",
    language: "",
    biography: "",
    social: {
      website: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      youtube: "",
    },
    photo: "",
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        headline: userData.headline || "",
        language: userData.language || "",
        biography: userData.biography || "",
        social: {
          website: userData.social?.website || "",
          facebook: userData.social?.facebook || "",
          twitter: userData.social?.twitter || "",
          linkedin: userData.social?.linkedin || "",
          youtube: userData.social?.youtube || "",
        },
        photo: userData.photo || "",
      });
    }
  }, [userData]);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      social: {
        ...prevData.social,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.put(
        `http://localhost:3001/user/${user._id}`,
        formData,
      );
      console.log(formData);

      setSuccess("User data updated successfully!");
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message ||
          "An error occurred. Please try again later.",
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center py-10 flex-1 mx-4 md:mx-8 lg:mx-20">
      <AccountSidenav />
      <div className="border border-gray-300 flex-1 max-w-[900px]">
        <div className="flex border-b border-gray-300 py-4">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h1 className="font-heading font-bold leading-tight tracking-normal text-lg sm:text-xl md:text-2xl max-w-3xl">
              Public profile
            </h1>
            <p className="font-text mt-2 leading-6">
              Add information about yourself
            </p>
          </div>
        </div>
        {isLoading ? (
          <div className="flex-1 flex justify-center items-center mt-4">
            <Spinner className="h-16 w-16 text-gray-900/50" />
          </div>
        ) : (
          <div className="flex-1">
            <div className="px-4 max-w-[700px] mx-auto">
              <h2 className="font-semibold px-3 mt-3">Basics:</h2>

              <div className="w-full px-3 mt-2 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="w-full px-3 mt-6 md:mb-0">
                <input
                  className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              <div className="w-full px-3 mt-6 md:mb-0">
                <input
                  name="headline"
                  className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Headline"
                  value={formData.headline}
                  onChange={handleChange}
                />
                <div className="flex align-center text-gray-600 text-xs">
                  Add a professional headline like, "Instructor at Udemy" or
                  "Architect."
                </div>
              </div>

              <div className="w-full px-3 mt-6 md:mb-0">
                <RichText3
                  content={formData.biography}
                  onChange={(newBiography) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      biography: newBiography,
                    }))
                  }
                  name="biography"
                />
                <div className="text-gray-600 text-xs align-center mt-2">
                  Links and coupon codes are not permitted in this section.
                </div>
              </div>

              <div className="w-full px-3 mt-6 md:mb-0 border-b border-gray-300">
                <label
                  htmlFor="language"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Language
                </label>
                <select
                  name="language"
                  id="language"
                  className="border border-black py-3 px-4 mb-3 text-gray-900 text-sm block w-full h-12"
                  value={formData.language}
                  onChange={handleChange}
                >
                  <option value="English (US)">English (US)</option>
                  {/* Add other options here */}
                </select>
              </div>

              <div className="w-full px-3 mt-3 md:mb-0">
                <h2 className="font-bold"> Links:</h2>
                <input
                  className="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  name="website"
                  placeholder="Website (http(s)://..)"
                  value={formData.social.website}
                  onChange={handleSocialChange}
                />
              </div>

              <div className="w-full px-3 mt-3 md:mb-0">
                <label
                  htmlFor="grid-twitter-url"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Twitter
                </label>
                <div className="relative flex w-full items-stretch">
                  <span className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-1 lg:px-4 mb-3 text-center text-xs lg:text-base font-normal leading-[1.6]">
                    http://www.twitter.com/
                  </span>
                  <input
                    placeholder="Twitter Profile"
                    type="text"
                    className="relative m-0 block flex-auto appearance-none w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-twitter-url"
                    aria-describedby="basic-addon3"
                    name="twitter"
                    onChange={handleSocialChange}
                    value={formData.social.twitter} // Assuming you want to bind the value
                  />
                </div>
                <div className="flex align-center text-gray-600 text-xs">
                  Add your Twitter username (e.g. johnsmith).
                </div>
              </div>

              <div className="w-full px-3 mt-3 md:mb-0">
                <label
                  htmlFor="grid-facebook-url"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Facebook
                </label>
                <div className="relative flex w-full items-stretch">
                  <span className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-1 lg:px-4 mb-3 text-center text-xs lg:text-base font-normal leading-[1.6]">
                    http://www.facebook.com/
                  </span>
                  <input
                    placeholder="Facebook Profile"
                    name="facebook"
                    type="text"
                    className="relative m-0 block flex-auto appearance-none w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-facebook-url"
                    aria-describedby="basic-addon3"
                    onChange={handleSocialChange}
                    value={formData.social.facebook} // Bind the value
                  />
                </div>
                <div className="flex align-center text-gray-600 text-xs">
                  Input your Facebook username (e.g. johnsmith).
                </div>
              </div>

              <div className="w-full px-3 mt-3 md:mb-0">
                <label
                  htmlFor="grid-linkedin-url"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  LinkedIn
                </label>
                <div className="relative flex w-full items-stretch">
                  <span className="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-1 lg:px-4 mb-3 text-center text-xs lg:text-base font-normal leading-[1.6]">
                    http://www.linkedin.com/
                  </span>
                  <input
                    placeholder="LinkedIn Profile"
                    name="linkedin"
                    type="text"
                    className="relative m-0 block flex-auto appearance-none w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-linkedin-url"
                    aria-describedby="basic-addon3"
                    onChange={handleSocialChange}
                    value={formData.social.linkedin} // Bind the value
                  />
                </div>
                <div className="flex align-center text-gray-600 text-xs">
                  Input your LinkedIn resource id (e.g. in/johnsmith).
                </div>
              </div>

              <div className="w-full px-3 mt-3 md:mb-0">
                <label
                  htmlFor="grid-youtube-url"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  YouTube
                </label>
                <div className="relative flex w-full items-stretch">
                  <span className="text-xs inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-1 lg:px-4 mb-3 text-center md:text-base font-normal leading-[1.6]">
                    http://www.youtube.com/
                  </span>
                  <input
                    placeholder="YouTube Profile"
                    name="youtube"
                    type="text"
                    className="relative m-0 block flex-auto appearance-none w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-youtube-url"
                    aria-describedby="basic-addon3"
                    onChange={handleSocialChange}
                    value={formData.social.youtube} // Bind the value
                  />
                </div>
                <div className="flex align-center text-gray-600 text-xs">
                  Input your YouTube username (e.g. johnsmith).
                </div>
              </div>

              {/* Repeat for other social links... */}

              <div className="flex flex-1 items-center space-x-2 my-6">
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-gray-700 p-3 font-bold text-lg mt-4"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
              {error && <div className="text-red-500">{error}</div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
