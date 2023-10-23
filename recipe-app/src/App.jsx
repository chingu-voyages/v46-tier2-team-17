import Modal from "./components/Modal";
import Card from "./components/Card";
import SideBar from "./components/SideBar";
import Welcome from "./components/Welcome";
import data from "./data/recipes";

function App() {
  return (
    <>
      <div className="page">
        <nav className="page__nav">
          <a className="page__nav-logo" href="/">
            App Name
          </a>
          <button className="page__nav-menu">Menu</button>
        </nav>
        <div className="page_layout">
          <SideBar />

          <main className="page__gallery">
            <Welcome />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </main>
        </div>
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
