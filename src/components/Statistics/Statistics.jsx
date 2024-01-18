import styled from 'styled-components';

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.5rem;
`;

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
