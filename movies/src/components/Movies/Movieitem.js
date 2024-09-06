import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent"; 
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Movieitem = ({title,releaseData,posterurl,id }) => {
  return (
    <Card
      sx={{
        margin:2,
        width: 250,
        height: 320,
        borderRadius: 5,
        ":hover":{
          boxShadow: "10px 10px 20px #ccc",
        }
      }}
    >
      <img height={'35%'} width={'100%'} src={posterurl} alt={title}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {new Date(releaseData).toDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{margin:"auto"}} size="small">Share</Button>
      </CardActions>
    </Card>
  );
};

export default Movieitem;
