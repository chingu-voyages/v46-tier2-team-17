const Card = ({ result }) => {
  return (
    <div className="recipes-card">
      <div className="image-container">
        <img src={result.thumbnail_url} alt={result.name} />
      </div>
      <div className="content">
        <h2>{result.name}</h2>
      </div>
    </div>
  );
};

export default Card;
