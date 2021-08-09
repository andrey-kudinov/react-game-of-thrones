import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage/characterPage";

import "./app.css";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends Component {
  state = {
    isCharacter: true,
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  toggleCharacter = () => {
    this.setState({ isCharacter: !this.state.isCharacter });
  };

  render() {
    const character = this.state.isCharacter ? (
      <Col lg={{ size: 5, offset: 0 }} className="block">
        <RandomChar />
      </Col>
    ) : null;

    if (this.state.error) {
      return <ErrorMessage />;
    }
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
          <CharacterPage />
          <Row className='blocks'>
            <Col md="6" className="block">
              <ItemList onCharSelected={this.onCharSelected} />
            </Col>
            <Col md="6" className="block">
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
