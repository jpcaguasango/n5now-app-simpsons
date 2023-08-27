import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/characterApi";
import { Status } from "../helpers/enums/status";
import { QueryKeys } from "../helpers/enums/queryKeys";
import { useTranslation } from "react-i18next";
import CardCharacter from "./CardCharacter";
import styled from "styled-components";
import Spinner from "./Spinner";
import Search from "./Search";
import Paginator from "./Pagination";
import EmptyState from "./EmptyState";
import EmptyImg from "../images/empty.svg";

const ContainerCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Characters() {
  const { t } = useTranslation();
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const { data, status, isLoading } = useQuery({
    queryKey: [QueryKeys.Characters, currentPage],
    queryFn: getCharacters,
  });
  const showCharacters = !isLoading && characters.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (status === Status.Success) {
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    }
  }, [data, status, currentPage]);

  const filtered = useMemo(() => {
    if (search) {
      return [...characters].filter(({ name }) => {
        const isName = name.toLowerCase().includes(search.toLowerCase());
        return isName;
      });
    }

    return [...characters];
  }, [characters, search, currentPage]);

  const renderEmptyState = <EmptyState text={t("emptyState")} img={EmptyImg} />;

  const renderSpinner = isLoading && <Spinner text={t("consulting")} />;

  const renderCharacters = () => {
    return (
      showCharacters && (
        <div>
          <Search searchText={search} setSearchText={setSearch} />
          <ContainerCharacters>
            {renderCardCharacters() || renderEmptyState}
          </ContainerCharacters>
          <Paginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )
    );
  };

  const renderCardCharacters = () => {
    return (
      filtered.length &&
      filtered.map((character, index) => (
        <CardCharacter
          img={character.image}
          name={character.name}
          gender={character.gender}
          species={character.species}
          key={character.name + index}
        />
      ))
    );
  };

  return <div>{renderCharacters() || renderSpinner}</div>;
}

export default Characters;
