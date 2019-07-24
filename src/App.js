import React from 'react';
import "./App.css";

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingelRoom from './pages/SingelRoom';
import Error from './pages/Error';

function App() {
  return (
    <>
    <Home />
    <Rooms />
    <SingelRoom />
    <Error />
    </>
  );
}

export default App;
