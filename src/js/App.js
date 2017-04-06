import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.focus = this.focus.bind(this);
  }
  focus(){
    console.log(this.refs.mymain)
  }
  render() {
    return (
      <div className="App">

      <div className="main" ref="mymain">
      <div className="col-12 banner">
      <h1>Pine Head</h1>
      </div>
        <div className="col-9 col-offset-2">
          <div className="col-9 card row">
            <h3> This is some title</h3>
            <p> This is some cool data to be seen ... <a href="#"> Read more</a></p>
            </div>
            <div className="col-9 card row">
              <h3> This is some title</h3>
              <p> This is some cool data to be seen</p>
              </div>
              <div className="col-9 card row">
                <h3> This is some title</h3>
                <p> This is some cool data to be seen</p>
                </div>
        </div>
        </div>
      </div>
    );
  }

}

export default App;
