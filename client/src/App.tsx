import { Container } from "./App.style";
import Router from "./Router";
import { BrowserRouter as Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Container>
      <Router />
    </Container>
    </Routes>
    
  );
}

export default App;
