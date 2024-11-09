"use client";

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
} from "@/components/ui/alert-dialog";
import axios from "axios";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const RatingComponent = ({ courseId, userId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");

  const ratingLabels = ["Poor", "Fair", "Average", "Good", "Excellent"];

  const handleSubmit = async () => {
    if (rating === 0) {
      toast.warning("Please provide a rating before submitting.");
      return;
    }

    try {
      const reviewData = await createReview(courseId, userId, rating, feedback);
      toast.success("Review submitted successfully!");
      console.log("Review submitted:", reviewData);
    } catch (error) {
      console.error("Failed to submit review:", error.message);
      toast.error("Failed to submit review. Please try again.");
    }
  };

  const createReview = async (courseId, userId, rating, comment) => {
    try {
      const response = await axios.post(
        `https://udemy-eosin-eight.vercel.app/reviews`,
        {
          course: courseId,
          user: userId,
          rating,
          comment,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div style={styles.container}>
      <AlertDialogCancel style={styles.backButton}>Back</AlertDialogCancel>

      <h2 style={styles.title}>Why did you leave this rating?</h2>
      <p style={styles.ratingText}>
        {rating > 0 ? ratingLabels[rating - 1] : "Select a rating"}
      </p>

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
        placeholder="Tell us about your experience with this course."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <AlertDialogFooter>
        <AlertDialogAction style={styles.saveButton} onClick={handleSubmit}>
          Save and Continue
        </AlertDialogAction>
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
    marginBottom: 10,
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: 8,
  },
  ratingText: {
    fontSize: "16px",
    color: "#666",
    marginBottom: 12,
  },
  starContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 20,
  },
  textArea: {
    width: "100%",
    minHeight: "100px",
    minWidth: "400px",
    padding: 10,
    fontSize: "14px",
    borderColor: "#ddd",
    borderRadius: 4,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default RatingComponent;
