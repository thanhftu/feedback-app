import React from "react";
import FeedbackItem from "./Feedbackitem";

const FeedbackList = ({ feedback }) => {
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FeedbackList;
