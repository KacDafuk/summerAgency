import Header from "./components/Header/Header";
import "./globalCss/global.css";
import "./globalCss/variables.css";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import Footer from "./components/Footer/Footer";
import GetStartedForm from "./components/GetStartedForm/GetStartedForm";
import { useEffect } from "react";
function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes />
        <GetStartedForm />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
