import styled from "styled-components";

const TagContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  padding: 2px 8px;
  border-radius: 50px;
  margin-top: 4px;

  font-size: 12px;
  font-weight: bold;

  background-color: ${(props) => props.background || ""};
  color: ${(props) => props.color || ""};
`;

function Tag({ text, background, color }) {
  return (
    <TagContainer background={background} color={color}>
      {text}
    </TagContainer>
  );
}

export default Tag;
