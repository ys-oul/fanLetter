import React from "react";
import headerImg1 from "../shared/aespaHeader.jpg";
import {
  Nav,
  NavBtn,
  ImgWrap,
  WideImg,
  MainHeader,
} from "../styles/HeaderStyle.jsx";

function Header() {
  return (
    <div>
      <ImgWrap>
        <Nav>
          <NavBtn>Aespa Fan Letter colletion</NavBtn>
          <ul>
            <NavBtn>NingNing</NavBtn>
            <NavBtn>Winter</NavBtn>
            <NavBtn>Karina</NavBtn>
            <NavBtn>Giselle</NavBtn>
          </ul>
        </Nav>

        <WideImg src={headerImg1} alt="aespa img" />
        <MainHeader>Aespa Fan Letter Collection</MainHeader>
      </ImgWrap>
    </div>
  );
}

export default Header;
