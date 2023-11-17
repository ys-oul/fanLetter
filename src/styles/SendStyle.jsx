import styled from "styled-components";

const SendBox = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 490px;
  height: 300px;
  margin: 50px auto;
  padding: 30px;
  font-family: "Nanum Gothic", sans-serif;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 3px;
  font-weight: bold;
`;

const InputName = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  border: 1px solid rgb(147, 141, 141);
  border-radius: 7px;
  font-family: inherit;
`;

const InputText = styled.textarea`
  resize: none;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  border: 1px solid rgb(147, 141, 141);
  border-radius: 7px;
  font-family: inherit;
`;

const Select = styled.select`
  width: 100%;
  box-sizing: border-box;
  display: block;
  padding: 5px;
  border: 1px solid rgb(147, 141, 141);
  border-radius: 7px;
  font-family: inherit;
`;

const Button = styled.button`
  font-weight: bold;
  margin-top: 30px;
  margin-left: 400px;
  padding: 10px;
  border: 1px solid rgb(147, 141, 141);
  border-radius: 7px;
  font-family: inherit;
`;

export { SendBox, Label, InputName, InputText, Select, Button };
