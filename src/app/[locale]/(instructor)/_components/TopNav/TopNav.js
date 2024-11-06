"use client";

import styles from "./TopNav.module.css";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";

const TopNav = ({ session, locale }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black w-full p-4">
        <div onClick={() => setMobileMenuOpen(true)}>
          <MdMenu className="text-2xl text-white" />
        </div>
      </div>
      {/* sidebar */}
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
            <div className="p-3 flex items-center gap-2 mb-2 bg-gray-50">
              <div className="bg-[#2d2f31] w-16 h-16 rounded-full text-white flex justify-center items-center font-bold text-2xl">
                {session?.user.name.charAt(0).toUpperCase() +
                  session?.user.name.charAt(1).toUpperCase()}
              </div>
              <div className="flex flex-wrap flex-col">
                <p className="font-bold">Hi, {session.user.name}</p>
                <p className="text-gray-400 text-sm">Welcome back</p>
              </div>
            </div>
            <div className="px-2 py-3 border-b-2">
              <Link href="/">
                <p className="text-violet-700">switch to student view</p>
              </Link>
            </div>
            <div className="my-1 divide-y divide-gray-500/10">
              <div className="py-2 px-3">
                <Link
                  href={`${locale}/instructor/courses`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Course
                </Link>
                <Link
                  href={`${locale}/instructor/courses`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Communication{" "}
                </Link>
                <Link
                  href={`${locale}/instructor/courses`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Performance
                </Link>
                <Link
                  href={`${locale}/instructor/courses`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Tools
                </Link>
                <Link
                  href={`${locale}/instructor/courses`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Resources
                </Link>
              </div>
              <div className="py-2 px-3">
                <button onClick={()=>{
                  signOut()
                }}>Log out</button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default TopNav;

{
  /*
                  <Disclosure as="div" className="">

                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Product
                  <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                  />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2"></DisclosurePanel> 
                  </Disclosure> 
                  */
}
