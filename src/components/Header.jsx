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
import { useDispatch, useSelector } from "react-redux";

function Header() {
  // const [member, setMember] = useState("Karina");

  // fakeData.forEach((item) => {
  //   //fakeData LocalStorage에 초기화
  //   localStorage.setItem(item.id, JSON.stringify(item));
  // });

  const dispatch = useDispatch(); //dispatch 생성
  const member = useSelector((state) => {
    return state.selected.member;
  });

  return (
    <>
      <ImgWrap>
        <Nav>
          {/* <NavBtn>Aespa Fan Letter colletion</NavBtn> */}
          <ul>
            <NavBtn
              onClick={() => {
                dispatch({ type: "NINGNING" });
              }}
              name="NingNing"
            >
              NingNing
            </NavBtn>
            <NavBtn
              onClick={() => {
                dispatch({ type: "WINTER" });
              }}
              name="Winter"
            >
              Winter
            </NavBtn>
            <NavBtn
              onClick={() => {
                dispatch({ type: "KARINA" });
              }}
              name="Karina"
            >
              Karina
            </NavBtn>
            <NavBtn
              onClick={() => {
                dispatch({ type: "GISELLE" });
              }}
              name="Giselle"
            >
              Giselle
            </NavBtn>
          </ul>
        </Nav>

        <WideImg src={headerImg1} alt="aespa img" />
        <MainHeader>Aespa Fan Letter Collection</MainHeader>
      </ImgWrap>
      <Send />
    </>
  );
}

export default Header;
