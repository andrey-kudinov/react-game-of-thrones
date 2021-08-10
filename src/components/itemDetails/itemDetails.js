import React, { Component } from "react";
import "./itemDetails.css";

const Field = ({ item, field, label }) => {
  return (
    <li>
      {label}: {item[field]}
    </li>
  );
};

export { Field };

export default class ItemDetails extends Component {
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
    const { itemId, getDetails } = this.props;
    if (!itemId) return;

    getDetails(itemId).then((item) => {
      this.setState({ item });
    });
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
