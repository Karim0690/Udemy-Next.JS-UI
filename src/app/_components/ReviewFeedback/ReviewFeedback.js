"use client";
import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const ReviewFeedback = () => {
  const [activeButton, setActiveButton] = useState(null); // null, 'like', or 'dislike'

  const handleLike = () => {
    setActiveButton(activeButton === "like" ? null : "like");
  };

  const handleDislike = () => {
    setActiveButton(activeButton === "dislike" ? null : "dislike");
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>Was this review helpful?</p>
      <div style={styles.buttonsContainer}>
        <button
          style={{
            ...styles.button,
            ...(activeButton === "like" ? styles.activeButton : {}),
          }}
          onClick={handleLike}
        >
          <FaThumbsUp style={styles.icon} />
        </button>
        <button
          style={{
            ...styles.button,
            ...(activeButton === "dislike" ? styles.activeButton : {}),
          }}
          onClick={handleDislike}
        >
          <FaThumbsDown style={styles.icon} />
        </button>
        <span style={styles.reportText}>Report</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  text: {
    marginRight: "10px",
    fontSize: "14px",
    color: "#333",
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    border: "1px solid #ccc",
    borderRadius: "50%",
    padding: "10px",
    margin: "0 5px",
    cursor: "pointer",
    backgroundColor: "white",
    transition: "0.3s",
  },
  activeButton: {
    backgroundColor: "#333",
    color: "white",
    borderColor: "#333",
  },
  icon: {
    fontSize: "16px",
  },
  reportText: {
    marginLeft: "9px",
    fontSize: "14px",
    color: "#2F2F31",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default ReviewFeedback;
