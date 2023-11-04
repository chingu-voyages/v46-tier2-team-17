import validateIngredientsQuery from "./validateIngredientsQuery";

// Get recipes for searched ingredient
async function fetchRecipes(
  setAllRecipes,
  searchedWordsArray,
  searchedWordsString,
  tags,
  categoriesSearch,
) {
  // Set fetch url based on the availability of searchedWordsString and tags parameters
  const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20${
    searchedWordsString && `&q=${searchedWordsString}`
  }${tags && `&tags=${tags.join()}`}`;

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
    const isValidSearch = categoriesSearch
      ? true
      : validateIngredientsQuery(searchedWordsArray, recipesArray);
    isValidSearch && setAllRecipes(recipesArray);
  } catch (error) {
    console.error(error);
  }
}

export default fetchRecipes;
