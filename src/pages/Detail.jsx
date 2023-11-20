import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import {
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
} from "../styles/DetailStyle.jsx";

import CorModal from "../components/CorModal.jsx";

function delHandler(id) {
  // alert(id);
  localStorage.removeItem(id);
}
function delBtn(id, navigate) {
  if (window.confirm("정말 삭제하시겠습니까?")) {
    delHandler(id);
    navigate("/");
  }
}

function Detail() {
  const receivedData = useLocation();
  const id = receivedData.state.id;
  const target = receivedData.state.data.find((element) => element.id == id);
  const navigate = useNavigate();

  const [content, setContent] = useState(target.content);
  const [modal, setModal] = useState(false); //모달창
  const showModal = () => {
    setModal(true);
  };

  let date = new Date(Date.parse(target.createdAt));
  return (
    <>
      <HomeBtn onClick={() => navigate("/")}>Home</HomeBtn>
      <LetterBox>
        <FanInfo>
          <Avatar src={target.avatar} alt="avatar" />
          <Name>{target.nickname}</Name>
          <LetterDate>{date.toLocaleString()}</LetterDate>
        </FanInfo>
        <LetterContent>
          <p>To : {target.writedTo}</p>
          <ContentBox>
            <p>{content}</p>
          </ContentBox>
        </LetterContent>
        <CorBtns>
          <Btn
            onClick={() => {
              showModal();
            }}
          >
            수정
          </Btn>
          {modal && (
            <CorModal
              id={id}
              setModal={setModal}
              date={date}
              target={target}
              content={content}
              setContent={setContent}
            />
          )}
          <Btn
            onClick={() => {
              delBtn(id, navigate);
            }}
          >
            삭제
          </Btn>
        </CorBtns>
      </LetterBox>
    </>
  );
}

export default Detail;
