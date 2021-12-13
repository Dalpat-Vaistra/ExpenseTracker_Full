import { Fragment, useContext } from "react";
import Head from "next/head";

import HomePage from "../components/Layout/Home";

import AuthContext from "../store/auth-context";

export default function Home() {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      {/* <Head>
        <title>Expense Tracker App</title>
        <meta
          name="description"
          content="Manage Expenses with yearly chart data"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {!authCtx.isLoggedIn && <HomePage />}
      {authCtx.isLoggedIn && (
        <center>
          <h1>Welcome to HomePage</h1>
        </center>
      )}
    </Fragment>
  );
}
