// import data from "../data/recipes";
//import { FaArrowRight } from "react-icons/fa";
import React, {useState} from "react"


export default function SideBar() {
  const [menu, SetMenu] = useState("nav-container")
  // const recipes = data.results.map((result) => {
  //   return result.tags.map((tag) => tag.type);
  // });
  // console.log(recipes);
  function showSearch() {
    
  }
  return (
    <>
      <nav className="mobile__nav">
        <a className="mobile__nav-logo" href="/">
          App Name
        </a>
        <button className="mobile__nav-menu" onClick={() => SetMenu("nav-mobile")}>
          Menu
        </button>
      </nav>
      <nav className={`${menu}`}>
        <h1 className="search-title">Tasty Recipe App</h1>
        <div className="container-input">
          <input
            type="input"
            placeholder="Enter Ingredient"
            className="search-box"
          />
          <button className="search-btn">Click</button>
        </div>

        <div className="nav-container-checkbox">
          <div className="container-checkbox">
            <input type="checkbox" className="checkbox" />
            <label className="label-title">Under 30 minutes</label>
          </div>

          <div className="container-checkbox">
            <input type="checkbox" className="checkbox" />
            <label className="label-title">Five ingredients or less</label>
          </div>

          <div className="container-checkbox">
            <input type="checkbox" className="checkbox" />
            <label className="label-title">Easy</label>
          </div>
        </div>

        <div className="main-container-category">
          <h2 className="category-heading">Categories</h2>
          <div className="container-category">
            <p className="category-name">dairy</p>
            <p className="category-name">vegan</p>
            <p className="category-name">pescatarian</p>
            <p className="category-name">low carb</p>
            <p className="category-name">low carb</p>
            <p className="category-name">low carb</p>
          </div>
        </div>
      </nav>
    </>
  );
}
