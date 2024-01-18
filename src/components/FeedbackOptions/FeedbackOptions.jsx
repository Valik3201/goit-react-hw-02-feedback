import styled from 'styled-components';

const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  font-size: 2rem;
  padding: 0.5rem;
  background-color: transparent;
  filter: grayscale(1);
  border: none;
  cursor: pointer;
  transition: 0.25s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }
`;

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsWrapper>
    {options.map(option => (
      <Button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        aria-label={option}
      >
        {getEmoji(option)}
      </Button>
    ))}
  </OptionsWrapper>
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
