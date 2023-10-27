import PropTypes from "prop-types";

const Card = ({ result, onClick }) => {
  const { name, thumbnail_url } = result;
  Card.propTypes = {
    result: PropTypes.shape({
      thumbnail_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  };
  return (
    <div
      className="recipes-card"
      style={{ backgroundImage: `url(${thumbnail_url})` }}
      onClick={onClick}
    >
      <div className="content">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
