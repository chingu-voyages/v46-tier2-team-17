// import data from "../data/recipes";
import { AiOutlineSearch } from "react-icons/ai";
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
        <button
          className="mobile__nav-menu"
          onClick={() => SetMenu("nav-mobile")}
        >
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
          <button className="search-btn">
            <AiOutlineSearch />
          </button>
        </div>

        <div className="nav-container-checkbox">
          <div className="container-checkbox">
            <input type="checkbox" className="checkbox" id="checkbox-30mins" />
            <label className="label-title" htmlFor="checkbox-30mins">
              Under 30 minutes
            </label>
          </div>

          <div className="container-checkbox">
            <input type="checkbox" className="checkbox" id="checkbox-5ingredients" />
            <label className="label-title" htmlFor="checkbox-5ingredients">
              Five ingredients or less
            </label>
          </div>

          <div className="container-checkbox">
            <input type="checkbox" className="checkbox" id="checkbox-easy" />
            <label className="label-title" htmlFor="checkbox-easy">
              Easy
            </label>
          </div>
        </div>

        <div className="main-container-category">
          <h2 className="category-heading">Categories</h2>
          <div className="container-category">
            <div className="category-name">dairy</div>
            <div className="category-name">vegan</div>
            <div className="category-name">pescatarian</div>
            <div className="category-name">low carb</div>
            <div className="category-name">low carb</div>
            <div className="category-name">low carb</div>
          </div>
        </div>
      </nav>
    </>
  );
}
