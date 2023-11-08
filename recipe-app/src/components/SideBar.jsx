import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import fetchRecipes from "../fetchRecipes";

export default function SideBar({
  closeRecipeModal,
  setAllRecipes,
  setSearchedIngredients,
}) {
  const [searchedText, setSearchedText] = useState("");
  const [tags, setTags] = useState([]);
  const asideDesktop = document.querySelector(".aside-desktop");

  // Handle user's search query
  function handleUserQuery(searchedText) {
    const errorModal = document.getElementById("error-modal");
    asideDesktop.classList.remove("aside-mobile");

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
        setSearchedIngredients,
        searchedWordsArray,
        searchedWordsString,
        tags,
        false,
        closeRecipeModal,
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
    asideDesktop.classList.remove("aside-mobile");
    fetchRecipes(
      setAllRecipes,
      setSearchedIngredients,
      [e.target.innerText.toLowerCase()],
      null,
      [e.target.value],
      true,
      closeRecipeModal,
    );
  }

  return (
    <>
      <nav className="mobile-nav">
        <div className="app-logo--mobile">
          <a href="/">Pantry Picker</a>
        </div>
        <button
          type="button"
          title="menu"
          className="mobile-nav__menu-btn"
          onClick={() => asideDesktop.classList.toggle("aside-mobile")}
        >
          <GiHamburgerMenu />
        </button>
      </nav>
      <aside className="aside-desktop">
        <div className="aside-content-container">
          <header>
            <div className="app-logo--desktop">
              <a href="/">Pantry Picker</a>
            </div>
            <div className="container-input">
              <input
                type="search"
                placeholder="Enter one or more ingredients"
                className="search-box"
                value={searchedText}
                onKeyDown={(e) => handleKeyDown(e, searchedText)}
                onChange={(e) => setSearchedText(e.target.value)}
              />
              <button
                type="button"
                title="search"
                className="search-btn"
                onClick={() => handleUserQuery(searchedText)}
              >
                <AiOutlineSearch />
              </button>
            </div>
            <div className="aside-container-checkbox">
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
          </header>
          <section className="main-container-category">
            <h2 className="category-heading">Categories</h2>
            <div className="container-category">
              <button
                type="button"
                className="category-btn"
                value="dairy_free"
                onClick={handleCategoriesBtnClick}
              >
                Dairy Free
              </button>
              <button
                type="button"
                className="category-btn"
                value="vegan"
                onClick={handleCategoriesBtnClick}
              >
                Vegan
              </button>
              <button
                type="button"
                className="category-btn"
                value="pescatarian"
                onClick={handleCategoriesBtnClick}
              >
                Pescatarian
              </button>
              <button
                type="button"
                className="category-btn"
                value="low_carb"
                onClick={handleCategoriesBtnClick}
              >
                Low Carb
              </button>
              <button
                type="button"
                className="category-btn"
                value="gluten_free"
                onClick={handleCategoriesBtnClick}
              >
                Gluten Free
              </button>
              <button
                type="button"
                className="category-btn"
                value="vegetarian"
                onClick={handleCategoriesBtnClick}
              >
                Vegetarian
              </button>
              <button
                type="button"
                className="category-btn"
                value="comfort_food"
                onClick={handleCategoriesBtnClick}
              >
                Comfort Food
              </button>
              <button
                type="button"
                className="category-btn"
                value="kid_friendly"
                onClick={handleCategoriesBtnClick}
              >
                Kid Friendly
              </button>
            </div>
          </section>
          <footer>
            <img src={github} className="footer-img" />
            <a
              href="https://github.com/chingu-voyages/v46-tier2-team-17"
              target="_blank"
            >
              designed and created by Chingu v46-Tier2-Team17
            </a>
          </footer>
        </div>
      </aside>
    </>
  );
}
