import { useState, useRef } from "react";
import SideBar from "./components/SideBar";
import Gallery from "./components/Gallery";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState(null);
  const [recipeModal, setRecipeModal] = useState(false);
  const [searchedIngredients, setSearchedIngredients] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState(0);
  const checkboxValues = useRef([]);
  const categoriesValues = useRef([]);

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
          checkboxValues={checkboxValues}
          categoriesValues={categoriesValues}
          totalRecipes={totalRecipes}
          setTotalRecipes={setTotalRecipes}
          closeRecipeModal={closeRecipeModal}
          setAllRecipes={(recipesArray) => setAllRecipes(recipesArray)}
          searchedIngredients={searchedIngredients}
          setSearchedIngredients={(ingredientsArray) =>
            setSearchedIngredients(ingredientsArray)
          }
        />
        <Gallery
          checkboxValues={checkboxValues}
          categoriesValues={categoriesValues}
          totalRecipes={totalRecipes}
          setTotalRecipes={setTotalRecipes}
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
