import React from 'react';
import {render} from 'react-dom';
import InputDigit from './InputDigit.jsx';
import KeyBoard from './KeyBoard.jsx';
class App extends React.Component {
  render () {
    return (
      <div>
        <InputDigit />
        <AwesomeComponent />
        <KeyBoard/>
      <div>aharom is yofi</div>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
