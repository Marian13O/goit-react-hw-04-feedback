import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const optionKeys = Object.keys(options);

  const handleFeedbackClick = option => {
    onLeaveFeedback(option);
  };

  return (
    <div className={style.feedbackcontainer}>
      {optionKeys.map(option => (
        <li className={style.feedbackoptions} key={option}>
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
