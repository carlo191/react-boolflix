import { useContext } from "react";
import { searchContext } from "../contexts/searchContext";
import ResultSection from "../components/ResultSection.jsx";

export default function HomePage() {
  const { series, movies, searchFields, search, setSearchFields } =
    useContext(searchContext);

  const handleSearchFields = (e) => {
    const newValue = e.target.value;

    setSearchFields({
      word: newValue,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(); // Effettua la ricerca quando si invia il form
  };

  return (
    <div className="container py-5">
      <h1>Boolflix</h1>

      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <input
            id="search-input"
            onChange={handleSearchFields}
            value={searchFields.word}
            className="form-control"
            type="text"
            name="word"
            placeholder="Cerca film o serie TV..."
          />
          <button className="btn btn-primary">Cerca</button>
        </form>
      </div>

      <ResultSection datas={movies}>
        <h2>Film</h2>
      </ResultSection>

      <ResultSection datas={series}>
        <h2>Serie TV</h2>
      </ResultSection>
    </div>
  );
}
