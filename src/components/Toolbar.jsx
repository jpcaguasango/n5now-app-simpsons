import styled from "styled-components";
import logo from "../images/logo.png";

const ToolbarContainer = styled.div`
  background-color: #000;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 55px;
  height: auto;
  margin: 0px 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Button = styled.button`
  background-color: #555;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
`;

const Toolbar = ({ title }) => {
  return (
    <ToolbarContainer>
      <LogoTitleContainer>
        <Logo src={logo}></Logo>
        <Title>{title}</Title>
      </LogoTitleContainer>

      <Button>Internacionalizacion</Button>
    </ToolbarContainer>
  );
};

export default Toolbar;
