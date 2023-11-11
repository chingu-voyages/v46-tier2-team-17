import ReactPaginate from "react-paginate";
import fetchRecipes from "../fetchRecipes";
// import { useState } from "react";

function Pagination({
  checkboxValues,
  categoriesValues,
  itemsPerPage,
  totalRecipes,
  setTotalRecipes,
  setAllRecipes,
  searchedIngredients,
  setSearchedIngredients,
  closeRecipeModal,
}) {
  const totalPages = Math.ceil(totalRecipes / itemsPerPage);
  // const [startIndex, setStartIndex] = useState(1);
  // const [endIndex, setEndIndex] = useState(40);

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

    // setStartIndex(startIndex + 1);
    // setEndIndex(endIndex);

    console.log(`Loading items from ${startIndex + 1} to ${endIndex}`);

    fetchRecipes(
      setAllRecipes,
      setSearchedIngredients,
      searchedIngredients,
      searchedIngredients.join() === "random" ? "" : searchedIngredients.join(),
      [...checkboxValues.current, ...categoriesValues.current],
      true,
      closeRecipeModal,
      startIndex,
    );
  };

  return (
    <>
      <section className="pagination-section">
        {/* {console.log(endIndex)} */}
        {/* <span className="pagination-info">{`${startIndex}-${endIndex} of ${totalRecipes} recipes`}</span> */}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
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
      </section>
    </>
  );
}

export default Pagination;
