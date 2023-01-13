import  MultiStepForm  from './components/MultiStepForm';
import './App.css';
import { Box, Container } from '@mui/system';

function App() {
  return (
    <>
     <Container >
        <Box class="box" sx={{ bgcolor: '#fff' }} style={{padding:"20px 20px"}} >
      <h1>
        Cutshort
      </h1>
      <MultiStepForm />
      </Box>
      </Container>

    </>
  );
}

export default App;
