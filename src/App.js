import "./App.css";
import TourCard from "./components/TourCard";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

function App() {
  return (
   
      <Container>
        <Grid container spacing={4}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
      );
}

export default App;
