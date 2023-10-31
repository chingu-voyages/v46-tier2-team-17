import Modal from "./components/Modal";
import SideBar from "./components/SideBar";
import data from "./data/recipes";
import Welcome from "./components/Welcome";
import Card from "./components/Card";
import Error from "./components/Error";
import { useState } from "react";

function App() {
  const [gallery, setGallery] = useState(true);
  const [modal, setModal] = useState(false);
  const [chosenRecipe, SetChosenRecipe] = useState(null);
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

  // *******
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
            {data.results.map((result) => (
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
