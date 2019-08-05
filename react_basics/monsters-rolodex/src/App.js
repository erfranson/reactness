import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'; 
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters: [],
      searchField: ''  
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ monsters: user}));
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
      console.log(filteredMonsters)
    // this is the same as 
    // const monsters = this.state.monsters
    // const searchField = this.state.searchField
    return (
      <div className="App">
      <input 
        type='search' 
        placeholder='search monsters' 
        onChange={e => this.setState({searchField: e.target.value}, () => console.log(this.state) )} // this.setState happens asynchronous and not immediately, so you have to pass the console log as the second argument of the setSet state for it to read the update. 
      />
      <CardList monsters={filteredMonsters}/>
        
      </div>
    );
  }
}
export default App;
