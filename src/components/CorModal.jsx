import React, { useState } from "react";
import {
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
} from "../styles/CorModalStyle.jsx";

const updateData = (target, content) => {
  const update = {
    createdAt: target.createdAt,
    nickname: target.nickname,
    avatar: target.avatar,
    content: content,
    writedTo: target.writedTo,
    id: target.id,
  };
  console.log(update);

  localStorage.setItem(target.id, JSON.stringify(update));
};

function CorModal({ setModal, date, target, content, setContent }) {
  const [corrected, setCorrected] = useState(content);
  const inputHandler = (event) => setCorrected(event.target.value);
  // 모달 끄기
  const closeModal = () => {
    setModal(false);
  };

  const corBtnHandler = (target, corContent) => {
    if (corContent === content) {
      alert("수정사항이 없습니다");
      return;
    }
    setContent(corContent);
    updateData(target, corContent);
    closeModal();
  };

  return (
    <Container>
      <XBtn onClick={closeModal}>X</XBtn>
      <LetterBox>
        <FanInfo>
          <Avatar src={target.avatar} alt="avatar" />
          <Name>{target.nickname}</Name>
          <LetterDate>{date.toLocaleString()}</LetterDate>
        </FanInfo>
        <LetterContent>
          <p>To : {target.writedTo}</p>
          <ContentBox>
            <InputBox
              value={corrected}
              onChange={inputHandler}
              rows="5"
              maxLength="100"
            />
          </ContentBox>
        </LetterContent>
        <Btn
          onClick={() => {
            corBtnHandler(target, corrected);
          }}
        >
          수정 완료
        </Btn>
      </LetterBox>
    </Container>
  );
}

export default CorModal;
