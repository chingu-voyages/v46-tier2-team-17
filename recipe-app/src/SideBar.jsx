import data from "./data/recipes";
export default function SideBar() {
  const recipes = data.results.map((result) => {
    return result.tags.map((tag) => tag.type);
  });
  console.log(recipes);
  return (
    <main className="main-container">
      <h1>Tasty Recipe App</h1>
      <div className="container-input">
        <input
          type="input"
          placeholder="Enter Ingredient"
          className="search-box"
        />
        <button className="search-btn"></button>
      </div>

      <div className="container-checkbox">
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
      </div>

      <div>
        <h2>Categories</h2>
        <div>
          <p>dairy</p>
          <p>vegan</p>
          <p>pescatarian</p>
          <p>low carb</p>
        </div>
      </div>
    </main>
  );
}
