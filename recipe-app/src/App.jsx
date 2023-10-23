import Modal from "./components/Modal";
import Card from "./components/Card";
import SideBar from "./components/SideBar";
import Welcome from "./components/Welcome";
import data from "./data/recipes";

function App() {
  return (
    <>
      <div className="page">
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
      <Modal
        key={data.results[0].id}
        recipe={data.results[0]}
        difficulty={data.results[0].total_time_tier?.display_tier}
      />
    </>
  );
}

export default App;
