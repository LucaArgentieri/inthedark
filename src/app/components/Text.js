import styled from "styled-components";

import theme from "../theme";

const Text = styled.span`
  display: inline-block;
  margin: 0;
  padding ${(props) => props.padding} 0;
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  text-transform: ${(props) => props.transform};
  font-weight: ${(props) => props.weight};
  text-decoration: ${(props) => props.decoration};
  font-family: ${(props) => props.font};
  word-spacing: 2px;
`;

Text.defaultProps = {
  size: theme.sizes.font1,
  color: theme.colors.black,
  font: theme.fonts.paragraph,
  padding: theme.sizes.paddingText,
  transform: "none",
  weight: "normal",
};

export default Text;
