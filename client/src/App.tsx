import Router from "./Router";
import { BrowserRouter as Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Providers from "./provider";

function App() {
  return (
    <Providers>
      <Routes>
      <ToastContainer/>
      <Router />
    </Routes>
    </Providers>
    
  );
}

export default App;
