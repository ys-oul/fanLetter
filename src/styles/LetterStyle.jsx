import styled from "styled-components";

const To = styled.h3`
  font-family: "Racing Sans One", sans-serif;
  color: white;
  font-size: 80px;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);

  width: 550px;
  margin: 20px auto;
`;

const List = styled.li`
  list-style: none;
`;

const LetterBox = styled.div`
  width: 550px;
  height: 150px;
  margin: 10px auto;

  display: grid;
  grid-template-columns: 1fr 3fr;

  border: solid 1px #f0faff;
  border-radius: 20px;
`;

const Avatar = styled.img`
  border-radius: 70%;
  margin: auto 0px auto 10px;
`;

const Letter = styled.div`
  margin: 30px 20px;
  font-size: 15px;
  font-family: "Nanum Gothic", sans-serif;
  color: white;
  text-shadow: 0.5px 0.5px gray;
`;

const Fan = styled.p`
  margin-top: 5px;
`;

const Timestamp = styled.p`
  margin-top: 10px;
  font-size: 10px;
`;

const Content = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;

  font-weight: bold;
  font-style: italic;

  margin-top: 10px;
`;

const NoLetter = styled.div`
  width: 550px;
  height: 150px;
  margin: 10px auto;

  font-size: 15px;
  font-family: "Nanum Gothic", sans-serif;
  color: white;
  text-shadow: 0.5px 0.5px gray;
`;

export {
  To,
  List,
  LetterBox,
  Avatar,
  Letter,
  Fan,
  Timestamp,
  Content,
  NoLetter,
};
