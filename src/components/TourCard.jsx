import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { createTheme, ThemeProvider } from '@mui/material';

const TourCard = ({tour}) => {
  const theme = createTheme({
    components:{
      MuiTypography:{
        variants:[
          {
            props:{
              variant:'body2'
            }, 
            style:{
              fontSize:11,
            }
          },
          {
            props:{
              variant:'body3'
            }, 
            style:{
              fontSize:9,
            }
          }
        ]
      }
    }
  })
  return (
    <Grid item sx={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image}
          alt="image"
          className='img' />
          <Box paddingX={1}>
          <Typography variant='subtitle2' component='h2' >
           {tour.name}
          </Typography>
          <Box sx={{
            display:'flex',
            alignItems:'center'
          }} paddingX={1} >
            <AccessTimeIcon fontSize='small' sx={{width:12.5}}/>
            <Typography variant='body2' component='p' marginLeft={0.5}>
            {tour.duration} hours
            </Typography>
            </Box>
            <Box sx={{
            display:'flex',
            alignItems:'center'
          }} marginTop={3}>
              <Rating name="read-only" value={4.5} readOnly precision={0.5} />
              <Typography variant='body2' component='p' marginLeft={0.5}>
           {tour.rating}
            </Typography>
            <Typography variant='body3' component='p' marginLeft={0.5}>
            ({tour.numberOfReviews} Reviews)
            </Typography>
     
          </Box>
            <Box>
            <Typography variant='h6' component='h3' marginTop={0}>
            From C ${tour.price}
            </Typography>
            </Box>
            </Box>
        </Paper>
          </ThemeProvider>
    </Grid>
  )
}

export default TourCard