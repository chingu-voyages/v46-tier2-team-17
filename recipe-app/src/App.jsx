import Modal from "./components/Modal";
import SideBar from "./components/SideBar";
//import Gallery from "./components/Gallery";
import data from "./data/recipes";
import Welcome from "./components/Welcome";
import Card from "./components/Card";
import Error from "./components/Error";
import { useState } from "react";

function App() {
  const [gallery, setGallery] = useState(true);
  const [modal, setModal] = useState(false);
  return (
    <>
      <main className="page">
        <SideBar />
        <Welcome />
        <Error />
        {gallery === true && (
          <div className="gallery">
            {data.results.map((result) => (
              <Card key={result.id} result={result} />
            ))}
          </div>
        )}
        {modal === true && (
          <Modal
            key={data.results[0].id}
            recipe={data.results[0]}
            difficulty={data.results[0].total_time_tier?.display_tier}
          />
        )}

        {/*
          
      */}
      </main>
    </>
  );
}

export default App;
