import { useContext } from "react";
import { searchContext } from "../contexts/searchContext";
import ResultSection from "../components/ResultSection";
import "../assets/css/index.css";

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
    <div className="homepage bg-dark">
      {/* Header */}
      <header className="header bg-dark">
        <div className="logo  ">BoolFlix</div>
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
            <button className="btn btn-danger">Cerca</button>
          </form>
        </div>
      </header>

      <main className="container bg-dark ">
        <h1 className="page-title text-light">Cerca Film o Serie TV</h1>{" "}
        {/* Titolo più grande */}
        <ResultSection datas={movies} />
        <ResultSection datas={series} />
      </main >
    </div>
  );
}
