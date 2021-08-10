import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, { Field } from "../../itemDetails";
import "./characterPage.css";
import ErrorMessage from "../../errorMessage";
import gotService from "../../../services/gotService";
import RowBlock from "../../rowBlock";

export default class CharacterPage extends Component {
  gotService = new gotService();

  state = {
    selectedItem: 130,
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCharacters}
        // renderItem={(item) => `${item.name} (${item.gender})`}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    );

    const itemDetails = (
      <ItemDetails itemId={this.state.selectedItem}>
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture" />
      </ItemDetails>
    );

    return <RowBlock left={itemList} right={itemDetails} />;
  }
}
