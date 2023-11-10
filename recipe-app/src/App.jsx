import { useState } from "react";
import SideBar from "./components/SideBar";
import Gallery from "./components/Gallery";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [searchedIngredients, setSearchedIngredients] = useState([]);
  const [recipeModal, setRecipeModal] = useState(false);
  const [chosenRecipe, setChosenRecipe] = useState(null);

  // Show recipe modal/page onclick of recipe card
  function showRecipeModal(recipe) {
    setChosenRecipe(recipe);
    setRecipeModal(true);
  }

  // Close recipe modal/page
  function closeRecipeModal() {
    setChosenRecipe(null);
    setRecipeModal(false);
  }

  return (
    <>
      <div className="page">
        <SideBar
          closeRecipeModal={closeRecipeModal}
          setAllRecipes={(recipesArray) => setAllRecipes(recipesArray)}
          searchedIngredients={searchedIngredients}
          setSearchedIngredients={(ingredientsArray) =>
            setSearchedIngredients(ingredientsArray)
          }
        />
        <Gallery
          recipeModal={recipeModal}
          chosenRecipe={chosenRecipe}
          closeRecipeModal={closeRecipeModal}
          showRecipeModal={(recipe) => showRecipeModal(recipe)}
          allRecipes={allRecipes}
          setAllRecipes={(recipesArray) => setAllRecipes(recipesArray)}
          searchedIngredients={searchedIngredients}
          setSearchedIngredients={(ingredientsArray) =>
            setSearchedIngredients(ingredientsArray)
          }
        />
      </div>
    </>
  );
}

export default App;
