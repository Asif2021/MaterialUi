import React from 'react'
import TourCard from "../components/TourCard";
import Grid from '@mui/material/Grid'
import Container  from "@mui/material/Container";
import cities from '../data.json';
import { Typography } from "@mui/material";

const Home = () => (
    <div className="app">
    <Container sx={{marginY:5}}>
          {cities.map((city)=>(
            <>
            <Typography 
          variant="h4"
          components='h2'
          marginTop={5}
          marginBottom={3}
            >
  Top  {city.name} tours
            </Typography>
             <Grid container spacing={4}>
          {city.tours.map((tour, index) => <TourCard tour={tour} key={index}/>)}
          </Grid>
            </>
            
          ))}
         
        </Container>
     </div>
)


export default Home