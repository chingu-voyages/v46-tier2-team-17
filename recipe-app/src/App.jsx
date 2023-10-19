
import SideBar from "./SideBar";
import "./App.css";
import Card from "./components/Card";


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
        <aside className="page__aside">
          <SideBar />
        </aside>
        <main className="page__gallery">
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
    </>
  );
}

export default App;
