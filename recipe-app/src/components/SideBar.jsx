import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";
import fetchRecipes from "../fetchRecipes";

export default function SideBar({
  closeRecipeModal,
  setAllRecipes,
  searchedIngredients,
  setSearchedIngredients,
}) {
  const [searchedText, setSearchedText] = useState("");
  // const [tags, setTags] = useState([]);
  // const [categories, setCategories] = useState([]);
  const asideDesktop = document.querySelector(".aside-desktop");

  const checkboxValues = useRef([]);
  const categoriesValues = useRef([]);

  // Fetch random recipes onclick of the app's logo
  function handleAppLogoClick(e) {
    console.log("handleAppLogoClick");
    document.getElementById("error-modal").style.display = "none";
    e.preventDefault();
    fetchRecipes(
      setAllRecipes,
      setSearchedIngredients,
      ["random"],
      "",
      "",
      true,
      closeRecipeModal,
    );
  }

  // Handle user's search query
  function handleUserQuery(searchedText) {
    const errorModal = document.getElementById("error-modal");
    asideDesktop.classList.remove("aside-mobile");

    // Check if input begins with valid character
    if (/^[^_|\W]/.test(searchedText)) {
      const searchedWordsArray = searchedText
        .toLowerCase()
        .trim()
        .split(/[\W|_]/g)
        .filter((item) => item);
      const searchedWordsString = searchedWordsArray.join();
      errorModal.style.display = "none";

      console.log("handleUserQuery IF block");

      fetchRecipes(
        setAllRecipes,
        setSearchedIngredients,
        searchedWordsArray,
        searchedWordsString,
        [...checkboxValues.current, ...categoriesValues.current],
        false,
        closeRecipeModal,
      );
      setSearchedText("");
    }

    // Show error if inputs begins with invalid character
    if (/^[_|\W]/.test(searchedText)) {
      const ingredient404Element = document.getElementById("ingredient-404");
      ingredient404Element.innerText = searchedText.trim();
      errorModal.style.display = "flex";
      setSearchedText("");
    }
  }

  function handleKeyDown(e, searchedText) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleUserQuery(searchedText);
    }
  }

  function handleCheckboxChange(e) {
    console.log("handleCheckboxChange");
    const changedCheckboxValue = e.target.value;
    const currentCheckboxValues = checkboxValues.current;

    console.log(checkboxValues);
    console.log(currentCheckboxValues);

    // Remove or add checked box's value from tags state
    if (currentCheckboxValues.includes(changedCheckboxValue)) {
      const newCheckboxValues = [...currentCheckboxValues];
      newCheckboxValues.splice(
        newCheckboxValues.indexOf(changedCheckboxValue),
        1,
      );
      checkboxValues.current = newCheckboxValues;
      // setTags(newTags);
      console.log(checkboxValues);
    } else {
      checkboxValues.current = [...currentCheckboxValues, changedCheckboxValue];
      // setTags([...tags, changedCheckboxValue]);
      console.log(checkboxValues);
    }

    !searchedText &&
      fetchRecipes(
        setAllRecipes,
        setSearchedIngredients,
        searchedIngredients,
        searchedIngredients.join(),
        [...checkboxValues.current, ...categoriesValues.current],
        true,
        closeRecipeModal,
      );
  }

  // Fetch recipes whenever the tags state changes and the search box is empty
  // useEffect(() => {
  //   console.log("handleCheckboxChange useEffect");
  //   !searchedText &&
  //     fetchRecipes(
  //       setAllRecipes,
  //       setSearchedIngredients,
  //       searchedIngredients,
  //       searchedIngredients.join(),
  //       [...tags, ...categories],
  //       true,
  //       closeRecipeModal,
  //     );
  // }, [tags]);

  function handleCategoriesBtnClick(e) {
    console.log("handleCategoriesBtnClick");
    const clickedCategoryValue = e.target.value;
    const currentCategoriesValues = categoriesValues.current;

    console.log(clickedCategoryValue);
    console.log(currentCategoriesValues);

    e.preventDefault();
    e.target.classList.toggle("category-active");
    asideDesktop.classList.remove("aside-mobile");

    // Remove or add category's value from categories state
    if (currentCategoriesValues.includes(clickedCategoryValue)) {
      const newCategories = [...currentCategoriesValues];
      newCategories.splice(newCategories.indexOf(currentCategoriesValues), 1);

      categoriesValues.current = newCategories;

      // setCategories(newCategories);

      console.log(categoriesValues);
    } else {
      categoriesValues.current = [
        ...currentCategoriesValues,
        clickedCategoryValue,
      ];
      // setCategories([...categories, clickedCategoryValue]);
      console.log(categoriesValues);
    }

    fetchRecipes(
      setAllRecipes,
      setSearchedIngredients,
      searchedIngredients,
      searchedIngredients.join(),
      [...checkboxValues.current, ...categoriesValues.current],
      true,
      closeRecipeModal,
    );
  }

  // Fetch recipes whenever categories state changes
  // useEffect(() => {
  //   console.log("handleCategoriesBtnClick useEffect");

  //   fetchRecipes(
  //     setAllRecipes,
  //     setSearchedIngredients,
  //     searchedIngredients,
  //     searchedIngredients.join(),
  //     [...tags, ...categories],
  //     true,
  //     closeRecipeModal,
  //   );
  // }, [categories]);

  return (
    <>
      <nav className="mobile-nav">
        <div className="app-logo--mobile" onClick={handleAppLogoClick}>
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
            <div className="app-logo--desktop" onClick={handleAppLogoClick}>
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
                <label className="checkbox-label" htmlFor="checkbox-30mins">
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
                <label
                  className="checkbox-label"
                  htmlFor="checkbox-5ingredients"
                >
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
                <label className="checkbox-label" htmlFor="checkbox-easy">
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
            <a
              href="https://github.com/chingu-voyages/v46-tier2-team-17"
              target="_blank"
            >
              <AiFillGithub />
              <span>Designed and Created by Chingu v46-Tier2-Team-17</span>
            </a>
          </footer>
        </div>
      </aside>
    </>
  );
}
