import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'; 
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters: [
      
      ],
      searchField: ''  
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ monsters: user}));
  }

  render(){
    const {} = this.state;
    return (
      <div className="App">
      <input 
        type='search' 
        placeholder='search monsters' 
        onChange={e => this.setState({searchField: e.target.value}, () => console.log(this.state) )} // this.setState happens asynchronous and not immediately, so you have to pass the console log as the second argument of the setSet state for it to read the update. 
      />
      <CardList 
        monsters = {this.state.monsters}
      >
       
      </CardList>
        
      </div>
    );
  }
}
export default App;
