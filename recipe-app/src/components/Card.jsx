const Card = ({ result }) => {
  return (
    <div
      className="recipes-card"
      style={{ backgroundImage: `url(${result.thumbnail_url})` }}
    >
      <div className="content">
        <h2>{result.name}</h2>
      </div>
    </div>
  );
};

export default Card;
