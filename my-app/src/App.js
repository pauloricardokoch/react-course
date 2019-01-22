import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      {
        id: 0,
        name: 'Max',
        age: 30
      },
      {
        id: 1,
        name: 'Manu',
        age: 17,
        txt: 'Testing'
      }
    ]
  };

  getPersonIndex = (id) => {
    return this.state.persons.findIndex(p => {
      return p.id === id
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.getPersonIndex(id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (id) => {
    const personIndex = this.getPersonIndex(id);
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);

    this.setState({
      persons: persons
    });
  }

  render() {
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          {this.state.persons.map((person) => {
            return <div key={person.id}>
              <Person
                id={"person-" + person.id}
                name={person.name}
                age={person.age}
                change={(event) => this.nameChangedHandler(event, person.id)}
                delete={() => this.deletePersonHandler(person.id)} >{person.txt}
              </Person>
            </div>

          })}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
