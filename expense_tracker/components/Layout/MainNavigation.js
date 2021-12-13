import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  const logoutHandler = () => {
    authCtx.logout();
    router.push("/");
  };
  return (
    <header className={classes.header}>
      <a
        className={classes.logo}
        href="https://www.linkedin.com/in/vaistratechnologies"
        id="logo"
        target="_blank"
      >
        Expense Tracker
      </a>
      {authCtx.isLoggedIn && (
        <nav>
          <ul>
            <Link href="/">
              <li>
                <i className="icon-home"></i>
                <a>Home</a>
              </li>
            </Link>
            <li>
              <Link href="/Profile">
                <span>
                  <i className="icon-user"></i>
                  <a>Profile</a>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/Expense">
                <span>
                  <i className="icon-user"></i>
                  <a>Expenses</a>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/add-expense">
                <span>
                  <i className="icon-user"></i>
                  <a>Add Expense</a>
                </span>
              </Link>
            </li>
            {/* <li>
              <Link href="expense-chart">
                <span>
                  <i className="icon-user"></i>
                  <a>Expense Chart</a>
                </span>
              </Link>
            </li> */}
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MainNavigation;
