import "../styles/globals.css";
import { AuthContextProvider } from "../store/auth-context";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
