import React from 'react';
import './App.css';
import Topbar from './components/topbar/TopBar'
import Routes from './routes/Routes';


function App(){
    return (
      <>
        <Topbar />
        <Routes />
      </>
    );
}

export default App;
