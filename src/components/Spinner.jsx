import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const SpinnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpinnerCircle = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #41b57f;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const SpinnerText = styled.p`
  font-weight: bold;
`;

function Spinner({ text }) {
  return (
    <SpinnerContainer>
      <SpinnerContent>
        <SpinnerCircle />
        <SpinnerText>{text}</SpinnerText>
      </SpinnerContent>
    </SpinnerContainer>
  );
}

export default Spinner;
