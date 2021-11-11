import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';


const MainComponent = () => {
  return (
    <Main />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' component={MainComponent} />
      </div>
    </BrowserRouter>
  );
}

export default App;
