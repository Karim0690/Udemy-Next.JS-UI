"use client";
import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"





export default function Page() {
  const [activeTab, setActiveTab] = useState("Udemy profile");
  const [bio, setBio] = useState('');
  const MAX_CHARS = 60;
  const [remainingChars, setRemainingChars] = useState(MAX_CHARS);

  const handleChange = (e) => {
    const value = e.target.value;
    if (MAX_CHARS - value.length >= 0) {
      setBio(value);
      setRemainingChars(MAX_CHARS - value.length);
    }
  };





  return (
    <>
      <div className="max-w-7xl min-h-screen  px-24 mx-auto">
        <h1 className="mt-6 mb-14 font-bold text-3xl leading-tight tracking-tighter max-w-3xl">
          Profile & settings
        </h1>
        <div className="container flex justify-center p-8">
          <div>
            <div className="text-2xl font-bold text-center text-gray-500 flex justify-center">
              <ul className="flex w-[fit-content] border-b-2 border-gray-200">
                <li className="me-2">
                  <div
                    className={`inline-block p-4 border-b-2 rounded-t-lg hover:cursor-pointer ${activeTab === "Udemy profile"
                      ? "text-black border-black"
                      : "border-transparent hover:text-black"
                      }`}
                    onClick={() => setActiveTab("Udemy profile")}
                  >
                    Udemy profile
                  </div>
                </li>
                <li className="me-2">
                  <div
                    className={`inline-block p-4 border-b-2 rounded-t-lg hover:cursor-pointer ${activeTab === "Profile picture"
                      ? "text-black border-black"
                      : "border-transparent hover:text-black"
                      }`}
                    onClick={() => setActiveTab("Profile picture")}
                  >
                    Profile picture
                  </div>
                </li>
                <li className="me-2">
                  <div
                    className={`inline-block p-4 border-b-2 rounded-t-lg hover:cursor-pointer ${activeTab === "Privicy settings"
                      ? "text-black border-black"
                      : "border-transparent hover:text-black"
                      }`}
                    onClick={() => setActiveTab("Privicy settings")}
                  >
                    Privicy settings
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <div className="p-6 text-black mr-6">
                {activeTab === "Udemy profile" && (
                  <form>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                          First Name
                        </label>
                        <input class="appearance-none block w-full  text-gray-700 border border-black  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                          WebSite
                        </label>
                        <input class="appearance-none block w-full disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 text-gray-700  border border-black py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="URL" disabled />
                      </div>
                      <div class="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                          Last Name
                        </label>
                        <input class="appearance-none block w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                      </div>
                      <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                        <label
                          for="grid-twittre-url"
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Twitter</label>
                        <div class="relative mb-4 flex w-full items-stretch">
                          <span
                            class="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                            id="basic-addon3">http://www.twitter.com/</span>
                          <input
                            type="text"
                            class="relative m-0 block flex-auto  appearance-none  w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-twittre-url"
                            aria-describedby="basic-addon3" />
                        </div>
                      </div>
                      <div class="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-headline">
                          Headline
                        </label>
                        <div class="relative">
                          <input class="appearance-none block w-full text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" placeholder="Instructor at Udemy" value={bio} onChange={handleChange} />
                          <span className="absolute top-0 right-0 m-2 text-gray-500">{remainingChars}</span>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                        <label
                          for="grid-facebook-url"
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Facebook</label>
                        <div class="relative mb-4 flex w-full items-stretch">
                          <span
                            class="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                            id="basic-addon3">http://www.facebook.com/</span>
                          <input
                            type="text"
                            class="relative m-0 block flex-auto  appearance-none  w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-facebooke-url"
                            aria-describedby="basic-addon3" />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-biography">
                          Biography
                        </label>
                        <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 border border-black ">
                          <button type="button" class="p-2 text-black focus:bg-black focus:text-white  font-bold">
                            B
                          </button>
                          <button type="button" class="p-2 text-black focus:bg-black focus:text-white font-bold italic ">
                            I
                          </button>
                        </div>
                        <label for="editor" class="sr-only">Publish post</label>
                        <textarea id="editor" rows="8" class="block w-full px-0 text-sm border border-black text-black bg-white " required ></textarea>
                        <div className="text-gray-400 font-normal text-xs mt-2">



                          To help learners learn more about you, your bio should reflect your Credibility, Empathy, Passion, and Personality. Your biography should have at least 50 words, links and coupon codes are not permitted.
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                        <label
                          for="grid-linkedin-url"
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >LinkedIn</label>
                        <div class="relative mb-4 flex w-full items-stretch">
                          <span
                            class="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                            id="basic-addon3">http://www.linkedin.com/</span>
                          <input
                            type="text"
                            class="relative m-0 block flex-auto  appearance-none  w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-linkedin-url"
                            aria-describedby="basic-addon3" />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                        <label
                          for="grid-youtube-url"
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Youtube</label>
                        <div class="relative mb-4 flex w-full items-stretch">
                          <span
                            class="inline-flex items-center whitespace-nowrap text-black bg-gray-100 border border-black py-3 px-4 mb-3 text-center text-base font-normal leading-[1.6] text-surface dark:border-white/10 dark:text-white"
                            id="basic-addon3">http://www.youtube.com/</span>
                          <input
                            type="text"
                            class="relative m-0 block flex-auto appearance-none  w-full  text-gray-700 border border-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-youtube-url"
                            aria-describedby="basic-addon3" />
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 px-3 mt-6 md:mb-0">
                      <label
                          for="grid-youtube-url"
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Language</label>
                        <select id="laguage" class=" border  border-black py-3 px-4 mb-3 text-gray-900 text-sm  block w-full h-12">
                          <option  className="  "selected> Choose a Language</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                            <option value="ES">Spain</option>
                            <option value="IT">Italy</option>
                            <option value="UK">United Kingdom</option>
                            <option value="NL">Netherlands</option>
                            <option value="AU">Australia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="IN">India</option>
                            <option value="BR">Brazil</option>
                            <option value="MX">Mexico</option>
                            <option value="CN">China</option>
                            <option value="RU">Russia</option>
                        </select>
                        </div>
                        <div className="flex items-center space-x-2">
                      <Button className="bg-zinc-800 text-white hover:bg-zinc-700 w-20 h-14 font-bold text-lg mt-6">Save</Button>
                    </div>
                    </div>
                  </form>

                )}
                {activeTab === "Profile picture" && (
                  <div className="pt-3">
                    <p className="font-heading font-bold leading-tight tracking-normal text-xl">Image preview</p>
                    <div className="text-gray-500 py-2 font-text font-normal leading-relaxed text-lg"> Minimum 200x200 pixels, Maximum 6000x6000 pixels</div>
                    <div class="flex items-center justify-center w-full">
                      <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                          </svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                          {/* <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p> */}
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                      </label>
                    </div>
                    {/* button save */}
                    <div className="flex items-center space-x-2">
                      <Button className="bg-zinc-800 text-white hover:bg-zinc-700 w-20 h-14 font-bold text-lg mt-6">Save</Button>
                    </div>


                  </div>



                )}
                {activeTab === "Privicy settings" && (
                  <div className="pt-6 max-w-5xl">
                    <div className="flex items-center space-x-2 mb-3">
                      <Checkbox id="terms" className="checked:bg-black checked:text-white" />
                      <label
                        htmlFor="terms"
                        className="font-bold leading-tight tracking-tight text-lg  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Show your profile to logged-in users
                      </label>
                    </div>
                    <div className="flex items-center space-x-2 mb-3 ">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className=" font-bold  text-lg leading-tight tracking-tight  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Show courses you're taking on your profile page
                      </label>
                    </div>
                    <Button className="bg-black text-white hover:bg-zinc-700 mt-6 w-20 h-14 font-bold text-lg">Save</Button>



                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


