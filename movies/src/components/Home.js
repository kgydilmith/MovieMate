import { Box, Typography } from "@mui/material";
import React from "react";
import Movieitem from "./Movies/Movieitem";

const Home = () => {
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
      <Box display="flex"
      width="80%"
      justifyContent={"center"}
      flexWrap="wrap">
         {[1,2,3,4].map((item) => (
          <Movieitem/>
         ))}
      </Box>
    </Box>
  );
};

export default Home;
