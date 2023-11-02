function validateIngredientsQuery(searchedText, recipesArray) {
  const errorModal = document.getElementById("error-modal");
  const ingredient404Element = document.getElementById("ingredient-404");

  // Check if input begins with valid character
  if (/^[^_|\W]/.test(searchedText)) {
    errorModal.style.display = "none";

    console.log(searchedText);

    // Check if searched ingredient exist
    function checkIfRecipeExistsForIngredients(recipesArray) {
      let searchedWord = null;
      const hasSearchedIngredients = findIngredients();

      // Find ingredient in the api
      function findIngredients() {
        const searchedWordsArray = searchedText
          .toLowerCase()
          .trim()
          .split(/[\W|_]/g)
          .filter((item) => item);
        return searchedWordsArray.some((word) => {
          searchedWord = word;
          return recipesArray.some((recipe) => {
            // console.log(recipe.sections[0].components);
            return recipe.sections[0].components.some((component) => {
              const regExpVersionOfSearchedWord = new RegExp(word);
              console.log("The test");
              console.log(component.ingredient.name);
              console.log(
                regExpVersionOfSearchedWord.test(component.ingredient.name),
              );
              return regExpVersionOfSearchedWord.test(
                component.ingredient.name,
              );
            });
          });
        });
      }

      // Show error for 404 searches
      if (!hasSearchedIngredients) {
        ingredient404Element.innerText = searchedWord;
        errorModal.style.display = "flex";
      }
      return hasSearchedIngredients;
    }
    return checkIfRecipeExistsForIngredients(recipesArray);
  }

  // Show error if inputs begins with valid character
  if (/^[_|\W]/.test(searchedText)) {
    ingredient404Element.innerText = searchedText.trim();
    errorModal.style.display = "flex";
  }
}

export default validateIngredientsQuery;
