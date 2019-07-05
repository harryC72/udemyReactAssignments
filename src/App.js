import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import uuid from 'uuid/v1'
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

export default class App extends Component {
  state ={
    input: "",
    inputArr: []
  }

  inputHandler = (event) =>{
    const input = event.target.value;
    const inputArr = input.split('');
    this.setState({input: input,
      inputArr: inputArr
     })

  }

  deleteCharHandler = (index) =>{
    let chars = [...this.state.inputArr];
    chars.splice(index, 1);
    let input = chars.join('');
    this.setState({inputArr: chars, input: input});
  }

  render() {
    return (
      <div>
        <input onChange={(event)=>this.inputHandler(event)} value={this.state.input} />
        <p>{this.state.inputArr.join('')}</p>
        <ValidationComponent length={this.state.input.length} />
        {this.state.inputArr.map((item, index) =>
          <CharComponent click={()=>this.deleteCharHandler(index)} char={item} />
        )}
      </div>
    )
  }
}

