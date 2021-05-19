import { Component } from 'react';
import './App.css';
import Form from './Form.js'


class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "blue" }}>Screen1: Login Form</h1>
        <form className="container">
          <p>Email:</p>
          <input
            name="name"
            text="text"
            placeholder="Enter UserName"

          />
          <br />
          <p>Password:</p>
          <input
            name="name"
            text="text"
            placeholder="Enter Email"

          />
          <br />


          <button className="btn">Login</button>
          <br />
          <p>
            <a href="https://github.com/ojhal">Sign In </a>
          </p>
        </form>
        <hr />
        <Form />
      </div >

    );
  }
}



export default App;
