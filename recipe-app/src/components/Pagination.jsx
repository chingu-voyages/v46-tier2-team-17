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
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        previousClassName="page-item"
        pageClassName="page-item"
        breakClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  );
}

export default Pagination;
