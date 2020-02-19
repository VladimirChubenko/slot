import React from 'react';
import './App.scss';
import {connect} from 'react-redux'
import first from './assets/first.png'

function App(props) {
  
  return (
    <div className="App">

      <div className="field">
        <div><img src="assets/1.png" alt=""/> {props.field.first.value}</div>
        <div><img src="/assets/1.png" alt=""/>{props.field.second.value}</div>
        <div><img src="./assets/1.png" alt=""/>{props.field.third.value}</div>
        <div><img src={first} alt="first"/>{props.field.fourth.value}</div>
        <div>{props.field.first.value}</div>
        <div>{props.field.first.value}</div>
        <div>{props.field.first.value}</div>
        <div>{props.field.first.value}</div>
        <div>{props.field.first.value}</div>
      </div>

    </div>
  );
}

function mapStateToProps(state) {
  return {
    whatever: state.whatever,
    field: state.field
  }
}

export default connect(mapStateToProps)(App);
