import styled from "styled-components";

function Tag({ text, bg, color }) {
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

    background-color: ${bg};
    color: ${color};
  `;

  return <TagContainer>{text}</TagContainer>;
}

export default Tag;
