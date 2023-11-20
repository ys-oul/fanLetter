import React, { useContext, useRef, useState } from "react";
import {
  SendBox,
  Label,
  InputName,
  InputText,
  Select,
  Button,
} from "../styles/SendStyle.jsx";
import Letters from "../components/Letters.jsx";

import avatarImg from "../shared/personIcon.png";

import { v4 as uuidv4 } from "uuid";
import { SelectedContext } from "context/SelectedContext.js";
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' id생성

const newData = (now, name, content, to) => {
  if (name.length === 0 || content.length === 0) return;
  const update = {
    createdAt: now,
    nickname: name,
    avatar: avatarImg,
    content: content,
    writedTo: to,
    id: uuidv4(),
  };
  console.log(update);

  localStorage.setItem(update.id, JSON.stringify(update));
};

function Send() {
  //userRef 선언
  const nameRef = useRef(null);
  const letterRef = useRef(null);
  const toRef = useRef(null);

  const [rnd, setRnd] = useState(false);

  return (
    <>
      <SendBox>
        <form action="">
          <ul>
            <li>
              <Label for="name">닉네임</Label>{" "}
              <InputName
                type="text"
                name="name"
                maxLength="20"
                placeholder="최대 20글자까지 작성할 수 있습니다"
                required
                ref={nameRef}
              />
            </li>
            <li>
              <Label for="content">내용</Label>{" "}
              <InputText
                name="content"
                rows="3"
                maxLength="100"
                placeholder="최대 100글자까지 작성할 수 있습니다"
                required
                ref={letterRef}
              />
            </li>
            <li>
              <Label for="member">누구한테 보내실 건가요?</Label>
              <Select id="" name="member" ref={toRef}>
                <option value="카리나">카리나</option>
                <option value="윈터">윈터</option>
                <option value="닝닝">닝닝</option>
                <option value="지젤">지젤</option>
              </Select>
            </li>
          </ul>
          <Button
            onClick={() => {
              newData(
                new Date(),
                nameRef.current.value,
                letterRef.current.value,
                toRef.current.value
              );
              setRnd(!rnd);
            }}
          >
            펜레터 등록
          </Button>
        </form>
      </SendBox>
      <Letters />
    </>
  );
}

export default Send;
