import React from "react";

const SearchBar = (props) => {
    const { search, handleChanges } = props;
  return (
    <>
      <input value={search} onChange={handleChanges} />
      <br />
      <p>
        {search ? `busqueda: ${search}` : "no se esta realizando busquedas"}
      </p>
    </>
  );
};

export default SearchBar;