import React from "react";
import { useState } from "react";

import fakeData from "../fakeData.json";
import { v4 as uuidv4 } from "uuid";
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' id생성
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
      <Send selectedMember={member} />
      {/* <Letters selectedMember={member} /> */}
    </>
  );
}

export default Header;
