import { wait } from "../helpers/time";

export const getCharacters = async ({ queryKey }) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`
  );

  await wait(2000);

  return res.json();
};
