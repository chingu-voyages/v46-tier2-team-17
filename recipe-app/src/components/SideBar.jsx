// import data from "../data/recipes";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";

export default function SideBar() {
  const [menu, SetMenu] = useState("nav-container");
  const [searchedText, setSearchedText] = useState("");
  // const recipes = data.results.map((result) => {
  //   return result.tags.map((tag) => tag.type);
  // });
  // console.log(recipes);

  function handleSearchInputChange(e) {
    setSearchedText(e.target.value);
  }

  function handleSearchBtnClick() {
    if (/^[^_|\W]/.test(searchedText)) {
      const errorModal = document.getElementById("error-modal");
      const url =
        "https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&tags=under_30_minutes";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      };

      errorModal.style.display = "none";

      async function checkIfRecipeExistsForIngredients() {
        try {
          let searchedWord = null;
          const response = await fetch(url, options);
          const result = await response.text();
          const recipesArray = JSON.parse(result).results;
          const hasSearchedIngredients = findIngredients();

          function findIngredients() {
            const searchedWordsArray = searchedText
              .toLowerCase()
              .trim()
              .split(/[\W|_]/g)
              .filter((i) => i);

            console.log(searchedWordsArray);

            return searchedWordsArray.some((w) => {
              searchedWord = w;
              return recipesArray.some((r) => {
                return r.sections[0].components.some((c) => {
                  console.log(c.ingredient.name);
                  const regExpVersionOfSearchedWord = new RegExp(w);
                  return regExpVersionOfSearchedWord.test(c.ingredient.name);
                });
              });
            });
          }

          console.log(hasSearchedIngredients);
          if (!hasSearchedIngredients) {
            const ingredient404Element =
              document.getElementById("ingredient-404");

            ingredient404Element.innerText = searchedWord;
            errorModal.style.display = "flex";
            console.log(searchedWord);
          }
          console.log(recipesArray);
        } catch (error) {
          console.error(error);
        }
      }
      console.log(searchedText);
      checkIfRecipeExistsForIngredients();
    }
  }

  // function showSearch() {}
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
            type="search"
            placeholder="Enter Ingredient"
            className="search-box"
            value={searchedText}
            onChange={handleSearchInputChange}
          />
          <button className="search-btn" onClick={handleSearchBtnClick}>
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
