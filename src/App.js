import React from 'react';
import './App.scss';
import Field from './containers/field'
import Panel from './containers/panel'
import Sound from './containers/sound'
// eslint-disable-next-line 
import Back from './components/sound/back'


function App() {

  return (
    <div className="App">
      {/* <Back /> */}
      <div className="wrapper">
        <Field/>
        <Panel/>
        <Sound />
      </div>
    </div>
  );
}

export default App;
