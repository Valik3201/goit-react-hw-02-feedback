import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @component
 * @description A styled component to display statistics.
 */
const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
`;

/**
 * @component
 * @description A component to render statistics with a styled appearance.
 * @param {Object} props - The component props.
 * @param {number} props.good - The number of 'good' feedback.
 * @param {number} props.neutral - The number of 'neutral' feedback.
 * @param {number} props.bad - The number of 'bad' feedback.
 * @param {number} props.total - The total number of feedback.
 * @param {number} props.positivePercentage - The percentage of positive feedback.
 * @returns {JSX.Element} The rendered Statistics component.
 */
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatsWrapper>
    <p>Bad: {bad}</p>
    <p>Neutral: {neutral}</p>
    <p>Good: {good}</p>
    <p>Total: {total}</p>
    <p>Positive Feedback Percentage: {positivePercentage}%</p>
  </StatsWrapper>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
