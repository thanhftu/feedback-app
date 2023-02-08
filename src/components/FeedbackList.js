import React from "react";
import FeedbackItem from "./Feedbackitem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) return <h1>No feedback yet</h1>;
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem item={item} key={item.id} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
