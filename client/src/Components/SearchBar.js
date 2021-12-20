import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState();
  const searchOnPLM = () => {
    window.location.href = `https://plm.edu.ph/search?searchword=${search}&searchphrase=all`;
  };
  return (
    <>
      <div className="form-outline container-form">
        <input
          type="search"
          id="form1"
          className="form-control  text-search"
          placeholder="search"
          aria-label="Search"
          onInput={(e) => setSearch(e.target.value)}
        />

        <Link to="#" className="search-bar-PLM">
          <AiOutlineSearch onClick={searchOnPLM} />
        </Link>
      </div>
    </>
  );
}

export default SearchBar;
