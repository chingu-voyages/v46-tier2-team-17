import "./CSS/App.css";
import Modal from "./components/Modal";
import data from "./data/recipes";
//import Card from "./components/Card";

import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="page">
        <SideBar />
        <main className="page__gallery">
          <Modal
            key={data.results[0].id}
            recipe={data.results[0]}
            difficulty={data.results[0].total_time_tier?.display_tier}
          />
        </main>
      </div>
    </>
  );
}

export default App;
