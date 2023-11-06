import { AiFillCloseCircle } from "react-icons/ai";

function Error() {
  return (
    <article id="error-modal" className="error-modal">
      <div className="error-modal__page">
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
          <li>Sausage</li>
          <li>Jalapeño</li>
          <li>Garlic</li>
        </ul>
      </div>
    </article>
  );
}

export default Error;
