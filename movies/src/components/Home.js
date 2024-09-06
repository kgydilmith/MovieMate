import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Movieitem from "./Movies/Movieitem";
import { Link } from "react-router-dom";
import { getallmovies } from "../api-helpers/api-helpers.js";

const Home = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    getallmovies()
      .then((data) => setmovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  console.log(movies);

  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" height={"50vh"} padding={2}>
        <img
          src="https://i.ytimg.com/vi/V5jVntRVl-0/maxresdefault.jpg"
          alt="Brahmast"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={1} margin={"auto"}>
        <Typography variant="h4" textAlign={"center"}>
          Leatest Releases
        </Typography>
      </Box>
      <Box
        display="flex"
        width="100%"
        justifyContent={"center"}
        flexWrap="wrap"
      >
        {[1, 2, 3, 4].map((item) => (
          <Movieitem key={item} />
        ))}
      </Box>
      <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View all movies{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
