import React, { Component } from "react";
import "./itemList.css";
import gotService from "../../services/gotService";
import Spinner from "../spinner";

export default class ItemList extends Component {
  gotService = new gotService();

  state = {
    charList: null,
  };

  componentDidMount() {
    this.gotService.getAllCharacters().then((charList) => {
      this.setState({ charList });
    });
  }

  renderItems(arr) {
    return arr.map((el, i) => {
      return (
        <li
          key={i}
          className="item"
          onClick={() => this.props.onCharSelected(i + 41)}
        >
          {el.name}
        </li>
      );
    });
  }

  render() {
    const { charList } = this.state;

    if (!charList) {
      return <Spinner />;
    }

    const items = this.renderItems(charList);

    return <ul>{items}</ul>;
  }
}
