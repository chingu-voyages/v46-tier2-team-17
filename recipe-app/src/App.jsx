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
  const [error, setError] = useState(false);

  // *******
  // Function to show error
  const showError = () => {
    setError(true);
  };
  // Function to hide error
  const hideError = () => {
    setError(false);
  };

  const errorHandling = { showError, hideError };
  // *******

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

  // *****
  // Function to show Modal(recipe page) when card is clicked:
  const showModal = (recipe) => {
    SetChosenRecipe(recipe);
    setModal(true);
  };
  //  Function to close Modal when X button is clicked:
  const hideModal = () => {
    SetChosenRecipe(null);
    setModal(false);
  };
  // *******

  return (
    <>
      <div className="aside">
        <SideBar {...errorHandling} />
      </div>
      <main className="page">
        <Welcome />
        {error === true && <Error />}
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
      </main>
    </>
  );
}
export default App;