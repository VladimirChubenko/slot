import React from 'react';
import './App.scss';
import Field from './containers/field'
import Panel from './containers/panel'

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Field/>
        <Panel/>
      </div>
    </div>
  );
}

export default App;
