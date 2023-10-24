import Card from "./Card";
import Welcome from "./Welcome";
import data from "../data/recipes";

function Gallery() {
  return (
    <>
      <main className="gallery">
        <Welcome />
        {data.results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </main>
    </>
  );
}

export default Gallery;
