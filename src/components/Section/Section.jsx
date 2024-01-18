import styled from 'styled-components';

const SectionWrapper = styled.div``;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
`;

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    {children}
  </SectionWrapper>
);
