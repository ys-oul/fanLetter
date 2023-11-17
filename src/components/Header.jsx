import React from "react";
import { useState } from "react";

import fakeData from "../fakeData.json";
import headerImg1 from "../shared/aespaHeader.jpg";
import {
  Nav,
  NavBtn,
  ImgWrap,
  WideImg,
  MainHeader,
} from "../styles/HeaderStyle.jsx";

import Send from "../components/Send.jsx";
import Letters from "../components/Letters.jsx";

function Header() {
  const [member, setMember] = useState("Karina");

  return (
    <>
      <ImgWrap>
        <Nav>
          {/* <NavBtn>Aespa Fan Letter colletion</NavBtn> */}
          <ul>
            <NavBtn
              onClick={() => {
                setMember("NingNing");
              }}
              state={member}
              name="NingNing"
            >
              NingNing
            </NavBtn>
            <NavBtn
              onClick={() => {
                setMember("Winter");
              }}
              state={member}
              name="Winter"
            >
              Winter
            </NavBtn>
            <NavBtn
              onClick={() => {
                setMember("Karina");
              }}
              state={member}
              name="Karina"
            >
              Karina
            </NavBtn>
            <NavBtn
              onClick={() => {
                setMember("Giselle");
              }}
              state={member}
              name="Giselle"
            >
              Giselle
            </NavBtn>
          </ul>
        </Nav>

        <WideImg src={headerImg1} alt="aespa img" />
        <MainHeader>Aespa Fan Letter Collection</MainHeader>
      </ImgWrap>
      <Send rawData={fakeData} />
      <Letters selectedMember={member} rawData={fakeData} />
    </>
  );
}

export default Header;
