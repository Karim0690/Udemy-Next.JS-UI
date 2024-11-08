"use client";

import styles from "./TopNav.module.css";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { ChevronDownIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen, session }) => {
  const { locale } = useParams();
  const [category, setCategory] = useState();
  const [subcategory, setSubcategory] = useState();
  const [topics, setTopics] = useState();
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [topicsDialogOpen, setTopicsDialogOpen] = useState(false);
  const [allCategoriesDialogOpen, setAllCategoriesDialogOpen] = useState(false);

  // Fetch data functions
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        let { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/category`
        );
        if (data.message === "success") {
          setCategory(data.result);
        } else {
          console.error("Failed to fetch category data");
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    const fetchSubcategoryData = async () => {
      try {
        let { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/subcategory`
        );
        if (data.message === "success") {
          setSubcategory(data.result);
        } else {
          console.error("Failed to fetch subcategory data");
        }
      } catch (error) {
        console.error("Error fetching subcategory data:", error);
      }
    };

    const fetchTopicsData = async () => {
      try {
        let { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_LOCAL_API}/topic`
        );
        if (data.message === "success") {
          setTopics(data.result);
        } else {
          console.error("Failed to fetch topics data");
        }
      } catch (error) {
        console.error("Error fetching topics data:", error);
      }
    };

    fetchCategoryData();
    fetchSubcategoryData();
    fetchTopicsData();
  }, []);

  // Handle subcategory click to open topics dialog
  const handleSubcategoryClick = (subcate) => {
    setSelectedSubcategory(subcate);
    setTopicsDialogOpen(true);
  };

  const handleAllCategoriesClick = () => {
    setAllCategoriesDialogOpen(true);
  };

  return (
    <>
      {/* Main Sidebar */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-[rgba(45,47,45,0.8)]" />
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className={styles.panelbtn}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        </button>
        <DialogPanel className="fixed inset-y-0 z-20 w-full max-w-[16rem] overflow-y-auto bg-white sm:max-w-[16rem] sm:ring-1 sm:ring-gray-900/10">
          <div className="flow-root">
            {!session ? (
              <div className="px-6 py-3 flex flex-col gap-2">
                <Link
                  href={`/${locale}/login`}
                  className="text-violet-700 hover:text-violet-800 font-medium"
                >
                  Log in
                </Link>
                <Link
                  href={`/${locale}/siginup`}
                  className="text-violet-700 hover:text-violet-800 font-medium"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <>
                <div className="px-3 py-4 flex items-center gap-2 bg-gray-50">
                  <div className="bg-black w-16 h-16 rounded-full text-white flex justify-center items-center font-bold text-2xl">
                    {session?.user.name.charAt(0).toUpperCase() +
                      session?.user.name.charAt(1).toUpperCase()}
                  </div>
                  <div className="flex flex-wrap flex-col">
                    <p className="font-bold">Hi, {session.user.name}</p>
                    <p className="text-gray-400 text-sm">Welcome back</p>
                  </div>
                </div>
                {session.user.role.includes("instructor") && (
                  <div className="px-3 py-3 border-b-2">
                    <Link href={`${locale}/instructor/course`}>
                      <p className="text-violet-800">
                        Switch to instructor view
                      </p>
                    </Link>
                  </div>
                )}
                <div className="px-2 py-3 border-b-2">
                  <p className="font-bold text-sm text-gray-500 p-2">Learn</p>
                  <Link href={`/${locale}/home/my-courses/learning`}>
                    <p className="px-2 text-sm">My Learning</p>
                  </Link>
                </div>
              </>
            )}

            <div className="divide-y divide-gray-500/10">
              <div className="py-2 px-3">
                <p className="font-bold text-sm text-gray-500 p-2">
                  Most popular
                </p>
                {subcategory ? (
                  subcategory.map((subcate) => (
                    <div
                      key={subcate._id}
                      className="flex items-center justify-between rounded-lg px-2 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleSubcategoryClick(subcate)}
                    >
                      <span>{subcate.name}</span>
                      {subcate.topics && subcate.topics.length > 0 && (
                        <FaChevronRight className="h-3 w-3 text-gray-900" />
                      )}
                    </div>
                  ))
                ) : (
                  <p>No subcategories available</p>
                )}
              </div>
              <div className="py-2 px-3">
                <div
                  className="flex items-center justify-between rounded-lg px-2 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  onClick={handleAllCategoriesClick}
                >
                  <span>All Categories</span>
                  <FaChevronRight className="h-3 w-3 text-gray-900" />
                </div>
              </div>
              <div className="py-2 px-3">
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="text-red-500 hover:text-red-700 text-sm font-semibold"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Topics Dialog */}
      {selectedSubcategory && (
        <Dialog
          open={topicsDialogOpen}
          onClose={() => setTopicsDialogOpen(false)}
        >
          <div className="fixed inset-0 z-10 bg-[rgba(45,47,45,0.8)]" />
          <DialogPanel className="fixed inset-y-0 z-20 w-full max-w-[16rem] overflow-y-auto bg-white sm:max-w-[16rem] sm:ring-1 sm:ring-gray-900/10">
            <div className="px-3 py-4 bg-gray-100">
              <div
                className="flex gap-4 items-center"
                onClick={() => setTopicsDialogOpen(false)}
              >
                <FaChevronLeft className="h-3 w-3 text-gray-900" />
                <h2 className="font-bold text-sm text-gray-500">Menu</h2>
              </div>
            </div>
            <div className="mt-4">
              <Link href={`/${locale}/courses/${selectedSubcategory.slug}`}>
                <div className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer">
                  {selectedSubcategory.name}
                </div>
              </Link>
              {selectedSubcategory.topics &&
              selectedSubcategory.topics.length > 0 ? (
                selectedSubcategory.topics.map((topic) => (
                  <div
                    key={topic._id}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  >
                    {topic.name}
                  </div>
                ))
              ) : (
                <p>No topics available for this subcategory</p>
              )}
            </div>
          </DialogPanel>
        </Dialog>
      )}

      {/* All Categories Dialog */}
      {allCategoriesDialogOpen && (
        <Dialog
          open={allCategoriesDialogOpen}
          onClose={() => setAllCategoriesDialogOpen(false)}
        >
          <div className="fixed inset-0 z-10 bg-[rgba(45,47,45,0.8)]" />
          <DialogPanel className="fixed inset-y-0 z-20 w-full max-w-[16rem] overflow-y-auto bg-white sm:max-w-[16rem] sm:ring-1 sm:ring-gray-900/10">
            <div className="px-3 py-4 bg-gray-100">
              <div
                className="flex gap-4 items-center"
                onClick={() => setAllCategoriesDialogOpen(false)}
              >
                <FaChevronLeft className="h-3 w-3 text-gray-900" />
                <h2 className="font-bold text-sm text-gray-500">Menu</h2>
              </div>
            </div>
            <div className="mt-4">
              {category && category.length > 0 ? (
                category.map((cat) => (
                  <Link key={cat._id} href={`/${locale}/courses/${cat.slug}`}>
                    <div className="py-2 px-3 text-base text-gray-800 hover:bg-gray-50">
                      {cat.name}
                    </div>
                  </Link>
                ))
              ) : (
                <p>No categories available</p>
              )}
            </div>
          </DialogPanel>
        </Dialog>
      )}
    </>
  );
};

export default Sidebar;
