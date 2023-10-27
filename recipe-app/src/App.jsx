import Modal from "./components/Modal";
import SideBar from "./components/SideBar";
//import Gallery from "./components/Gallery";
import data from "./data/recipes";
import Welcome from "./components/Welcome";
import Card from "./components/Card";
import Error from "./components/Error";
import { useState } from "react";

function App() {
  const [welcome, setWelcome] = useState(false);
  const [gallery, setGallery] = useState(true);
  const [error, setError] = useState(false);
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
        {welcome === true && <Welcome />}
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
        {error === true && <Error />}
        {modal === true && <Modal recipe={chosenRecipe} onClose={hideModal} />}

        {/*
          
      */}
      </main>
    </>
  );
}

export default App;
