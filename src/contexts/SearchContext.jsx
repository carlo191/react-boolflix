import { createContext, useState } from "react";

export const searchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchFields, setSearchFields] = useState({ word: "" });
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  const search = () => {
    console.log("Ricerca avviata con:", searchFields.word);
    // Logica di ricerca qui
  };

  return (
    <searchContext.Provider
      value={{ series, movies, searchFields, search, setSearchFields }}
    >
      {children}
    </searchContext.Provider>
  );
};
