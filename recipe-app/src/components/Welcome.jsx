import { useState } from "react";
import recipes from "../data/recipes";

function Welcome() {
  const [selectedRecipeImage] = useState(
    recipes.results[Math.floor(Math.random() * recipes.results.length)]
      .thumbnail_url,
  );
  return (
    <article
      className="welcome-modal"
      style={{ backgroundImage: `url(${selectedRecipeImage})` }}
    >
      <div className="welcome-modal__overlay">
        <h2 className="welcome-modal__heading">
          Find the best recipes for your ingredients!
        </h2>
      </div>
    </article>
  );
}

export default Welcome;
