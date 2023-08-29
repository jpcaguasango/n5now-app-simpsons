import React, { useState } from "react";
import i18n from "../language/i18n";
import styled from "styled-components";
import { Colors } from "../helpers/enums/colors.js";

const { BgBlue } = Colors;

const Button = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: ${({ lang, active }) =>
    lang === active ? BgBlue : "#FBD85D"};
  color: #fff;
  cursor: pointer;
  margin: 0px 4px;
  font-weight: ${({ lang, active }) => (lang === active ? "bold" : "")};
`;

function LanguageSelector() {
  const [activeLang, setActiveLang] = useState("es");
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setActiveLang(language);
  };

  return (
    <div>
      <Button
        lang="en"
        active={activeLang}
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>
      <Button
        lang="es"
        active={activeLang}
        onClick={() => changeLanguage("es")}
      >
        ES
      </Button>
    </div>
  );
}

export default LanguageSelector;
