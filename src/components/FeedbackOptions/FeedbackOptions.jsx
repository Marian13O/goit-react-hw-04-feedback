import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';
import React, { useState } from 'react';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionKeys = Object.keys(options);
  const setSelectedOption = useState(null);

  const handleFeedbackClick = option => {
    setSelectedOption(option);
    onLeaveFeedback(option);
  };

  return (
    <div className={style.feedbackcontainer}>
      {optionKeys.map((option, index) => (
        <li className={style.feedbackoptions} key={index}>
          <button
            type="button"
            name={option}
            value={option}
            onClick={() => handleFeedbackClick(option)}
            className={style.feedbackbtn}
          >
            {option}
          </button>
        </li>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
