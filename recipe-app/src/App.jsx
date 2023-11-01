import Modal from "./components/Modal";
import SideBar from "./components/SideBar";
import data from "./data/recipes";
import Welcome from "./components/Welcome";
import Card from "./components/Card";
import Error from "./components/Error";
import { useState, useEffect } from "react";

function App() {
  const [gallery, setGallery] = useState(true);
  const [modal, setModal] = useState(false);
  const [chosenRecipe, SetChosenRecipe] = useState(null);
  const [allRecipes, setAllRecipes] = useState([]);


  // Pass setAllRecipes state to the Sidebar compponent
  

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

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const recipesArray = JSON.parse(result).results;
        
        console.log(recipesArray);
        setAllRecipes(recipesArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const showModal = (recipe) => {
    SetChosenRecipe(recipe);
    setModal(true);
  };

  const hideModal = () => {
    SetChosenRecipe(null);
    setModal(false);
  };

  return (
    <>
      <main className="page">
        <SideBar setAllRecipes={(recipesArray) => setAllRecipes(recipesArray)} />

        <Welcome />
        <Error />
        {gallery === true && (
          <div className="gallery">
            {allRecipes.map((result) => (
              <Card
                key={result.id}
                result={result}
                onClick={() => showModal(result)}
              />
            ))}
          </div>
        )}
        {modal === true && <Modal recipe={chosenRecipe} onClose={hideModal} />}

        {/*
          
      */}
      </main>
      <footer>
        <a href="https://github.com/chingu-voyages/v46-tier2-team-17" target="_blank">
        v46-Tier2-Team17 GitHub Repo</a>
      </footer>
    </>
  );
}

export default App;
