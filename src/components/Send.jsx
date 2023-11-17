import React from "react";
import {
  SendBox,
  Label,
  InputName,
  InputText,
  Select,
  Button,
} from "../styles/SendStyle.jsx";

import { v4 as uuidv4 } from "uuid";
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function Send(props) {
  return (
    <>
      <SendBox>
        <ul>
          <li>
            <Label for="name">닉네임</Label>{" "}
            <InputName
              type="text"
              name="name"
              maxLength="20"
              placeholder="최대 20글자까지 작성할 수 있습니다"
              required
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
            />
          </li>
          <li>
            <Label for="member">누구한테 보내실 건가요?</Label>
            <Select id="" name="member">
              <option value="karina">카리나</option>
              <option value="winter">윈터</option>
              <option value="ningning">닝닝</option>
              <option value="giselle">지젤</option>
            </Select>
          </li>
        </ul>
        <Button>펜레터 등록</Button>
      </SendBox>
    </>
  );
}

export default Send;
