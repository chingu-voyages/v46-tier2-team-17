import { AiFillCloseCircle } from "react-icons/ai";
import uniqid from "uniqid";

function Modal({ recipe, closeRecipeModal }) {
  const {
    name,
    description,
    total_time_tier,
    yields,
    original_video_url,
    sections,
    instructions,
    nutrition,
  } = recipe;

  const nutritionKeysArray = Object.keys(nutrition);

  function createIngredientsList() {
    return (
      <ul className="text">
        {sections[0].components.map((item) => {
          return <li key={uniqid()}>{item.raw_text}</li>;
        })}
      </ul>
    );
  }

  // Create a list all the nutrition property's data. But skip the "updated_at" item
  function createNutritionList() {
    return (
      <ul className="text">
        {nutritionKeysArray
          .filter((key) => key !== "updated_at")
          .map((key) => {
            return (
              <li key={uniqid()}>
                {key}: {nutrition[key]}
              </li>
            );
          })}
      </ul>
    );
  }

  function createInstructionList() {
    return (
      <ol className="text">
        {instructions.map((step) => {
          return <li key={step.id}>{step.display_text}</li>;
        })}
      </ol>
    );
  }

  return (
    <article
      className="recipe-modal"
      onClick={(e) =>
        e.target.className === "recipe-modal" && closeRecipeModal()
      }
    >
      <div className="recipe-page">
        <button
          title="Close"
          type="button"
          className="recipe-page__close-btn"
          onClick={closeRecipeModal}
        >
          <AiFillCloseCircle />
        </button>
        <section className="about-recipe">
          <h1 className="about-recipe__title heading">{name}</h1>
          {original_video_url && (
            <video
              className="about-recipe__video"
              src={original_video_url}
              controls
            ></video>
          )}
          <div className="about-recipe__tags">
            {/* The "?." operator checks if the property exists*/}
            {total_time_tier?.display_tier ? (
              <span>
                difficulty: {total_time_tier.display_tier.toLowerCase()}
              </span>
            ) : null}
            <span>{yields.toLowerCase()}</span>
          </div>
          <p className="about-recipe__description text">{description}</p>
        </section>
        <section className="recipe-page__ingredients">
          <h2 className="heading">Ingredients</h2>
          {createIngredientsList()}
        </section>
        {nutritionKeysArray.length ? (
          <section className="recipe-page__nutrition">
            <h2 className="heading">Nutrition</h2>
            {createNutritionList()}
          </section>
        ) : null}
        <section className="recipe-page__instructions">
          <h2>Steps</h2>
          {createInstructionList()}
        </section>
      </div>
    </article>
  );
}

export default Modal;
