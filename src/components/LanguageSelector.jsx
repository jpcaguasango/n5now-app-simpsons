import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
import i18n from "../language/i18n";
import styled from "styled-components";

const Button = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: ${({ lang, activeLang }) =>
    lang === activeLang ? "#41b57f" : "#000"};
  color: #fff;
  cursor: pointer;
  margin: 0px 4px;
  font-weight: ${({ lang, activeLang }) => (lang === activeLang ? "bold" : "")};
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
        activeLang={activeLang}
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>
      <Button
        lang="es"
        activeLang={activeLang}
        onClick={() => changeLanguage("es")}
      >
        ES
      </Button>
    </div>
  );
}

export default LanguageSelector;
