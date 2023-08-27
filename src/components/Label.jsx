import styled from "styled-components";

const LabelText = styled.label`
  font-size: 10px;
  color: #ddd;
  padding: 0px 4px;
`;

function Label({ text }) {
  return <LabelText>{text}</LabelText>;
}

export default Label;
