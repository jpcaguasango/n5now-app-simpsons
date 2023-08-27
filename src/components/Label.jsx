import styled from "styled-components";

function Label({ text }) {
  const LabelText = styled.label`
    font-size: 10px;
    color: #ddd;
  `;
  return <LabelText>{text}</LabelText>;
}

export default Label;
