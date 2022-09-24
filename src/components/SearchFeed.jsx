import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <div className="feed-title">
        Search Results for: &nbsp;
        <span style={{ color: "#F31503" }}>{searchTerm}</span>
        <span style={{ color: "#FFF" }}>videos</span>
      </div>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
