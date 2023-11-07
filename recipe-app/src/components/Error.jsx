import { AiFillCloseCircle } from "react-icons/ai";
import fetchRecipes from "../fetchRecipes";

function Error({ setAllRecipes }) {
  function suggestionClick(e) {
    e.preventDefault();
    fetchRecipes(setAllRecipes, null, "sausage", null, true);
  }
  return (
    <article id="error-modal" className="error-modal">
      <div className="error-modal__overlay">
        <button
          title="Close"
          type="button"
          className="error-modal__close-btn"
          onClick={(e) =>
            (e.currentTarget.closest("#error-modal").style.display = "none")
          }
        >
          <AiFillCloseCircle />
        </button>
        <div className="error-modal__icon">🍜</div>
        <h2 className="error-modal__heading">
          Sorry, we couldn't find any recipe for your "
          <span id="ingredient-404"></span>" ingredients.
        </h2>
        <p className="error-modal__text">
          Try these popular ingredients instead:
        </p>
        <ul className="error-modal__search-suggestion-list">
          <li>
            <a href="#" onClick={suggestionClick}>
              Sausage
            </a>
          </li>

          <li>
            <a href="#" onClick={suggestionClick}>
              Jalapeño
            </a>
          </li>
          <li>
            <a href="#" onClick={suggestionClick}>
              Garlic
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Error;
