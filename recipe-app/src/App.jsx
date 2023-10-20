import "./CSS/App.css";
// import Modal from "./components/Modal";
// import data from "./data/recipes";
import Card from "./components/Card";
import Welcome from "./components/Welcome";

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
        <aside className="page__aside"></aside>
        <main className="page__gallery">
          <Welcome />
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
          <div className="card">
            <Card />
          </div>
        </main>
      </div>
      {/* {data.results.map((result) => {
        return (
          <Modal
            key={result.id}
            recipe={result}
            difficulty={result.total_time_tier?.display_tier}
          />
        );
      })} */}
    </>
  );
}

export default App;
