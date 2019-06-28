import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

async function loadGreeting() {
  const respons = await fetch("http://localhost:4000/graphql", {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({query: '{hello}'})
  });
  const responsBody = await respons.json();
  return responsBody.data.hello;
}
loadGreeting();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {hello: ''};
    loadGreeting().then((hello) => this.setState({hello}));
  }
  render() {
    const {hello} = this.state;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{hello}</h1>
      </header>
    </div>
  );
}
}
export default App;
