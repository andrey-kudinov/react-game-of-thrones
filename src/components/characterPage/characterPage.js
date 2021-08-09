import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import "./characterPage.css";
import ErrorMessage from "../errorMessage";

export default class CharacterPage extends Component {

  state = {
    selectedChar: 130,
    error: false,
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    if(this.state.error) {
      return <ErrorMessage />
    }

    return (
      <Row className="blocks">
        <Col md="5" className="block">
          <ItemList onCharSelected={this.onCharSelected} />
        </Col>
        <Col md="5" className="block block-details">
          <CharDetails charId={this.state.selectedChar} />
        </Col>
      </Row>
    );
  }
}
