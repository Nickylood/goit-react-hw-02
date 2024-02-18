import { useState, useEffect } from "react";
import Descriptin from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/FeedBack/FeedBack";
import Notification from "./components/Notification";

const initLocal = { good: 0, neutral: 0, bad: 0 };

const getInitialFeedback = () => {
  const localStorage = window.localStorage.getItem("feedback");
  return localStorage !== null ? JSON.parse(localStorage) : initLocal;
};

export default function App() {
  const [clicks, setClicks] = useState(getInitialFeedback);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setClicks(initLocal);
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const positiveFeedback = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Descriptin />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          clicks={clicks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
