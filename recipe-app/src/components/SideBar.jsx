import data from "../data/recipes";
// import "./src/CSS/SideBar.css"
 import { FaArrowRight } from "react-icons/fa";

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
        <button className="search-btn">
          <FaArrowRight />
        </button>
      </div>

      <div className="main-container-checkbox">
        <div className="container-checkbox">
          <input type="checkbox" className="checkbox" />
          <label>Under 30 minutes</label>
        </div>

        <div className="container-checkbox">
          <input type="checkbox" className="checkbox" />
          <label>Five ingredients or less</label>
        </div>

        <div className="container-checkbox">
          <input type="checkbox" className="checkbox" />
          <label>Easy</label>
        </div>
      </div>

      <div className="main-container-category">
        <h2 className="category-heading">Categories</h2>
        <div className="container-category">
          <p>dairy</p>
          <p>vegan</p>
          <p>pescatarian</p>
          <p>low carb</p>
          <p>low carb</p>
          <p>low carb</p>
        </div>
      </div>
    </main>
  );
}
