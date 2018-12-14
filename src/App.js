import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayHello />
        <SayFulName name="Olha" surname="She" link="facebook.com" />
        <SayFulName name="Ira" surname="She" link="facebook.com" />
      </div>
      
    );
  }
}

function SayFulName(props) {
  return (
      <div>
      <h3>my name is {props.name}, surname - {props.surname} </h3>
      <a href={props.link}> Link... </a>
      </div>
  )
}

function SayHello() {
  return (
      <div>
      <h1>Hello World !</h1>
      <hr/>
      </div>
  )
}

export default App;
