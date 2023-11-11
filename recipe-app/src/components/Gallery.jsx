import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";
import Error from "./Error";
import Loader from "./Loader";
import Pagination from "./Pagination";
import RecipeModal from "./RecipeModal";
import Welcome from "./Welcome";
// import fetchRecipes from "../fetchRecipes";
import exampleRecipes from "../exampleRecipes";

function Gallery({
  totalRecipes,
  setTotalRecipes,
  recipeModal,
  chosenRecipe,
  closeRecipeModal,
  showRecipeModal,
  allRecipes,
  setAllRecipes,
  searchedIngredients,
  setSearchedIngredients,
}) {
  useEffect(() => {
    setAllRecipes(exampleRecipes.results);
    setTotalRecipes(exampleRecipes.results.length);
  }, []);

  // useEffect(() => {
  //   let totalRecipesAvailable = null;
  //   totalRecipesAvailable = fetchRecipes(
  //     setAllRecipes,
  //     setSearchedIngredients,
  //     ["random"],
  //     "",
  //     "",
  //     true,
  //     closeRecipeModal,
  //     0,
  //   );
  //   totalRecipesAvailable.then((total) => setTotalRecipes(total));
  // }, []);

  // Create ingredient <span>s from user's query
  function createSearchedIngredientsTags(searchedIngredients) {
    return searchedIngredients.length ? (
      searchedIngredients.map((ingredient) => (
        <span key={uniqid()}>{ingredient}</span>
      ))
    ) : (
      <span>random</span>
    );
  }
  return (
    <>
      <section className="gallery-section">
        <div className="searched-ingredients">
          <strong>Searched Ingredients:</strong>
          {createSearchedIngredientsTags(searchedIngredients)}
        </div>
        <main className="gallery">
          <Welcome />
          <Loader />
          <Error
            setAllRecipes={setAllRecipes}
            setSearchedIngredients={setSearchedIngredients}
            closeRecipeModal={closeRecipeModal}
          />
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
        <Pagination
          itemsPerPage={40}
          totalRecipes={totalRecipes}
          setAllRecipes={setAllRecipes}
          setSearchedIngredients={setSearchedIngredients}
          closeRecipeModal={closeRecipeModal}
        />
      </section>
    </>
  );
}

export default Gallery;
