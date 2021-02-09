import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  margin-left: 30px;
  margin-right: auto;

  .navagationListItem:not(:last-child) {
    margin-right: 20px;
  }

  .navagationLink {
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }

  .activeLink {
    color: #134780;
    border-radius:2px;
    border-bottom: 2px solid #134780;
  }
`;
