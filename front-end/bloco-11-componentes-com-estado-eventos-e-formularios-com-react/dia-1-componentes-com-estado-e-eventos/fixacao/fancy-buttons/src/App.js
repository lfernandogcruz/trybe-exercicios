import React from 'react';
import './App.css';


class App extends React.Component {
  // constructor() {
  //   super()
  //   this.handleClick1 = this.handleClick1.bind(this)
  //   this.handleClick2 = this.handleClick2.bind(this)
  //   this.handleClick3 = this.handleClick3.bind(this)
  // }

  handleClick1 = () => {
    console.log('Clicou no botinho!');
  }

  handleClick2 = () => {
    console.log('Clicou no bota!');
  }

  handleClick3 = () => {
    console.log('Clicou no botão!');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>Botinha</button>
        <button onClick={this.handleClick2}>Bota</button>
        <button onClick={this.handleClick3}>Botão</button>
      </div>
    );
  }

}

export default App;
