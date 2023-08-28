import styled from "styled-components";
import logo from "../images/logo.png";
import LanguageSelector from "./LanguageSelector";
import { Colors } from "../helpers/enums/colors";

const { BgYellow } = Colors;

const ToolbarContainer = styled.div`
  background-color: ${BgYellow};
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

const Toolbar = ({ title }) => {
  return (
    <ToolbarContainer>
      <LogoTitleContainer>
        <Logo src={logo}></Logo>
        <Title>{title}</Title>
      </LogoTitleContainer>
      <LanguageSelector />
    </ToolbarContainer>
  );
};

export default Toolbar;
