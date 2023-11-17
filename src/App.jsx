import GlobalStyle from "styles/GlobalStyles.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<Home />} />
          {/* 디테일 페이지 */}
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
