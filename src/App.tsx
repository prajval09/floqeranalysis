import React from 'react';
import logo from './logo.svg';
import Main from './Pages/Main';
import './index.css';
import { Outlet } from 'react-router-dom';
import Left from './Pages/Left/Left';

function App() {
  return (
    <div className="App flex flex-col items-center">
      <Left/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
