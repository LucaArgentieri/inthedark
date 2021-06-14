import styled from "styled-components";
import theme from "../theme";

const Box = styled.div`
  margin: 0;
  padding 0;
  width: 100%;
  background: ${(props) => props.background};
`;

Box.defaultProps = {
  background: "#EDEBE6",
};

export default Box;
