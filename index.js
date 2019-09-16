import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "ghsdsgd",
      lastname: "sdsjd",
      data: {
        val: "1",
        data1: {
          val2: "2"
        }
      }
    };
  }

  render() {
    const { firstname, lastname, data: { data1: { val2 } } } = this.state;

    return (
      <div>
        <Hello name={firstname} />
        {val2}
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}




render(<App />, document.getElementById('root'));
