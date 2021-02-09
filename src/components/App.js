import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../redux/operations/authOperations";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser())
 // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
