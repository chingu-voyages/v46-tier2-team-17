function Error() {
  return (
    <article id="error-modal" className="error-modal">
      <div className="error-modal__overlay">
        <div className="error-modal__icon">🍜</div>
        <h2 className="error-modal__heading">
          Sorry, we couldn't find any recipe for your "
          <span id="ingredient-404"></span>" ingredient.
        </h2>
        <p className="error-modal__text">
          Try these popular ingredients instead:
        </p>
        <ul className="error-modal__search-suggestion-list">
          <li>Chicken</li>
          <li>Salad</li>
          <li>Coconut</li>
        </ul>
      </div>
    </article>
  );
}

export default Error;
