import styled from "styled-components";

const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const EmptyStateImage = styled.img`
  width: 200px;
  height: 200px;
`;

const EmptyStateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyStateText = styled.p`
  font-weight: bold;
`;

function EmptyState({ text, img }) {
  return (
    <EmptyStateContainer>
      <EmptyStateContent>
        <EmptyStateImage src={img} alt="empty" />
        <EmptyStateText>{text}</EmptyStateText>
      </EmptyStateContent>
    </EmptyStateContainer>
  );
}

export default EmptyState;
