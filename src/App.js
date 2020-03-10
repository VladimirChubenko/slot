import React, {useState} from 'react';
import './App.scss';
import Field from './containers/field'
import Panel from './containers/panel'
import Sound from './containers/sound'
import Back from './components/sound/back'
import Enter from './components/enter'


function App() {
  const [enter, setEnter] = useState(false)

  return (
    <div className="App">
      {enter
        ? <>
            <Back />
            <div className="wrapper">
              <Field/>
              <Panel/>
              <Sound />
            </div>
          </>
        : <Enter start={() => setEnter(true)}/>
      }
    </div>
  );
}

export default App;
