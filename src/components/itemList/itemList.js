import React, { Component } from "react";
import "./itemList.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData.then((itemList) => {
      this.setState({ itemList });
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
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList);

    return <ul>{items}</ul>;
  }
}
