import { AiFillCloseCircle } from "react-icons/ai";

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
      <ul>
        {sections[0].components.map((item) => {
          return <li key={item.id}>{item.raw_text}</li>;
        })}
      </ul>
    );
  }

  // Create a list all the nutrition property's data. But skip the "updated_at" item
  function createNutritionList() {
    return (
      <ul>
        {nutritionKeysArray
          .filter((key) => key !== "updated_at")
          .map((key) => {
            return (
              <li key={key}>
                {key}: {nutrition[key]}
              </li>
            );
          })}
      </ul>
    );
  }

  function createInstructionList() {
    return (
      <ol>
        {instructions.map((step) => {
          return <li key={step.id}>{step.display_text}</li>;
        })}
      </ol>
    );
  }

  return (
    <article className="recipe-modal">
      <div className="recipe-page">
        <button
          title="Close"
          type="button"
          className="recipe-page__close-btn"
          onClick={closeRecipeModal}
        >
          <AiFillCloseCircle />
        </button>
        <section className="recipe-page__video">
          {original_video_url && (
            <video src={original_video_url} controls></video>
          )}
        </section>
        <section className="recipe-page__about">
          <h1 className="recipe-page__title">{name}</h1>
          <div className="recipe-page__tags">
            {/* The "?." operator checks if the property exists*/}
            {total_time_tier?.display_tier ? (
              <span>
                difficulty: {total_time_tier.display_tier.toLowerCase()}
              </span>
            ) : null}
            <span>{yields.toLowerCase()}</span>
          </div>
          <p className="recipe-page__description">{description}</p>
        </section>
        <section className="recipe-page__ingredients">
          <h2>Ingredients</h2>
          {createIngredientsList()}
        </section>
        {nutritionKeysArray.length ? (
          <section className="recipe-page__nutrition">
            <h2>Nutrition</h2>
            {createNutritionList()}
          </section>
        ) : null}
        <section className="recipe-page__instructions">
          {createInstructionList()}
        </section>
      </div>
    </article>
  );
}

export default Modal;
