import { useState } from "react";
import Descriptin from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/FeedBack/FeedBack";

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Descriptin />
      <Options onClick={() => updateFeedback("good")}>Good</Options>
      <Options onClick={() => updateFeedback("neutral")}>Neutral</Options>
      <Options onClick={() => updateFeedback("bad")}>Bad</Options>
      <Options onClick={() => resetFeedback()}>Reset</Options>
      <Feedback clicks={clicks} />
    </>
  );
}
