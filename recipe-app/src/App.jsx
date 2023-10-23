import Modal from "./components/Modal";
import SideBar from "./components/SideBar";
import Gallery from "./components/Gallery";
import data from "./data/recipes";

function App() {
  return (
    <>
      <div className="page">
        <SideBar />
        <Gallery />
      </div>
      <Modal
        key={data.results[0].id}
        recipe={data.results[0]}
        difficulty={data.results[0].total_time_tier?.display_tier}
      />
    </>
  );
}

export default App;
