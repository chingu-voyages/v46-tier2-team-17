function validateIngredientsQuery(searchedWordsArray, recipesArray) {
  const hasSearchedIngredients = findIngredients(
    searchedWordsArray,
    recipesArray,
  );

  // Compare user's query to the recipes' ingredients
  function findIngredients(searchedWordsArray, recipesArray) {
    return searchedWordsArray.some((word) => {
      return recipesArray.some((recipe) => {
        if (recipe.sections) {
          return recipe.sections[0].components.some((component) => {
            const regExpVersionOfSearchedWord = new RegExp(word);
            return regExpVersionOfSearchedWord.test(component.ingredient.name);
          });
        }
      });
    });
  }

  // Show error for 404 searches
  if (!hasSearchedIngredients) {
    const errorModal = document.getElementById("error-modal");
    const ingredient404Element = document.getElementById("ingredient-404");
    ingredient404Element.innerText = searchedWordsArray.join(", ");
    errorModal.style.display = "flex";
  }
  return hasSearchedIngredients;
}

export default validateIngredientsQuery;
