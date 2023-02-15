import { useContext } from "react";
import FeedbackItem from "./Feedbackitem";
import Spinner from "./shared/Spinner";

import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackList = ({ handleDelete }) => {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0))
    return <h1>No feedback yet</h1>;
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              item={item}
              key={item.id}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  //   <div>
  //     {feedback.map((item) => (
  //       <FeedbackItem item={item} key={item.id} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // );
};

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
