import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContextProvider } from "../context/AuthContext";
import { PredictionProvider } from "../context/PredictionContext";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <PredictionProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </PredictionProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
