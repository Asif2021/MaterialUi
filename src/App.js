import './App.css'
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
     <Button variant="contained" onClick={()=>alert('hello World')}
     >Hello world</Button>
    </div>
  );
}

export default App;