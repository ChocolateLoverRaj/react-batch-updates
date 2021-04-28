import React from "react";
import "./style.css";
import Normal from './Normal'
import Better from './Better'

const App = () => {
  return (
    <>
      <h1>Use Batch Updates</h1>
      <h2>Normal React Component</h2>
      <Normal />
      <h2>Better React Component</h2>
      <Better />
    </>
  );
};

export default App;
