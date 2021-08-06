import React from "react";
import { Col, Row, Container } from "reactstrap";

import './app.css';

function App() {
  return (
    <div>
      <Container>
        {/* <Header /> */}
      </Container>
      <Container>
        <Row>
          <Col lg={{size: 5, offset: 0}}>
            {/* <RandomChar /> */}
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            {/* <ItemList /> */}
          </Col>
          <Col md='6'>
            {/* <CharDetails /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
