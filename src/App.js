import { Component } from 'react';
import SearchBox  from './components/search-box/search-box';
import CardList from './components/card-list/card-list';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      members: [],
     searchField: ''
    }
    // console.log('constructor')
  }

  componentDidMount() {
    // console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(users => this.setState(() => {
      return{members: users}}
      ))
    .catch(err => console.error(err))
  }
  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchField };})
  }
  render(){

    const {members, searchField} = this.state
    const { onSearchChange } = this

    const filteredMonsters = members.filter((m) => {
      return m.name.toLocaleLowerCase().includes(searchField)
    });

  return (
    <div className="App">
      <h1 id='title'>Monster Rolodex</h1>
      <SearchBox onSearchChange={onSearchChange} />
      <div className='card-list-container'>
      <CardList filteredMonsters={filteredMonsters} />
      </div>
      
    </div>
  )
  }
}

export default App;
