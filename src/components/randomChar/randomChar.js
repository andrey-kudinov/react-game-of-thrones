import React, { Component } from "react";
import "./randomChar.css";
import styled from "styled-components";
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

const RandomCharBlock = styled.div`
  /* padding: 20px; */
`;

export default class RandomChar extends Component {
  
  componentDidMount() {
    this.updateChar();
    this.timerId = setInterval(this.updateChar, 20000)
    this.timerRefresh = setInterval(this.refreshTimer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
    clearInterval(this.timerRefresh)
  }
  
  gotService = new gotService();

  state = {
    char: {},
    loading: true,
    error: false,
    timerStart: 20,
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onError = (err) => {
    console.log(err);
    this.setState({ error: true, loading: false });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * 140 + 25);
    // const id = 1300000;
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .then(this.setState({ timerStart: 20 }))
      .catch(this.onError);
  }

  refreshTimer = () => {
    this.setState({ timerStart: this.state.timerStart - 1 })
  }

  render() {
    const { char, loading, error, timerStart } = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} timerStart={timerStart} /> : null;

    return (
      <RandomCharBlock>
        {errorMessage}
        {spinner}
        {content}
      </RandomCharBlock>
    );
  }
}

const View = ({ char, timerStart }) => {
  const { name, gender, born, died, culture, } = char;
  return (
    <>
      <span>{timerStart} seconds</span>
      <h4>Random Character: {name}</h4>
      <ul>
        <li>gender: {gender}</li>
        <li>born: {born}</li>
        <li>died: {died}</li>
        <li>culture: {culture}</li>
      </ul>
    </>
  );
};
