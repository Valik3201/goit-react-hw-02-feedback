import styled from 'styled-components';

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.5rem;
`;

const StatItem = styled.div``;

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatsWrapper>
    <StatItem>Bad: {bad}</StatItem>
    <StatItem>Neutral: {neutral}</StatItem>
    <StatItem>Good: {good}</StatItem>
    <StatItem>Total: {total}</StatItem>
    <StatItem>Positive Feedback Percentage: {positivePercentage}%</StatItem>
  </StatsWrapper>
);
