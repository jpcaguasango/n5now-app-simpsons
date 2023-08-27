export const getCharacters = async ({ queryKey }) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`
  );

  return res.json();
};
