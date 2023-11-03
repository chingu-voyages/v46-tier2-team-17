// import data from "../data/recipes";
import React, { useState, useEffect } from "react";
import validateIngredientsQuery from "../validateIngredientsQuery";
import { AiOutlineSearch } from "react-icons/ai";

export default function SideBar({ setAllRecipes }) {
  const [searchedText, setSearchedText] = useState("");
  const [toggle, setToggle] = useState(true);
  const [tags, setTags] = useState([]);

  function handleUserQuery(searchedText) {
    const errorModal = document.getElementById("error-modal");
    const searchedWordsArray = searchedText
      .toLowerCase()
      .trim()
      .split(/[\W|_]/g)
      .filter((item) => item);
    const searchedWordsString = searchedWordsArray.join();
    errorModal.style.display = "none";

    // Check if input begins with valid character
    if (/^[^_|\W]/.test(searchedText)) {
      const checkboxes = document.querySelectorAll(".checkbox");
      const fetchData = async () => {
        const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${searchedWordsString}&tags=${tags.join()}`;
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
          const isValidSearch = validateIngredientsQuery(
            searchedWordsArray,
            recipesArray,
          );
          if (isValidSearch) {
            setAllRecipes(recipesArray);
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
      setSearchedText("");
      setTags([]);
      checkboxes.forEach(
        (checkbox) => checkbox.checked && (checkbox.checked = false),
      );
    }

    // Show error if inputs begins with valid character
    if (/^[_|\W]/.test(searchedText)) {
      const ingredient404Element = document.getElementById("ingredient-404");
      ingredient404Element.innerText = searchedText.trim();
      errorModal.style.display = "flex";
      setSearchedText("");
    }
  }

  function handleCheckboxChange(e) {
    const checkedBoxValue = e.target.value;
    if (tags.includes(checkedBoxValue)) {
      const newTags = [...tags];
      newTags.splice(newTags.indexOf(checkedBoxValue, 1));
      setTags(newTags);
    } else {
      setTags([...tags, checkedBoxValue]);
    }
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
      <nav className="mobile__nav">
        <a className="mobile__nav-logo" href="/">
          App Name
        </a>
        <button className="mobile__nav-menu" onClick={toggleButton}>
          Menu
        </button>
      </nav>

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
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox-30mins"
              value="under_30_minutes"
              onChange={handleCheckboxChange}
            />
            <label className="label-title" htmlFor="checkbox-30mins">
              Under 30 minutes
            </label>
          </div>

          <div className="container-checkbox">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox-5ingredients"
              value="5_ingredients_or_less"
              onChange={handleCheckboxChange}
            />
            <label className="label-title" htmlFor="checkbox-5ingredients">
              Five ingredients or less
            </label>
          </div>

          <div className="container-checkbox">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox-easy"
              value="easy"
              onChange={handleCheckboxChange}
            />
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
