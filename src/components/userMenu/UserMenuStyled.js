import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 5px;
  }

  span {
    font-weight: 700;
    margin-right: 12px;
  }
`;

export const LogoutBtn = styled.button`
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  padding: 3px;
  display: inline-block;
  background-color: #49BAA8;

    &:hover {
    background-color:#0C8671;
    color: #fff;
    transition: all 250ms linear;
  }
`