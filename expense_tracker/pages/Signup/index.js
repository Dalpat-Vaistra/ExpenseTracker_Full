import { useContext } from "react";
import AuthForm from "../../components/Auth/AuthForm";
import AuthContext from "../../store/auth-context";

const Signup = () => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) {
    return <AuthForm value={false} />;
  } else {
    router.replace("/Profile");
  }
};

export default Signup;
