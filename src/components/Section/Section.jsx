import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @component
 * @description A styled section component with a title and content.
 */
const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
`;

/**
 * @component
 * @description A component to render sections with a title and content.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the section.
 * @param {ReactNode} props.children - The content to be displayed within the section.
 * @returns {JSX.Element} The rendered Section component.
 */
export const Section = ({ title, children }) => (
  <div>
    <Title>{title}</Title>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
