import React from "react";
import styled from "styled-components";
import Header from "../components/Header.jsx";

const PageStyle = styled.div`
  background-image: linear-gradient(
    to bottom,
    #000000,
    #3d535b,
    #64b3ce,
    #bda6f6
  );
  padding-bottom: 150px;
`;

function Home() {
  return (
    <>
      <PageStyle>
        <Header />
      </PageStyle>
    </>
  );
}

export default Home;
