import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import './editor.css';
import axios from 'axios';
class Editor extends React.Component{
  constructor(props){
    super(props);
      this.state = {
      value: "# Type your blog here"
      };
     this.handleChange =  this.handleChange.bind(this);

  }
    componentDidMount(){
     axios.get("http://localhost:3000/api").then(res => {
         console.log(res);
     })
    }
  handleChange(e){
    this.setState({value: e.target.value});
  }

  getRawMarked(){
      var md = new Remarkable();
      return  md.render(this.state.value) ;
  }
  render(){
    return (
        <div className="editorPage">
            <div className="col-11">
                <input className="title_editor" type="text" />

            </div>
            <div className="col-1">
                <button className="postButton"> Post </button>
            </div>
    <div className="col-6">
    <textarea
        onChange={this.handleChange}
        defaultValue={this.state.value}
        rows="32"/>
    </div>
          <div className="col-6 rawhtml">
            <div
              dangerouslySetInnerHTML={{ __html: this.getRawMarked()}} />

          </div>
        </div>
  )
  }
}


export default Editor;
