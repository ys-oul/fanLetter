import styled from "styled-components";

const HomeBtn = styled.button`
  width: 100px;
  height: 45px;
  margin-top: 50px;
  margin-left: 80px;

  border: none;
  border-radius: 7px;
  background-image: linear-gradient(to bottom, #bda6f6, #64b3ce);

  font-family: "Racing Sans One", sans-serif;
  font-size: 18px;
  color: white;
`;

const LetterBox = styled.div`
  background-image: linear-gradient(to bottom, #64b3ce, #bda6f6);
  width: 650px;
  height: 390px;
  margin: 50px auto 100px auto;

  border: solid 1.5px #f0faff;
  border-radius: 20px;

  font-family: "Nanum Gothic", sans-serif;
  color: white;
  text-shadow: 1px 1px gray;
`;

const FanInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  box-sizing: border-box;
  margin-top: 5px;
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

const CorBtns = styled.div`
  box-sizing: border-box;
  margin-left: 445px;
`;

const Btn = styled.button`
  box-sizing: border-box;
  margin-left: 10px;
  padding: 10px 25px;
  border: 1.5px solid white;
  border-radius: 7px;
  background-color: transparent;

  font-weight: bold;
  color: white;
`;

export {
  HomeBtn,
  LetterBox,
  Avatar,
  FanInfo,
  Name,
  LetterDate,
  LetterContent,
  ContentBox,
  CorBtns,
  Btn,
};
