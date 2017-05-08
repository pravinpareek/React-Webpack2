import React from 'react';
import ReactDOM from 'react-dom';
import { p } from './index.css';
import AwesomeComponent from './AwesomeComponent.js';
class App extends React.Component {
  render () {
    return <div><center> Hello React!
	<AwesomeComponent /></center> 
	</div>;
	
  }
}

ReactDOM.render(
 <App />,
  document.getElementById('root')
);
