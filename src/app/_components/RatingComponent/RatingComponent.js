"use client"
import React, { useState } from "react";

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

const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");

  const ratingLabels = ["Poor", "Fair", "Average", "Good", "Excellent"];

  const handleSubmit = async () => {
    // Define the data to send
    const data = {
      rating,
      feedback,
    };

    try {
      // Send a POST request to the backend
      const response = await fetch("https://your-backend-url.com/api/rating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting feedback:", error);
      alert("An error occurred. Please try again later.");
    }
  };

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
