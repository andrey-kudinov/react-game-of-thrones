import React, { Component } from "react";
import "./itemList.css";
import Spinner from "../spinner";
import gotService from "../../services/gotService";
import PropTypes from "prop-types";

class ItemList extends Component {
  static defaultProps = {
    onItemSelected: () => {},
  };

  static propTypes = {
    onItemSelected: PropTypes.func,
  };

  renderItems(arr) {
    return arr.map((item) => {
      const { id } = item;

      const label = this.props.renderItem(item);

      return (
        <li
          key={id}
          className="item"
          onClick={() => this.props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { data } = this.props;
    const items = this.renderItems(data);

    return <ul>{items}</ul>;
  }
}

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

const {getAllCharacters} = new gotService()
export default withData(ItemList, getAllCharacters);
