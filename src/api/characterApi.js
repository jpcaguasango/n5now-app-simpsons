import { wait } from "../helpers/time";

export const getCharacters = async ({ queryKey }) => {
  const res = await fetch(
    `https://apisimpsons.fly.dev/api/personajes/?page=${queryKey[1]}&limit=20`
  );

  await wait(2000);

  const data = await res.json();

  const dataMapper = {
    results: data.docs.map((item) => ({
      name: item.Nombre,
      image: item.Imagen,
      gender: item.Genero === "Masculino" ? "Male" : "Female",
      occupation: item.Ocupacion,
    })),
    info: {
      pages: data.totalPages,
    },
  };

  return dataMapper;
};
