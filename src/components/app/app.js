import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../pages/characterPage/characterPage";
import HousesPage from "../pages/housesPage/housesPage";
import BooksPage from "../pages/booksPage/booksPage";
import gotService from "../../services/gotService";
import BooksItem from "../pages/booksItem/booksItem";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header";

import "./app.css";

export default class App extends Component {
  state = {
    isCharacter: true,
    error: false,
  };

  gotService = new gotService();

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
      <Router>
        <Header />
        <div className="app">
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

            <Route path="/characters" component={CharacterPage} />
            <Route path="/books" exact component={BooksPage} />
            <Route path="/houses" component={HousesPage} />

            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <BooksItem bookId={id} />;
              }}
            />

            {/* <Row className="blocks">
              <Col md="6" className="block">
                <ItemList
                  onItemSelected={this.onItemSelected}
                  getData={this.gotService.getAllBooks}
                  renderItem={(item) => item.name}
                />
              </Col>
              <Col md="6" className="block">
                <CharDetails charId={this.state.selectedChar} />
              </Col>
            </Row>

            <Row className="blocks">
              <Col md="6" className="block">
                <ItemList
                  onItemSelected={this.onItemSelected}
                  getData={this.gotService.getAllHouses}
                  renderItem={(item) => item.name}
                />
              </Col>
              <Col md="6" className="block">
                <CharDetails charId={this.state.selectedChar} />
              </Col>
            </Row> */}
          </Container>
        </div>
      </Router>
    );
  }
}
