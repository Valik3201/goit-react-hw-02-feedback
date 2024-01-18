import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @component
 * @description A styled wrapper for feedback options with buttons.
 */
const OptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

/**
 * @component
 * @description A styled button for feedback options.
 */
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

/**
 * @component
 * @description A component to render feedback options as buttons.
 * @param {Object} props - The component props.
 * @param {string[]} props.options - An array of feedback options.
 * @param {Function} props.onLeaveFeedback - The callback function to handle feedback selection.
 * @returns {JSX.Element} The rendered FeedbackOptions component.
 */
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

/**
 * @function
 * @description A utility function to get emoji based on the feedback option.
 * @param {string} option - The feedback option.
 * @returns {string} The corresponding emoji.
 */
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
