import MainNavigation from "./MainNavigation";

import AuthContext from "../../store/auth-context";
import { Fragment, useContext } from "react";

const Layout = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Fragment>
      {authCtx.isLoggedIn && <MainNavigation />}
      {props.children}
    </Fragment>
  );
};

export default Layout;
