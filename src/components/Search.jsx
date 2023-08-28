import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Colors } from "../helpers/enums/colors";

const { GreyLight } = Colors;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin: 20px 10px 10px 0px;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid ${GreyLight};
  border-radius: 5px;
  width: 300px;
  font-size: 14px;
`;

function Search({ searchText, setSearchText }) {
  const { t } = useTranslation();
  const handleInputChange = (event) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder={t("search")}
        value={searchText}
        onChange={handleInputChange}
      ></SearchInput>
    </SearchContainer>
  );
}

export default Search;
