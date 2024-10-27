import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaStar } from "react-icons/fa";
import { BsPatchExclamationFill } from "react-icons/bs";
import Rating from '../Rating/Rating';
import { Progress } from '@/components/ui/progress';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoSearchSharp } from "react-icons/io5";



const TabsCourseView = () => {
    return (
        <Tabs defaultValue="reviews" className="w-full">
            <TabsList>
                <TabsTrigger value="content" className="md:hidden" >content</TabsTrigger>
                <TabsTrigger value="overview" className="text-base focus:font-semibold">Overview</TabsTrigger>
                <TabsTrigger value="reviews" className="text-base focus:font-semibold">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="content">Make changes to your content here.</TabsContent>
            <TabsContent value="overview">
                <div className="pl-7 pr-22 m-11">
                    <h3 className='text-2xl font-semibold'> Spring Boot 3: Learn Spring 6, Spring Core, Spring REST, Spring MVC, Spring Security, Thymeleaf, JPA, Hibernate, MySQL</h3>

                    <div className="flex items-center justify-start mt-9 gap-7">
                        <div className="flex items-start  flex-col">
                            <div className="flex "> <p className='text-[#4D3105] text-lg font-bold mr-2 '>4.8</p> <div className='mt-1 text-[#B4690E]'><FaStar /></div></div>
                            <div><p className='text-sm	font-thin	text-slate-500'>85,415 ratings</p></div>
                        </div>
                        <div className="flex items-start  flex-col">
                            <div className="flex "> <p className='text-[#3B3D3F] text-lg font-bold mr-2 '>404,348</p> </div>
                            <div><p className='text-sm	font-thin	text-slate-500'>Students</p></div>
                        </div>
                        <div className="flex items-start flex-col">
                            <div className="flex "> <p className='text-[#3B3D3F] text-lg font-bold mr-2 '>33.5 hours</p> </div>
                            <div><p className='text-sm	font-thin	text-slate-500'>Total</p></div>
                        </div>
                    </div>
                    <div className='flex mt-11'>
                        <div className="mt-1"><BsPatchExclamationFill /></div>   <p className="ml-5 font-thin"> Last updated September 2024 </p>

                    </div>
                </div>

            </TabsContent>
            <TabsContent value="reviews">
                <div className="pl-7 pr-22 m-11">
                    <h2 className='text-2xl font-extrabold'>Student feedback</h2>
                    <div className='flex items-center mt-11 gap-11 '>
                        <div className="flex items-center flex-col" >
                            <h2 className="text-7xl text-[#B4690E] font-extrabold">
                                4.6
                            </h2>
                            <Rating ratingValue={4.6} readOnly={true} />
                            <p className='text-base font-semibold text-[#B4690E]'>Course Rating</p>
                        </div>
                        <div className="flex items-center flex-col gap-5 ">
                            <div className='flex gap-12'> <div><Progress value={62} className="w-[500px]" /></div> <div className='flex'> <Rating className="mb" ratingValue={5} readOnly={true} /> <p className='text-sm ml-4 text-indigo-600'> 62% </p> </div>  </div>
                            <div className='flex gap-12'> <div><Progress value={30} className="w-[500px]" /></div> <div className='flex'> <Rating className="mb" ratingValue={4} readOnly={true} /> <p className='text-sm ml-4 text-indigo-600'> 62% </p> </div>  </div>
                            <div className='flex gap-12'> <div><Progress value={6} className="w-[500px]" /></div> <div className='flex'> <Rating className="mb" ratingValue={3} readOnly={true} /> <p className='text-sm ml-4 text-indigo-600'> 62% </p> </div>  </div>
                            <div className='flex gap-12'> <div><Progress value={1} className="w-[500px]" /></div> <div className='flex'> <Rating className="mb" ratingValue={2} readOnly={true} /> <p className='text-sm ml-4 text-indigo-600'> 62% </p> </div>  </div>
                            <div className='flex gap-12'> <div><Progress value={1} className="w-[500px]" /></div> <div className='flex'> <Rating className="mb" ratingValue={1} readOnly={true} /> <p className='text-sm ml-4 text-indigo-600'> 62% </p> </div>  </div>
                        </div>
                    </div>
                    <h2 className='text-2xl font-extrabold mt-16'>Reviews</h2>
                    <div className="flex w-full max-w-md items-center mt-5 ">
                        <Input type="text" placeholder="Search Reviews" />
                        <Button type="submit"><IoSearchSharp /></Button>
                        
                    </div>
                </div>

            </TabsContent>
        </Tabs>
    )
}

export default TabsCourseView