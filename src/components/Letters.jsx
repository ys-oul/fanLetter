import React from "react";
import fakeData from "../fakeData.json";
import {
  List,
  LetterBox,
  Avatar,
  Letter,
  Content,
} from "../styles/LetterStyle.jsx";

function Letters() {
  return <div>{data}</div>;
}

export default Letters;

const data = fakeData.map((item) => {
  let date = new Date(Date.parse(item.createdAt));
  return (
    <>
      <List key={item.id}>
        <LetterBox>
          <Avatar src={item.avatar} alt="avatar" />
          <Letter>
            <p>{item.nickname}</p>
            <p>{date.toLocaleString()}</p>
            <Content>{item.content}</Content>
          </Letter>
        </LetterBox>
      </List>
    </>
  );
});
