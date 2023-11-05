import { useState, useEffect } from "react";
import Card from "./Card";
import Error from "./Error";
import Modal from "./Modal";
import Welcome from "./Welcome";
import data from "../data/recipes";

function Gallery({ setAllRecipes, allRecipes }) {
  const [modal, setModal] = useState(false);
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

  // Function to show Modal(recipe page) when card is clicked:
  const showModal = (recipe) => {
    setChosenRecipe(recipe);
    setModal(true);
  };

  // Function to close Modal when X button is clicked:
  const hideModal = () => {
    setChosenRecipe(null);
    setModal(false);
  };

  return (
    <>
      <main className="gallery">
        <Welcome />
        <Error />
        {allRecipes.map((result) => (
          <Card
            key={result.id}
            result={result}
            onClick={() => showModal(result)}
          />
        ))}
        {modal && <Modal recipe={chosenRecipe} onClose={hideModal} />}
      </main>
    </>
  );
}

export default Gallery;
