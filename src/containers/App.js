import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
// import {robots} from './robots';

class App extends Component {
   constructor() {
      super()
      this.state = {
         robots: [],
         searchfield: ''
      }
   }

   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({robots: users}));
   }

   onSearchChange = (e) => {
      this.setState({ searchfield: e.target.value });
   }

   render() {
      const { robots, searchfield } = this.state;
      const filteredRobots = robots.filter(robot => {
         return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return (
        <div className='tc ma4'>
          <h1>Robo Friends</h1>
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll> {
              !robots.length ? <h2>Loading</h2> :
              <CardList robots={filteredRobots} />
          } </Scroll>
        </div>
      );
   }
}

export default App;
