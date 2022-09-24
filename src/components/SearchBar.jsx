// GLOBAL
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <>
      <div
        className="search-bar-container"
      >
        <div className="search-bar">
          <Search />
          <input
            className="search-input"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="search-icon-div">
          <IconButton onClick={handleSubmit} sx={{ color: "red" }}>
            <Search />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
