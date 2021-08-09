import React, { Component } from "react";
import "./charDetails.css";
import gotService from "../../services/gotService";

export default class CharDetails extends Component {
  gotService = new gotService();

  state = {
    char: null,
  };

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  updateChar() {
    const { charId } = this.props;
    if (!charId) return;

    this.gotService.getCharacter(charId).then((char) => {
      this.setState({ char });
    });
    // this.foo.bar = 0
  }

  render() {
    if (!this.state.char) {
      return <span>Please select a character</span>;
    }
    const { name, gender, born, died, culture } = this.state.char;
    
    return (
      <div>
        <h4>Name: {name}</h4>
        <ul>
          <li>Gender: {gender}</li>
          <li>Born: {born}</li>
          <li>Died: {died}</li>
          <li>Culture: {culture}</li>
        </ul>
      </div>
    );
  }
}
