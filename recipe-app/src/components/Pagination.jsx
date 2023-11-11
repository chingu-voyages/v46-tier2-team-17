import ReactPaginate from "react-paginate";
import fetchRecipes from "../fetchRecipes";

function Pagination({
  itemsPerPage,
  totalRecipes,
  setAllRecipes,
  setSearchedIngredients,
  closeRecipeModal,
}) {
  const totalPages = Math.ceil(totalRecipes / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const startIndex = (event.selected * itemsPerPage) % totalRecipes;
    const endIndex = startIndex + itemsPerPage;

    console.log(event.selected);
    console.log(startIndex);
    console.log(endIndex);
    console.log(
      `User requested page number ${
        event.selected + 1
      }, which is offset ${startIndex}`,
    );

    console.log(`Loading items from ${startIndex + 1} to ${endIndex}`);

    fetchRecipes(
      setAllRecipes,
      setSearchedIngredients,
      ["random"],
      "",
      "",
      true,
      closeRecipeModal,
      startIndex,
    );
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
      />
    </>
  );
}

export default Pagination;
