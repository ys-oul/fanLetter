import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 60px;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
`;

const NavBtn = styled.button`
  color: ${(props) => (props.name === props.state ? "yellow" : "white")};
  font-size: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  font-family: "Racing Sans One", sans-serif;

  border-style: none;
  background-color: transparent;

  margin: 0px 5px;

  &:hover {
    color: yellowgreen;
  }
`;

const ImgWrap = styled.div`
  position: relative;
`;

const WideImg = styled.img`
  width: 100%;
  /* object-fit: cover; */
  vertical-align: middle;
`;

const MainHeader = styled.h1`
  text-align: center;
  font-size: 52px;
  font-family: "Racing Sans One", sans-serif;
  font-style: italic;
  color: white;
  text-shadow: 2px 2px 2px gray;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { Nav, NavBtn, ImgWrap, WideImg, MainHeader };
