import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div onClick={onLeaveFeedback}>
    <button name="good">Good</button>
    <button name="neutral">Neutral</button>
    <button name="bad">Bad</button>
  </div>
);

export default FeedbackOptions;
