import "./App.css";

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
          <div className="recipes-card">
            <div className="image-container">
              <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?resize=768,574" />
            </div>
            <div className="content">
              <h2>Chorizo & mozzarella gnocchi bake</h2>
              <button type="button">More Info</button>
            </div>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </main>
      </div>
    </>
  );
}

export default App;
