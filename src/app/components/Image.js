import styled from "styled-components";

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding} 0;
`;

Image.defaultProps = {
  width: "100%",
  height: "auto",
  padding: "2em",
};

export default Image;
