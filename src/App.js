import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginFrom from './component/login/loginFrom'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <LoginFrom />
      </div>
    );
  }
}

export default App;
