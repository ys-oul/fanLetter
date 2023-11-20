import React from "react";
import { useState } from "react";
import { SelectedContext } from "../context/SelectedContext";
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

function Header() {
  const [member, setMember] = useState("Karina");

  // fakeData.forEach((item) => {
  //   //fakeData LocalStorage에 초기화
  //   localStorage.setItem(item.id, JSON.stringify(item));
  // });

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
      <SelectedContext.Provider value={member}>
        <Send />
      </SelectedContext.Provider>
    </>
  );
}

export default Header;
