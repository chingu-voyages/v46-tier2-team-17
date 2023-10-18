import PropTypes from "prop-types";

const Modal = ({ recipe, difficulty }) => {
  const {
    thumbnail_url,
    name,
    description,
    original_video_url,
    sections,
    instructions,
  } = recipe;

  Modal.propTypes = {
    recipe: PropTypes.shape({
      thumbnail_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      original_video_url: PropTypes.string.isRequired,
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          components: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              raw_text: PropTypes.string.isRequired,
            }),
          ).isRequired,
        }),
      ).isRequired,
      total_time_tier: PropTypes.shape({
        tier: PropTypes.string.isRequired,
      }).isRequired,
      instructions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          display_text: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  };

  const ingredientList = () => {
    return (
      <ul>
        {sections[0].components.map((item) => {
          return <li key={item.id}>{item.raw_text}</li>;
        })}
      </ul>
    );
  };

  const instructionList = () => {
    return (
      <ol>
        {instructions.map((step) => {
          return <li key={step.id}>{step.display_text}</li>;
        })}
      </ol>
    );
  };

  return (
    <>
      <div>
        <div>
          <img src={thumbnail_url} alt="recipe thumbnail" />
        </div>

        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <p>{description}</p>
          <a href={original_video_url}> Video</a>
        </div>
        <div>Difficulty: {difficulty}</div>
        <div>{ingredientList()}</div>
        <div>{instructionList()}</div>
        {/**/}
      </div>
    </>
  );
};

export default Modal;
