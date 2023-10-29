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
        <SideBar />
        <Welcome />
        <Error />
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

        {/*
          
      */}
      </main>
    </>
  );
}

export default App;
