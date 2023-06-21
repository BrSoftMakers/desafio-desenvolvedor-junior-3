import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
