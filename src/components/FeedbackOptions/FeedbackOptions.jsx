export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {getEmoji(option)}
      </button>
    ))}
  </div>
);

const getEmoji = option => {
  switch (option) {
    case 'bad':
      return '😟';
    case 'neutral':
      return '😐';
    case 'good':
      return '😀';
    default:
      return '';
  }
};
