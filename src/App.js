import React, { useState } from "react"
import { ASCII } from "./ASCII";
import "./styles.css";

function App() {
  const [height, setHeight] = useState(1)

  const handleChange = event => {
    setHeight(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault(); 
  }

  return (
    <div className="App">
      <h1>AC ASCII Display</h1>
      <h3>What height would you like?</h3>
      <form onSubmit={handleSubmit}>
          <label> Enter height: </label> 
            <input type="number" onChange={handleChange} defaultValue={height}/>
          <button type="submit">
            Submit
          </button>
      </form>
      <h1>Output height = {height}</h1>
      <ASCII></ASCII>
    </div>
  );
}

export default App;
