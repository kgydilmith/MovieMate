import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Movieitem = () => {
  return (
    <Card sx={{margin:5,width:250,height:320,borderRadius:5,":hover":{
        boxShadow:"10px 10px 20px #ccc",
    }}}>

      <img height={'50%'} width='100%' src="" alt=''/>  
    
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button sx={{margin:"auto"}} size="small">Share</Button>
       
    </CardActions>
  </Card> 
  )
}

export default Movieitem