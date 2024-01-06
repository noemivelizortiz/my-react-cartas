import React from "react";

const Pagination = (props) => {
  const { page, prevPage, nextPage, totalPages } = props;
  return (
    <>
      <h2>{`${page}/${totalPages}`}</h2>
      <button onClick={prevPage}>ANTERIOR</button>
      <button onClick={nextPage}>SIGUIENTE</button>
    </>
  );
};

export default Pagination;