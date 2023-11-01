function validateIngredientsQuery(searchedText, recipesArray) {
  if (/^[^_|\W]/.test(searchedText)) {
    const errorModal = document.getElementById("error-modal");
    const url = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20";
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
          return searchedWordsArray.some((w) => {
            searchedWord = w;
            return recipesArray.some((r) => {
              return r.sections[0].components.some((c) => {
                const regExpVersionOfSearchedWord = new RegExp(w);
                return regExpVersionOfSearchedWord.test(c.ingredient.name);
              });
            });
          });
        }
        if (!hasSearchedIngredients) {
          showError();
          const ingredient404Element =
            document.getElementById("ingredient-404");
          ingredient404Element.innerText = searchedWord;
          errorModal.style.display = "flex";
        }
      } catch (error) {
        console.error(error);
      }
    }
    checkIfRecipeExistsForIngredients();
  }
}

export default validateIngredientsQuery;
