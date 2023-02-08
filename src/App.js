import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);
  return (
    <>
      <Header />
      <h1>My App</h1>
      <FeedbackList feedback={feedbackData} />
    </>
  );
}

export default App;
