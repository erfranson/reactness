import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'; 
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters: [
      
      ]  
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ monsters: user}));
  }

  render(){
    return (
      <div className="App">
      <CardList 
        name= "Ethan"
      >
       {
          this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))}
      </CardList>
        
      </div>
    );
  }
}
export default App;
