import React from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { FaStar } from "react-icons/fa";
// import { BsPatchExclamationFill } from "react-icons/bs";
// import Rating from "../Rating/Rating";
// import { Progress } from "@/components/ui/progress";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { IoSearchSharp } from "react-icons/io5";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import ReviewFeedback from "../ReviewFeedback /ReviewFeedback";
// import RatingsProgress from "../RatingsProgress/RatingsProgress";
import TabsCourseViewClient from "./TabsCourseViewClient";
import axios from "axios";

const  TabsCourseView = async ({course}) => {
  let reviews = [];

  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_LOCAL_API}/reviews/courseReview/${course._id}`
    );
    console.log(data);
    

    if (data.message === "success") {
      reviews = data.data;
      console.log(reviews);
      
    }
  } catch (error) {
    console.error("Error fetching reviews:", error.message || error);
  }

  return <TabsCourseViewClient course={course} reviews={reviews} />;
};

export default TabsCourseView;