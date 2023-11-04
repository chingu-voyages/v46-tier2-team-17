import { useState } from "react";
import validateIngredientsQuery from "../validateIngredientsQuery";
import { AiOutlineSearch } from "react-icons/ai";

export default function SideBar({ setAllRecipes }) {
  const [searchedText, setSearchedText] = useState("");
  const [toggle, setToggle] = useState(true);

  function handleUserQuery(searchedText) {
    validateIngredientsQuery(searchedText);

    const fetchData = async () => {
      const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${searchedText}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        const recipesArray = JSON.parse(result).results;

        console.log(recipesArray);

        // Invoke the setAllRecipes(recipesArray)
        setAllRecipes(recipesArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    setSearchedText("");
  }

  function handleKeyDown(e, searchedText) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleUserQuery(searchedText);
    }
  }

  function toggleButton() {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <>
      {/*
      <nav className="mobile__nav">
        <a className="mobile__nav-logo" href="/">
          App Name
        </a>
        <button className="mobile__nav-menu" onClick={toggleButton}>
          Menu
        </button>
      </nav>
*/}
      <nav className={toggle ? "nav-container" : "nav-mobile"}>
        <h1 className="search-title">Pantry Picker</h1>
        <div className="container-input">
          <input
            type="search"
            placeholder="Enter One or more ingredients"
            className="search-box"
            value={searchedText}
            onKeyDown={(e) => handleKeyDown(e, searchedText)}
            onChange={(e) => setSearchedText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => handleUserQuery(searchedText)}
          >
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
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox-5ingredients"
            />
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
