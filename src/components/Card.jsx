export default function Card({ data }) {
  // Funzione per generare stelle in base alla valutazione
  const printStars = (rating) => {
    const stars = [];
    const fullStars = Math.round(rating / 2); // Converti da 10 a 5 stelle
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars ? true : false);
    }
    return stars;
  };

  return (
    <div className="col">
      <div className="card h-100">
        {/* Immagine del poster */}
        <img
          className="card-img-top img-fluid"
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={data.title || data.name}
        />
        {/* Corpo della card */}
        <div className="card-body">
          <h5 className="card-title">{data.title || data.name}</h5>
          <p className="card-text">
            {data.overview
              ? `${data.overview.substring(0, 100)}...`
              : "Nessuna descrizione disponibile."}
          </p>
          {/* Valutazione in stelle */}
          <div className="rating">
            {printStars(data.vote_average).map((star, index) =>
              star ? (
                <i key={index} className="fa-solid fa-star text-warning" />
              ) : (
                <i key={index} className="fa-regular fa-star text-warning" />
              )
            )}
          </div>
        </div>
        {/* Lingua originale */}
        <div className="card-footer">
          <small className="text-muted">
            Lingua: {data.original_language.toUpperCase()}
          </small>
        </div>
      </div>
    </div>
  );
}
