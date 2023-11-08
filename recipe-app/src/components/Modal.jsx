import { FaWindowClose } from "react-icons/fa";
const Modal = ({ recipe, onClose }) => {
  const {
    //thumbnail_url,
    name,
    description,
    total_time_tier,
    yields,
    original_video_url,
    sections,
    instructions,
    nutrition,
  } = recipe;

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

  const filterKeys = (key) => {
    return key !== "updated_at";
  };

  const nutritionList = () => {
    return (
      <ul>
        {Object.keys(nutrition)
          .filter(filterKeys)
          .map((key) => {
            return (
              <li key={key}>
                {key}: {nutrition[key]}
              </li>
            );
          })}
      </ul>
    );
  };

  return (
    <div className="recipe-container">
      <div className="recipe-modal">
        <div className="recipe-modal__close">
          <div onClick={onClose}>
            <FaWindowClose />
          </div>
        </div>
        <div className="recipe-modal__video">
          {original_video_url && (
            <video src={original_video_url} controls></video>
          )}
        </div>
        <div className="recipe-modal__name">
          <h2>{name}</h2>
        </div>
        <div className="recipe-modal__description">
          <p>{description}</p>
        </div>
        <div className="recipe-modal__difficulty">
          <p>Difficulty: {total_time_tier?.display_tier}</p>{" "}
          {/* The "?." operator is there to check if the property exists.*/}
          <p>{yields}</p>
        </div>
        <div className="recipe-modal__ingredients">
          <h3>Ingredients:</h3>
          {ingredientList()}
        </div>
        <div className="recipe-modal__nutrition">
          <h3>Nutrition</h3>
          {nutritionList()}
        </div>
        <div className="recipe-modal__instructions">
          {" "}
          <strong>Steps:</strong>
          {instructionList()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
