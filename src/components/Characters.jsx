import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/characterApi";
import { Status } from "../helpers/enums/status";
import { QueryKeys } from "../helpers/enums/queryKeys";
import CardCharacter from "./CardCharacter";
import styled from "styled-components";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const { data, status, isLoading } = useQuery({
    queryKey: [QueryKeys.Characters],
    queryFn: getCharacters,
  });

  //   const displayCharacters = useMemo(() => {
  //     const defaultItem = Array.from(new Array(20));
  //     if (isLoading) return defaultItem;
  //     return characters;
  //   }, [characters]);

  useEffect(() => {
    if (status === Status.Success) {
      setCharacters(data.results);
    }
  }, [data, status]);

  const ContainerCharacters = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <ContainerCharacters>
      {characters.length &&
        characters.map((character) => (
          <CardCharacter
            img={character.image}
            name={character.name}
            gender={character.gender}
            species={character.species}
            key={character?.name}
          />
        ))}
    </ContainerCharacters>
  );
}

export default Characters;
