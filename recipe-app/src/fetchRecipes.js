import validateIngredientsQuery from "./validateIngredientsQuery";

// Get recipes for searched ingredient
async function fetchRecipes(
  setAllRecipes,
  setSearchedIngredients,
  searchedWordsArray,
  searchedWordsString,
  tags,
  skipValidationCheck,
  closeRecipeModal,
  startIndex,
) {
  console.log(tags);
  // Set fetch url based on the availability of searchedWordsString and tags parameters
  const url = `https://tasty.p.rapidapi.com/recipes/list?from=${startIndex}&size=40${
    searchedWordsString && `&q=${searchedWordsString}`
  }${tags && `&tags=${tags.join()}`}`;

  console.log(url);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const loaderModal = document.getElementById("loader-modal");
  loaderModal.style.display = "flex";
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const resultJSVersion = JSON.parse(result);
    console.log(resultJSVersion);
    const recipesArray = resultJSVersion.results;
    console.log(recipesArray.length);
    const isValidSearch = skipValidationCheck
      ? true
      : validateIngredientsQuery(searchedWordsArray, recipesArray);

    if (isValidSearch) {
      closeRecipeModal();
      setSearchedIngredients(searchedWordsArray);
      setAllRecipes(recipesArray);
    }
    loaderModal.style.display = "none";
    console.log(resultJSVersion.count);
    return resultJSVersion.count;
  } catch (error) {
    console.error(error);
  }
}

export default fetchRecipes;
