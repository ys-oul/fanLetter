import React from "react";
import {
  LetterBox,
  Avatar,
  FanInfo,
  Name,
  LetterDate,
  LetterContent,
  ContentBox,
  CorBtns,
  Btn,
} from "../styles/DetailStyle.jsx";
import fakeData from "../fakeData.json";

function Detail() {
  let date = new Date(Date.parse(fakeData[0].createdAt));
  return (
    <>
      <LetterBox>
        <FanInfo>
          <Avatar src={fakeData[0].avatar} alt="avatar" />
          <Name>{fakeData[0].nickname}</Name>
          <LetterDate>{date.toLocaleString()}</LetterDate>
        </FanInfo>
        <LetterContent>
          <p>To: {fakeData[0].writedTo}</p>
          <ContentBox>
            <p>{fakeData[0].content}</p>
          </ContentBox>
        </LetterContent>
        <CorBtns>
          <Btn>수정</Btn>
          <Btn>삭제</Btn>
        </CorBtns>
      </LetterBox>
    </>
  );
}

export default Detail;
