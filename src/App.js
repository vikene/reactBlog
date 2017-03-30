import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="col-1 col-offset-3">
              check out
          </div>
        <div className="col-8">
          <div className="col-6 card">
            <h3> This is some title</h3>
            <p> This is some cool data to be seen</p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
