import styled from "styled-components";
import { Colors } from "../helpers/enums/colors";

const { Grey } = Colors;

const LabelText = styled.label`
  font-size: 10px;
  font-weight: bold;
  color: ${Grey};
  padding: 0px 4px;
`;

function Label({ text }) {
  return <LabelText>{text}</LabelText>;
}

export default Label;
