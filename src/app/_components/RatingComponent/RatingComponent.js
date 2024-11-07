"use client"
import React, { useState } from "react";
import axios from 'axios';

import { FaStar } from "react-icons/fa";
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
// import { useToast } from "@/components/hooks/use-toast"


const RatingComponent = (courseId , userId) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");

  const ratingLabels = ["Poor", "Fair", "Average", "Good", "Excellent"];


  // const handleSubmit = async () => {
  //   const { toast } = useToast();
  
  //   // Check if rating is 0, if so, show a toast and exit the function
  //   if (rating === 0) {
  //     toast({
  //       title: 'Error',
  //       description: 'Please select a rating before submitting your review.',
  //       status: 'error',
  //     });
  //     return; // Exit the function if rating is 0
  //   }
  
  //   // If rating is valid, proceed to create the review
  //   try {
  //     await createReview(courseId, userId, rating, feedback);
  //     toast({
  //       title: 'Success',
  //       description: 'Your review was submitted successfully!',
  //       status: 'success',
  //     });
  //   } catch (error) {
  //     toast({
  //       title: 'Error',
  //       description: error.response ? error.response.data.message : 'An error occurred while submitting your review.',
  //       status: 'error',
  //     });
  //   }
  // };
  
  // const createReview = async (courseId, userId, rating, comment) => {
  //   const response = await axios.post('http://yourserver.com/api/reviews', {
  //     course: courseId,
  //     user: userId,
  //     rating,
  //     comment,
  //   });
  
  //   return response.data;
  // };    
    

  return (
    <div style={styles.container}>
    
      <AlertDialogCancel style={styles.backButton}>back</AlertDialogCancel>

      <h2 style={styles.title}>Why did you leave this rating?</h2>
      <p style={styles.ratingText}>{rating > 0 ? ratingLabels[rating - 1] : "Select a rating"}</p>

      <div style={styles.starContainer}>
        {[...Array(5)].map((_, index) => {
          const starRating = index + 1;
          return (
            <FaStar
              key={index}
              size={30}
              style={{ marginRight: 8, cursor: "pointer" }}
              color={starRating <= (hover || rating) ? "#ffcc00" : "#e4e5e9"}
              onClick={() => setRating(starRating)}
              onMouseEnter={() => setHover(starRating)}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}
      </div>

      <textarea
        style={styles.textArea}
        placeholder="Tell us about your own personal experience taking this course. Was it a good match for you?"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

<AlertDialogFooter>
      <AlertDialogAction style={styles.saveButton} onClick={handleSubmit}>  Save and Continue</AlertDialogAction>
    </AlertDialogFooter>
      

    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 700,
    margin: "0 auto",
    padding: 20,
    borderRadius: 8,
  },
  backButton: {
    alignSelf: "flex-start",
    color: "#6a1b9a",
    cursor: "pointer",
    border: "none",
    background: "none",
    fontSize: "14px",
    marginBottom: 10
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: 8
  },
  ratingText: {
    fontSize: "16px",
    color: "#666",
    marginBottom: 12
  },
  starContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20
  },
  textArea: {
    width: "100%",
    minHeight: "100px",
    minWidth: "400px",
    padding: 10,
    fontSize: "14px",
    borderColor: "#ddd",
    borderRadius: 4,
    marginBottom: 20
  },
  saveButton: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default RatingComponent;
