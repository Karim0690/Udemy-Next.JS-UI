import RadialProgress from '@/app/_components/RadialProgress/RadialProgress'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import VideoCoursePlayer from '@/app/_components/VideoCoursePlayer/VideoCoursePlayer'


const page = () => {

    return (
        <>
            <div className="w-full  mx-auto   bg-[#2D2F31] text-white shadow-sm h-14">
                <div className="px-2 py-3">
                    <div className='flex justify-between	'>
                        <div className='flex'>
                            <Image className='mr-3 mb-2' src={"https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"} height={40} width={80} />
                            <Separator orientation="vertical" className="h-7 w-[1px] bg-gray-400" />
                            <Link href="#" className="text-sm hover:text-gray-400 ">
                                <h1 className="ml-3 mt-1  text-lg hover:text-gray-400 ">Tailwind CSS From Scratch | Learn By Building Projects</h1>
                            </Link>
                        </div>
                        <div className="flex">
                            <Popover>
                                <PopoverTrigger>
                                    <div className='flex'>
                                        <RadialProgress percentage={100} />
                                        <div className='flex items-center ml-3 mb-2 hover:text-stone-300'>
                                            <p className='mt-1 mx-3'>progress</p>
                                            <IoIosArrowDown className='mt-3' />
                                        </div>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className="bg-white text-base font-semibold">15 of 32 complete.</PopoverContent>
                            </Popover>
                            <AlertDialog>

                                <AlertDialogTrigger  className='mx-5 bg-[#2D2F31] hover:bg-[#3D3F41] border-2'>ٍٍ
                                        <p className="mx-2">share</p>  <FaShare />
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-white">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Share this course</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>


                    </div>


                </div>
            </div>
            <div>

                <VideoCoursePlayer />

                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis, urna ac consectetur bibendum, urna nunc finibus justo, ac condimentum metus eros sed felis. Nulla
            </div>
        </>

    )
}

export default page