import { useState } from "react";
import SideBar from "./components/SideBar";
import Gallery from "./components/Gallery";

function App() {
  const [searchedIngredients, setSearchedIngredients] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);

  return (
    <>
      <div className="page">
        <SideBar
          setAllRecipes={(recipesArray) => setAllRecipes(recipesArray)}
          setSearchedIngredients={(ingredientsArray) =>
            setSearchedIngredients(ingredientsArray)
          }
        />
        <Gallery
          setAllRecipes={(recipesArray) => setAllRecipes(recipesArray)}
          setSearchedIngredients={(ingredientsArray) =>
            setSearchedIngredients(ingredientsArray)
          }
          allRecipes={allRecipes}
          searchedIngredients={searchedIngredients}
        />
      </div>
    </>
  );
}

export default App;
