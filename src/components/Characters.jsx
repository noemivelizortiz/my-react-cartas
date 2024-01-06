import React, { useEffect, useState } from "react";
import Pagination from "./Pagination/Pagination";
import SearchBar from "./SearchBar/SearchBar";
import ListCharacters from "./ListCharacters/ListCharacters";


const List = () => {
  const [listResult, setListResult] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const getData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const responseJson = await response.json();
    console.log(responseJson);
    setListResult(responseJson.results);
    setTotalPages(responseJson.info.pages);
  };

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [page]);

  const nextPage = () => {
    if (page === totalPages) return;
    setPage(page + 1);
  };
  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const handleChanges = (e) => {
    setSearch(e.target.value);
  };
  const searchLowerCase = search.toLowerCase();
  return (
    <div>
      <SearchBar search={search} handleChanges={handleChanges} />
      <h1>Lista</h1>
      <ListCharacters
        listResult={listResult}
        searchLowerCase={searchLowerCase}
      />
      {!listResult.find((character) =>
        character.name.toLowerCase().includes(searchLowerCase)
      ) && <p>no se encontro Personaje</p>}
      <Pagination
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
        totalPages={totalPages}
      />
    </div>
  );
};
export default List;

