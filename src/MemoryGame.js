import React, { Component } from 'react';
import Cards from './Cards';
import Navbar from './Navbar';

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

export default class MemoryGame extends Component {
  constructor(props) {
    super(props);
    
    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
    ];
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
