import { useState, useEffect } from "react";
import uniqid from "uniqid";
import Card from "./Card";
import Error from "./Error";
import RecipeModal from "./RecipeModal";
import Welcome from "./Welcome";
import data from "../data/recipes";

function Gallery({ setAllRecipes, allRecipes, searchedIngredients }) {
  const [recipeModal, setRecipeModal] = useState(false);
  const [chosenRecipe, setChosenRecipe] = useState(null);

  // Pass setAllRecipes state to the Sidebar compponent
  useEffect(() => {
    setAllRecipes(data.results);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
  //         "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.text();
  //       const recipesArray = JSON.parse(result).results;

  //       // console.log(recipesArray);
  //       setAllRecipes(recipesArray);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // Show recipe modal/page onclick of recipe card
  function showRecipeModal(recipe) {
    setChosenRecipe(recipe);
    setRecipeModal(true);
  }

  // Close recipe modal/page onclick of the close button
  function closeRecipeModal() {
    setChosenRecipe(null);
    setRecipeModal(false);
  }

  return (
    <>
      <section className="gallery-section">
        <div className="searched-ingredients">
          <strong>Searched Ingredients:</strong>
          {searchedIngredients.length ? (
            searchedIngredients.map((ingredient) => (
              <span key={uniqid()}>{ingredient}</span>
            ))
          ) : (
            <span>random</span>
          )}
        </div>
        <main className="gallery">
          <Welcome />
          <Error />
          {allRecipes.map((result) => (
            <Card
              key={result.id}
              result={result}
              onClick={() => showRecipeModal(result)}
            />
          ))}
          {recipeModal && (
            <RecipeModal
              recipe={chosenRecipe}
              closeRecipeModal={closeRecipeModal}
            />
          )}
        </main>
      </section>
    </>
  );
}

export default Gallery;
