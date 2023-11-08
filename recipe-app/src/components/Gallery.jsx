import { useEffect } from "react";
import uniqid from "uniqid";
import Card from "./Card";
import Error from "./Error";
import Loader from "./Loader";
import RecipeModal from "./RecipeModal";
import Welcome from "./Welcome";
// import data from "../data/recipes";

function Gallery({
  recipeModal,
  chosenRecipe,
  closeRecipeModal,
  showRecipeModal,
  allRecipes,
  setAllRecipes,
  searchedIngredients,
  setSearchedIngredients,
}) {
  // useEffect(() => {
  //   setAllRecipes(data.results);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };
      const loaderModal = document.getElementById("loader-modal");
      loaderModal.style.display = "flex";
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const recipesArray = JSON.parse(result).results;
        setAllRecipes(recipesArray);
        loaderModal.style.display = "none";
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

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
      </section>
    </>
  );
}

export default Gallery;
