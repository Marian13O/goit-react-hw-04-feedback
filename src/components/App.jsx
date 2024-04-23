import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import CustomNotification from './CustomNotification/CustomNotification';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotal = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  const handleFeedback = name => {
    setFeedback(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countPercentage = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const total = countTotal(feedback);
  const positivePercentage = countPercentage(feedback);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <CustomNotification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
