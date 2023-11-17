import styled from "styled-components";

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
  margin: 40px 20px;
  font-size: 15px;
  font-family: "Nanum Gothic", sans-serif;
  color: white;
  text-shadow: 0.5px 0.5px gray;
`;

const Content = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;

  font-weight: bold;
  font-style: italic;
`;

export { List, LetterBox, Avatar, Letter, Content };
