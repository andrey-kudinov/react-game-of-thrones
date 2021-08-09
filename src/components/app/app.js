import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

import "./app.css";

export default class App extends Component {
  state = {
    isCharacter: true,
    selectedChar: null,
  };

  toggleCharacter = () => {
    this.setState({ isCharacter: !this.state.isCharacter });
  };

  onCharSelected = (id) => {
    console.log(id);
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    const character = this.state.isCharacter ? (
      <Col lg={{ size: 5, offset: 0 }} className="block">
        <RandomChar />
      </Col>
    ) : null;
    return (
      <div className="app">
        <Container>{/* <Header /> */}</Container>
        <Container className="content">
          <Row>{character}</Row>

          <Row>
            <Button
              color="info"
              className="button-toggle"
              onClick={this.toggleCharacter}
            >
              Hide/show character
            </Button>
          </Row>

          <Row className='blocks'>
            <Col md="5" className="block">
              <ItemList onCharSelected={this.onCharSelected} />
            </Col>
            <Col md="5" className="block">
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
