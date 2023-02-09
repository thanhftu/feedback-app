import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedbackData} />
        <FeedbackList feedback={feedbackData} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
