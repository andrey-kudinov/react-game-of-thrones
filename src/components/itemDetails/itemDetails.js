import React, { Component } from "react";
import "./itemDetails.css";
import gotService from "../../services/gotService";

const Field = ({ item, field, label }) => {
  return (
    <li>
      {label}: {item[field]}
    </li>
  );
};

export { Field };

export default class ItemDetails extends Component {
  gotService = new gotService();

  state = {
    item: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) return;

    this.gotService.getCharacter(itemId).then((item) => {
      this.setState({ item });
    });
    // this.foo.bar = 0
  }

  render() {
    if (!this.state.item) {
      return <span>Please select a item</span>;
    }
    const { item } = this.state;
    const { name } = item;

    return (
      <div>
        <h4>Name: {name}</h4>
        <ul>
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    );
  }
}
