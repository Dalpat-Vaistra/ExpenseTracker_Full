import { useRouter } from "next/router";
import { useContext } from "react";
import AuthForm from "../../components/Auth/AuthForm";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  if (!authCtx.isLoggedIn) {
    return <AuthForm value={true} />;
  } else {
    router.replace("/Profile");
  }
};

export default Login;
