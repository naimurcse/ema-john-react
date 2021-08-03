import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
        {/* <h2>{users.length}</h2>
        { 
          users.map((user => <Customers users={user} key={user.id}></Customers>))
        } */}
    </div>
  );
}

export default App;
