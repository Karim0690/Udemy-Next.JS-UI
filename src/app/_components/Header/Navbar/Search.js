"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

const Search = ({ mobileSearchOpen, setMobileSearchOpen, session }) => {
  const { locale } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedCourses, setSearchedCourses] = useState(null);
  const handleSearch = async () => {
    if (searchQuery.length > 2) {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/course/public/courses?keyword=${searchQuery}`
        );
        if (data.status === "success") {
          setSearchedCourses(data.data.courses);
        } else {
          setSearchedCourses([]);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setSearchedCourses([]);
      }
    } else {
      setSearchedCourses([]);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <>
      <Dialog
        open={mobileSearchOpen}
        onClose={setMobileSearchOpen}
        className="lg:hidden"
      >
        <DialogPanel className="fixed inset-y-0 z-20 w-full  overflow-y-auto bg-white  sm:ring-1 sm:ring-gray-900/10">
          <div className="flow-root">
            <div className="px-3 py-4 flex items-center border-b-2">
              <div className="flex flex-1 items-center gap-2">
                <IoIosSearch className="text-2xl" />
                <input
                  placeholder="search for anything"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                  className="w-full py-2 pl-3 pr-10 outline-none"
                />
              </div>
              <div
                onClick={() => {
                  setMobileSearchOpen(false);
                  setSearchQuery("")
                  setSearchedCourses(null)
                }}
              >
                <HiMiniXMark className="text-2xl" />
              </div>
            </div>
            {searchQuery.length > 2 && (
              <div className="px-2 py-3">
                {searchedCourses.length === 0 ? (
                  <p>No results found</p>
                ) : (
                  <ul>
                    {searchedCourses.map((course) => (
                      <li key={course._id} className="py-3">
                        <Link
                          href={`/${locale}/course/${course.slug}`}
                          onClick={() => {
                            setMobileSearchOpen(false);
                          }}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={course.courseImage}
                              width={50}
                              height={50}
                              alt="course"
                            />
                            <div>
                              <div className="text-sm font-bold text-gray-800">
                                {course.title}
                              </div>
                              <div className="flex gap-2 py-1">
                                <span className="text-xs font-bold text-gray-500">
                                  Course
                                </span>
                                <span className="text-xs text-gray-500">
                                  {course.instructor.name}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default Search;
