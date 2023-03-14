import { PaginationType } from "../@types/pagination";
import { ACTIONS } from "../context/paginationReducer";

const Paginate = ({
  itemsPerPage,
  totalItems,
  dispatch,
  currentPage,
}: Omit<PaginationType, "posts"> & { dispatch: any }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <>
      {pageNumbers.map((number) => (
        <div
          key={number}
          onClick={() => dispatch({ type: ACTIONS.SET_PAGE, payload: number })}
          className={
            number === currentPage
              ? "btn btn-info ml-2 mb-4 ml-2 mr-2"
              : "btn btn-outline-info mb-4 ml-2 mr-2"
          }
        >
          <div className="page-number">{number}</div>
        </div>
      ))}
    </>
  );
};

export default Paginate;
