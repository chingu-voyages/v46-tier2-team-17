import { useState } from "react";
import SideBar from "./components/SideBar";
import Gallery from "./components/Gallery";

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  return (
    <>
      <div className="page">
        <SideBar
          setAllRecipes={(recipesArray) => setAllRecipes(recipesArray)}
        />
        <Gallery
          setAllRecipes={(recipesArray) => setAllRecipes(recipesArray)}
          allRecipes={allRecipes}
        />
      </div>
    </>
  );
}

export default App;
