import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Autocomplete,
  TextField,
  Tab,
  Tabs,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import { getallmovies } from "../api-helpers/api-helpers.js";
import { Link } from "react-router-dom";
const dummyarray = ["ememory", "brahames", "grum"];

const Header = () => {
  const [value, setvalue] = useState(0);
  useEffect(() => {
    getallmovies()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AppBar position="sticky" sx={{ bgcolor: "#999999" }}>
        <Toolbar>
          <Box width={"20%"}>
            <MovieIcon />
          </Box>

          <Box width={"30%"} margin={"auto"}>
            <Autocomplete
              freeSolo
              options={dummyarray.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  sx={{ input: { color: "white" } }}
                  variant="standard"
                  {...params}
                  label="Search Acroos Movies"
                />
              )}
            />
          </Box>

          <Box display={"flex"}>
            <Tabs
              textColor="inherit"
              indicatorcolor="secondory"
              value={value}
              onChange={(e, val) => setvalue(val)}
            >
              <Tab LinkComponent={Link} to="/movies" label="Movies " />
              <Tab LinkComponent={Link} to="/admin" label="Admin" />
              <Tab LinkComponent={Link} to="/auth" label="Auth" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
