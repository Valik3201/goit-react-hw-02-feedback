export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <div>Bad: {bad}</div>
    <div>Neutral: {neutral}</div>
    <div>Good: {good}</div>
    <div>Total: {total}</div>
    <div>Positive Feedback Percentage: {positivePercentage}%</div>
  </div>
);
