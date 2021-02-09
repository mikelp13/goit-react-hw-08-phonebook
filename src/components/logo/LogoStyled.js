import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  padding: 5px 0;
  img {
    height: 50px;
  }
  &:hover, &:focus {
    transform: scale(1.2);
    transition: transform 250ms linear
  }
`;
