import { createContext, useState } from "react";

export const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchFields, setSearchFields] = useState({
    word: "",
  });

  const search = async () => {
    const apiKey = import.meta.env.VITE_THEMOVIEDB_API_KEY; // Usa la chiave API dalle variabili d'ambiente
    const movieUrl = import.meta.env.VITE_THEMOVIEDB_MOVIES_API_URL;
    const seriesUrl = import.meta.env.VITE_THEMOVIEDB_SERIES_API_URL;

    try {
      const [moviesResponse, seriesResponse] = await Promise.all([
        fetch(`${movieUrl}?query=${searchFields.word}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }),
        fetch(`${seriesUrl}?query=${searchFields.word}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }),
      ]);

      const moviesData = await moviesResponse.json();
      const seriesData = await seriesResponse.json();

      setMovies(moviesData.results || []); // Aggiorna i film
      setSeries(seriesData.results || []); // Aggiorna le serie
    } catch (error) {
      console.error("Errore durante la ricerca:", error);
    }
  };

  return (
    <searchContext.Provider
      value={{
        series,
        movies,
        searchFields,
        search,
        setSearchFields,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
