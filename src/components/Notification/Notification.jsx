import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @component
 * @description A styled notification component for displaying messages.
 */
const NotificationWrapper = styled.p`
  color: red;
  font-size: 20px;
`;

/**
 * @component
 * @description A component to render notifications with a styled appearance.
 * @param {Object} props - The component props.
 * @param {string} props.message - The message to be displayed.
 * @returns {JSX.Element} The rendered Notification component.
 */
export const Notification = ({ message }) => (
  <NotificationWrapper>{message}</NotificationWrapper>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
