function validateIngredientsQuery(searchedText) {
  const errorModal = document.getElementById("error-modal");
  const ingredient404Element = document.getElementById("ingredient-404");

  // Check if input begins with valid character
  if (/^[^_|\W]/.test(searchedText)) {
    const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };
    errorModal.style.display = "none";

    // Check if searched ingredient exist
    async function checkIfRecipeExistsForIngredients() {
      try {
        let searchedWord = null;
        const response = await fetch(url, options);
        const result = await response.text();
        const recipesArray = JSON.parse(result).results;
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
              return recipe.sections[0].components.some((component) => {
                const regExpVersionOfSearchedWord = new RegExp(word);
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
      } catch (error) {
        console.error(error);
      }
    }
    checkIfRecipeExistsForIngredients();
  }

  // Show error if inputs begins with valid character
  if (/^[_|\W]/.test(searchedText)) {
    ingredient404Element.innerText = searchedText.trim();
    errorModal.style.display = "flex";
  }
}

export default validateIngredientsQuery;
