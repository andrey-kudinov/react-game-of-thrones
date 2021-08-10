import React from 'react';
import { Col, Row } from "reactstrap";

import './rowBlock.css'

const RowBlock = ({ left, right }) => {
  return (
    <Row className="blocks">
      <Col md="5" className="block">
        {left}
      </Col>
      <Col md="5" className="block block-details">
        {right}
      </Col>
    </Row>
  );
};

export default RowBlock