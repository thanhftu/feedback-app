import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedbackData(feedbackData.filter((item) => item.id !== id));
    }
  };
  const addFeedbackHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedbackData([newFeedback, ...feedbackData]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm addFeedbackHandler={addFeedbackHandler} />
        <FeedbackStats feedback={feedbackData} />
        <FeedbackList feedback={feedbackData} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
