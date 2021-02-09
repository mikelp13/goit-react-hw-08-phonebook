import React from "react";
import { useSelector } from "react-redux";
import { isLogin } from "../../../redux/selectors/authSelectors";
import phonebookRoutes from "../../../routes/phonebookRoutes";
import NavigationListItem from "./NavigationListItem";
import { NavList } from "./NavigationStyled";

const Navigation = () => {
  const isAuthenticated = useSelector(isLogin);
  return (
    <NavList>
      {phonebookRoutes.map((route)=>(
        <NavigationListItem {...route} isAuth={isAuthenticated} key={route.path}/>
      ))}
    </NavList>
  );
};

export default Navigation;
