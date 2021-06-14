import styled from "styled-components";
import theme from "../theme";

const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.size};
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.defaultProps = {
  size: theme.sizes.container,
  padding: theme.sizes.space,
};

export default Container;
