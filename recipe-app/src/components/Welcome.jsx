import recipes from "../data/recipes";

function Welcome() {
  const selectedRecipeDataObj =
    recipes.results[Math.floor(Math.random() * recipes.results.length)];
  const selectedRecipeImage = selectedRecipeDataObj.thumbnail_url;

  return (
    <article
      className="welcome-modal"
      style={{ backgroundImage: `url(${selectedRecipeImage})` }}
    >
      <h2 className="welcome-modal__heading">
        Find the best recipes for your ingredients!
      </h2>
    </article>
  );
}

export default Welcome;
