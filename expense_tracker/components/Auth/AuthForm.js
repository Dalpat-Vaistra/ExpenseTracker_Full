// import classes from "./AuthForm.module.css";

import { useContext, useRef, useState } from "react";

import LoadingSpinner from "../UI/LoadingSpinner";
import axios from "axios";
import { useRouter } from "next/router";
import AuthContext from "../../store/auth-context";

const AuthForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const router = useRouter();

  const [isLogin, setIsLogin] = useState(props.value);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log("ISLog :", isLogin);
    if (isLogin) {
      await loginHandler(enteredEmail, enteredPassword);
      setIsLoading(false);

      router.push("/Profile");
    } else {
      const enteredName = nameInputRef.current.value;
      await signupHandler(enteredEmail, enteredName, enteredPassword);
      setIsLoading(false);

      router.push("/Login");
    }
  };

  const switchToggleHandler = () => {
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
    if (!isLogin) {
      nameInputRef.current.value = "";
    }
    setIsLogin((preLogin) => !preLogin);

    // setIsLogin((preLogin) => !preLogin);
  };
  const signupHandler = async (email, name, password) => {
    try {
      const result = await axios({
        url: "http://localhost:3030/api/user",
        method: "POST",
        data: {
          email: email,
          name: name,
          password: password,
        },
      });
      setIsLogin((preLogin) => !preLogin);
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
      setIsLogin((preLogin) => !preLogin);
    }
  };

  const loginHandler = async (email, password) => {
    try {
      const result = await axios({
        url: "http://localhost:3030/api/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: email,
          password: password,
        },
      });

      if (!result) {
        alert("Something Went Wrong");
        router.push("/Login");
      }

      authCtx.login(result.data.token);
      alert(result.data.message);
      router.push("/Profile");
    } catch (err) {
      console.log(err.response);
      alert(err.response.data.Error);
    }
  };

  if (isLoading) {
    return (
      <div className="container">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className="pt-table">
      <div
        className="pt-tablecell page-home absolute"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login" onSubmit={submitHandler}>
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input
                    type="text"
                    className="login__input"
                    placeholder={isLogin ? "User name / Email" : "Email"}
                    ref={emailInputRef}
                  />
                </div>
                {!isLogin && (
                  <div className="login__field">
                    <i className="login__icon fas fa-user"></i>
                    <input
                      type="text"
                      className="login__input"
                      placeholder="Full Name"
                      ref={nameInputRef}
                    />
                  </div>
                )}
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    ref={passwordInputRef}
                  />
                </div>
                <button className="button login__submit">
                  <span className="button__text">
                    {isLogin ? "Log In Now" : "Sign Up Now"}
                  </span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
              </form>
              <div className="toggle_Login">
                <button
                  type="button"
                  className="btn-bot"
                  onClick={switchToggleHandler}
                >
                  {isLogin
                    ? "Create new account"
                    : "Login with existing account"}
                </button>
              </div>
              <div className="social-login">
                <h3>log in via</h3>
                <div className="social-icons">
                  <a
                    href="#"
                    className="social-login__icon fab fa-instagram"
                  ></a>
                  <a
                    href="#"
                    className="social-login__icon fab fa-facebook"
                  ></a>
                  <a href="#" className="social-login__icon fab fa-twitter"></a>
                </div>
              </div>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
