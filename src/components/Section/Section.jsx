import styled from 'styled-components';

const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
`;

export const Section = ({ title, children }) => (
  <div>
    <Title>{title}</Title>
    {children}
  </div>
);
