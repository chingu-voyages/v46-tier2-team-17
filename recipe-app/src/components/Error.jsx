function Error() {
  return (
    <article className="error-component">
      <div className="error-component__overlay">
        <div className="error-component__icon">🍜</div>
        <h2 className="error-component__heading">
          Sorry, we couldn’t find any recipe for your “xxxxx” ingredient.
        </h2>
        <p className="error-component__text">
          Try these popular ingredients instead:
        </p>
        <ul className="error-component__search-suggestion-list">
          <li>Chicken</li>
          <li>Salad</li>
          <li>Coconut</li>
        </ul>
      </div>
    </article>
  );
}

export default Error;
