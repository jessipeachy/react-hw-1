import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      filter: 'active',
      todos: [
        {
          desc: 'Create React App',
          status: 'active',
        },{
          desc: 'Create State',
          status: 'active',
        },{
          desc: 'Create Components',
          status: 'active'
        }
      ]
    }
  }
  handleTools = (arrOfTools) => {
    return arrOfTools.map((tool, i) => {
      const toolDesc = this.state.todos.desc;
      const toolStat = this.state.todos.status;
      return <li key={i}>{toolDesc}</li>;
    });
  }
  render() {
    const { todos, filter } = this.state;

    const renderTools = this.handleTools(todos);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {renderTools}
        </ul>
      </div>
    );
  }
}

export default App;
