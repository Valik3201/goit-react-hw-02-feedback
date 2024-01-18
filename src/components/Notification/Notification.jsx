import styled from 'styled-components';

const NotificationWrapper = styled.p`
  color: red;
  font-size: 20px;
`;

export const Notification = ({ message }) => (
  <NotificationWrapper>{message}</NotificationWrapper>
);
