import GlobalStyle from "styles/GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detail from "pages/Detail";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      {/* <Detail /> */}
    </>
  );
}

export default App;
