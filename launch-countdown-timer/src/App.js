import './App.css';
import React, { useState } from 'react';
import Timer from './Timer';

function App() {



  

  return (
    <div className="App">
      We're launching soon


      <div>Registration closes in  minutes!</div>
      <Timer />


      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
  Coded by <a href="#">Your Name Here</a>.
</div>
    </div>
  );
}

export default App;
