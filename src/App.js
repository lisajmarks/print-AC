import React, { useState, useEffect } from "react"
import "./styles.css";
import { getStringA, getStringC } from "./ASCII";

function App() {
  const [height, setHeight] = useState(0)
  const [linesA, setLinesA] = useState([])
  const [linesC, setLinesC] = useState([])

  const handleChange = event => {
    const height = event.target.value
    setHeight(height)
    const a = getStringA(height)
    const c = getStringC(height)
    setLinesA(a)
    setLinesC(c)
    // console.log(ac)
    // setLines(ac)
  }

  return (
    <div className="App">
      <h1>AC ASCII Display</h1>
      <h3>What height would you like?</h3>
      <form>
          <label> Enter height: </label> 
            <input type="number" onChange={handleChange} defaultValue={height}/>
      </form>
      <div id="textAreaA">{
      linesA.map((line, i) => (
        <div>{line.replace(/ /g, "\u00a0")}</div>
      ))}
      </div>
      <div id="textAreaC">{
      linesC.map((line, i) => (
        <div>{line.replace(/ /g, "\u00a0")}
        </div>
      ))}
      </div>
    </div>
  );
}


export default App;
