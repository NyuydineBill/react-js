import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component{
  render(){

  return (
      <React.Fragment>
      <NavBar />
        <main className='container'>
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
