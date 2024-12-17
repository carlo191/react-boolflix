export default function ResultSection({ datas }) {
  const languageToFlag = {
    en: "us",
    it: "it",
    fr: "fr",
    es: "es",
    de: "de",
    ja: "jp",
    cn: "cn",
    be: "be",
  };

  const printStars = (rating) => {
    const stars = [];
    const fullStars = Math.round(rating / 2); // Converti da 10 a 5 stelle
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars ? true : false);
    }
    return stars;
  };

  return (
    <div className="row">
      {datas.map((data) => (
        <div key={data.id} className="col-lg-4 col-md-6 mb-4">
          <div className="card h-100">
            {/* Immagine del poster */}
            <img
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w342${data.poster_path}`
                  : "https://via.placeholder.com/342x513?text=No+Image"
              }
              alt={data.title || data.name}
              className="card-img-top"
            />
            <div className="card-overlay">
              <h5>{data.title || data.name}</h5>
              <p>{data.original_title || data.name}</p>
              <small className="d-flex align-items-center">
                <img
                  src={`https://flagcdn.com/16x12/${languageToFlag[
                    data.original_language
                  ]?.toLowerCase()}.png`}
                  alt={
                    data.original_language
                      ? data.original_language.toUpperCase()
                      : "EN"
                  }
                  width="20"
                  height="20"
                  srcset={`https://flagcdn.com/32x24/${languageToFlag[
                    data.original_language
                  ]?.toLowerCase()}.png 2x, 
                           https://flagcdn.com/48x36/${languageToFlag[
                             data.original_language
                           ]?.toLowerCase()}.png 3x`}
                />
              </small>
              <div className="rating">
                {printStars(data.vote_average).map((star, index) =>
                  star ? (
                    <i key={index} className="fa-solid fa-star text-warning" />
                  ) : (
                    <i
                      key={index}
                      className="fa-regular fa-star text-warning"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
