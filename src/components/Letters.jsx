import React from "react";
import { useNavigate } from "react-router";

import fakeData from "../fakeData.json";
import {
  To,
  List,
  LetterBox,
  Avatar,
  Letter,
  Fan,
  Timestamp,
  Content,
  NoLetter,
} from "../styles/LetterStyle.jsx";

function Letters(props) {
  const navigate = useNavigate();
  const lettersTo = props.selectedMember;
  const members = {
    NingNing: "닝닝",
    Winter: "윈터",
    Karina: "카리나",
    Giselle: "지젤",
  };
  const allData = [];
  for (let i = 0; i < localStorage.length; i++) {
    allData.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  console.log(allData);

  const letterList = allData.map((item) => {
    if (item.writedTo !== members[lettersTo]) return;
    let date = new Date(Date.parse(item.createdAt));
    return (
      <>
        <List
          key={item.id}
          onClick={() =>
            navigate("/detail", { state: { id: item.id, data: allData } })
          }
        >
          <LetterBox>
            <Avatar src={item.avatar} alt="avatar" />
            <Letter>
              <Fan>{item.nickname}</Fan>
              <Timestamp>{date.toLocaleString()}</Timestamp>
              <Content>{item.content}</Content>
            </Letter>
          </LetterBox>
        </List>
      </>
    );
  });

  return (
    <>
      <To>{lettersTo}</To>
      {letterList.filter((e) => e !== undefined).length !== 0 ? (
        <div>{letterList}</div>
      ) : (
        <NoLetter>
          {lettersTo}에게 남겨진 펜레터가 없습니다. 첫 번째 팬레터의 주인공이
          되주세요!
        </NoLetter>
      )}
      ;
    </>
  );
}

export default Letters;
