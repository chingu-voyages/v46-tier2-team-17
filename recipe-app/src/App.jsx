import "./CSS/App.css";
import Modal from "./components/Modal";
import data from "./data/recipes";
import Card from "./components/Card";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="page">
        <nav className="page__nav"></nav>
        <aside className="page__aside"></aside>
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
