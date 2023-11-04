// import data from "../data/recipes";
import React, { useState, useEffect } from "react";
import fetchRecipes from "../fetchRecipes";
import { AiOutlineSearch } from "react-icons/ai";

export default function SideBar({ setAllRecipes }) {
  const [searchedText, setSearchedText] = useState("");
  const [toggle, setToggle] = useState(true);
  const [tags, setTags] = useState([]);

  // Handle user's search query
  function handleUserQuery(searchedText) {
    const errorModal = document.getElementById("error-modal");
    // Check if input begins with valid character
    if (/^[^_|\W]/.test(searchedText)) {
      const checkboxes = document.querySelectorAll(".checkbox");
      const searchedWordsArray = searchedText
        .toLowerCase()
        .trim()
        .split(/[\W|_]/g)
        .filter((item) => item);
      const searchedWordsString = searchedWordsArray.join();
      errorModal.style.display = "none";

      fetchRecipes(
        setAllRecipes,
        searchedWordsArray,
        searchedWordsString,
        tags,
      );
      setSearchedText("");
      setTags([]);
      checkboxes.forEach(
        (checkbox) => checkbox.checked && (checkbox.checked = false),
      );
    }

    // Show error if inputs begins with invalid character
    if (/^[_|\W]/.test(searchedText)) {
      const ingredient404Element = document.getElementById("ingredient-404");
      ingredient404Element.innerText = searchedText.trim();
      errorModal.style.display = "flex";
      setSearchedText("");
    }
  }

  function handleCheckboxChange(e) {
    const checkedBoxValue = e.target.value;
    // Remove or add checked box's value from tags state
    if (tags.includes(checkedBoxValue)) {
      const newTags = [...tags];
      newTags.splice(newTags.indexOf(checkedBoxValue), 1);
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
  // Get category recipes
  function handleCategoriesBtnClick(e) {
    e.preventDefault();
    fetchRecipes(setAllRecipes, null, null, [e.target.value], true);
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
            <button
              type="button"
              className="category-name"
              value="dairy_free"
              onClick={handleCategoriesBtnClick}
            >
              Dairy Free
            </button>
            <button
              type="button"
              className="category-name"
              value="vegan"
              onClick={handleCategoriesBtnClick}
            >
              Vegan
            </button>
            <button
              type="button"
              className="category-name"
              value="pescatarian"
              onClick={handleCategoriesBtnClick}
            >
              Pescatarian
            </button>
            <button
              type="button"
              className="category-name"
              value="low_carb"
              onClick={handleCategoriesBtnClick}
            >
              Low Carb
            </button>
            <button
              type="button"
              className="category-name"
              value="gluten_free"
              onClick={handleCategoriesBtnClick}
            >
              Gluten Free
            </button>
            <button
              type="button"
              className="category-name"
              value="vegetarian"
              onClick={handleCategoriesBtnClick}
            >
              Vegetarian
            </button>
            <button
              type="button"
              className="category-name"
              value="comfort_food"
              onClick={handleCategoriesBtnClick}
            >
              Comfort Food
            </button>
            <button
              type="button"
              className="category-name"
              value="kid_friendly"
              onClick={handleCategoriesBtnClick}
            >
              Kid Friendly
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
