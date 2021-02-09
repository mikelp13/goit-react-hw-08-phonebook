import React from "react";
import { useSelector } from "react-redux";
import { isLogin } from "../../redux/selectors/authSelectors";
import Logo from "../logo/Logo";
import UserMenu from "../userMenu/UserMenu";
import { HeaderStyled } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";

const Header = () => {
  const isAuthenticated = useSelector(isLogin)
  return (
    <HeaderStyled>
      <Logo/>
      <Navigation />
      {isAuthenticated && <UserMenu />}
    </HeaderStyled>
  );
};

export default Header;
