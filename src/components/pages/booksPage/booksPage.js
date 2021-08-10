import React, { Component } from "react";
import ItemList from "../../itemList";
import "./booksPage.css";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";
import { withRouter } from "react-router-dom";

class BooksPage extends Component {
  gotService = new gotService();

  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <ItemList
        onItemSelected={(itemId) => {
          this.props.history.push(`${itemId}`);
        }}
        getData={this.gotService.getAllBooks}
        renderItem={({ name, released }) =>
          `${name} (${released.substr(0, 4)})`
        }
      />
    );
  }
}

export default withRouter(BooksPage);
