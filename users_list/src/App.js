import './App.css';
import React, {Component} from 'react';
import Users from './Components/Users.js';
import Modal3 from './Components/Modal3.js';



function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1><i class="fas fa-users"></i> Users List</h1>
      </div> 
      <Modal3/>
        <br/><br/><br/><br/><br/>
      <Users/> 
    </div>
  );
}

export default App;
