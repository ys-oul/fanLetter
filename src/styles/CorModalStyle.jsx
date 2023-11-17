import styled from "styled-components";

const Container = styled.div`
  /* 모달창 크기 */
  background-image: linear-gradient(to bottom, #64b3ce, #bda6f6);
  width: 650px;
  height: 390px;
  margin: 50px auto 100px auto;

  border: solid 1.5px #f0faff;
  border-radius: 20px;

  font-family: "Nanum Gothic", sans-serif;
  color: white;
  text-shadow: 1px 1px gray;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const XBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 15px;

  color: white;
  font-size: 20px;
  background-color: transparent;
  border: none;
`;

const LetterBox = styled.div`
  font-family: "Nanum Gothic", sans-serif;
  color: white;
  text-shadow: 1px 1px gray;
`;

const FanInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  box-sizing: border-box;
  margin-top: 3px;
`;

const Avatar = styled.img`
  width: 80px;
  border-radius: 70%;
  margin: 10px auto;
  box-sizing: border-box;
`;

const Name = styled.p`
  margin: auto 10px;
  font-size: 25px;
  font-weight: 800;
`;

const LetterDate = styled.p`
  margin: auto 0px;
`;

const LetterContent = styled.div`
  margin: 10px 25px 20px 25px;
  font-size: 18px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  margin-top: 10px;
  height: 155px;
  padding: 8px;
  box-sizing: border-box;
  border: solid 0.7px white;
  border-radius: 10px;
`;
const InputBox = styled.textarea`
  box-sizing: border-box;
  width: 590px;
  background-color: transparent;
  color: white;
  font-family: inherit;
  font-size: 15px;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const Btn = styled.button`
  box-sizing: border-box;
  margin-left: 515px;
  padding: 10px 25px;
  border: 1.5px solid white;
  border-radius: 7px;
  background-color: transparent;

  font-weight: bold;
  color: white;

  &:hover {
    background-color: white;
    color: #bda6f6;
  }
`;

export {
  Container,
  XBtn,
  LetterBox,
  FanInfo,
  Avatar,
  Name,
  LetterDate,
  LetterContent,
  ContentBox,
  InputBox,
  Btn,
};
