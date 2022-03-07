import React, { useState } from "react"
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
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
  }

  return (
    <Container fluid>
    <div className="App">
      <Row>
      <h1>AC ASCII Display</h1>
      <h3>What height would you like?</h3>
      </Row>
      <Row className="enter">
          <Col sm={4}><label> Enter height: </label></Col>
          <Col sm={8}><input type="number" onChange={handleChange} min="0" defaultValue={height}/></Col>
      </Row>
      <Row>
        <Col>
          <div id="textAreaA" className="areaA">{
          linesA.map((line, i) => (
            <div>
              {/* replace spaces with unicode space character */}
              {line.replace(/ /g, "\u00a0")}
            </div>
          ))}
          </div>
        </Col>
        <Col>
          <div id="textAreaC">{
          linesC.map((line, i) => (
            <div>
              {line.replace(/ /g, "\u00a0")}
            </div>
          ))}
          </div>
        </Col>
      </Row>
    </div>
    </Container>
  );
}


export default App;
