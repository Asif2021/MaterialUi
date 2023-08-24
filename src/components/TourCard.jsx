import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TourCard = () => {
  return (
    <Grid item sx={3}>
        <Paper elevation={3}>
          <img src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt="image"
          className='img' />
          <Box paddingX={1}>
          <Typography variant='subtitle2' >
            Immers into the falls
          </Typography>
          </Box>
          <Box sx={{
            display:'flex',
            alignItems:'center'
          }}>
            <AccessTimeIcon fontSize='small'/>
            <Typography variant='body2' component='p'>
            5 hours
            </Typography>
          </Box>
        </Paper>
    </Grid>
  )
}

export default TourCard