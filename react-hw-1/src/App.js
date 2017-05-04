import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const active = {
  color: 'blue',
}

const complete = {
  color: 'grey',
}

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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTodos = (arrOfTodos) => {
    return arrOfTodos.map((todo, i) => {
      var todoDesc = todo.desc;
      var todoStat = todo.status;
      return <li data-staus={todoStat} key={i} onClick={this.handleClick}>{todoDesc}</li>;
    });
  }
  handleClick = () => {
    this.setState({filter: !this.state.filter})
  }

  handleChange(event) {
    this.setState({filter: event.target.value});
  }
  handleSubmit(event) {
    console.log('The state is: ' + this.state.filter);
    event.preventDefault();
  }
  render() {
    const { todos, filter } = this.state;

    const renderTodos = this.handleTodos(todos);

    const filterStyle = filter ? active : complete;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 style={filterStyle} onClick={this.handleClick}>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
          <select id="dropdown" value={this.state.filter} onChange={this.handleChange}>
                  <option value="active">Active</option>
                  <option value="complete">Complete</option>
          </select>
        <input type="submit" value="Submit" />
        </form>
        <ul>
          {renderTodos}
        </ul>
      </div>
    );
  }
}

export default App;
