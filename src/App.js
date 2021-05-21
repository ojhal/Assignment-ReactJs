import { Component } from 'react';
import './App.css';
import Form from './Form.js'
import User from './User.js'


class App extends Component {
  shoot() {
    alert("Wrong Information!");
  }






  render() {

    const content = ['Ojhal Patwa', 'patkarojhal26@gmail.com', '123456789', '123456789', 'Street507']
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "blue" }}>Screen1: LogIn Form</h1>
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
          <button className="btn" onClick={this.shoot}>LogIn</button>
          <br />
          <p>
            <a href="https://github.com/ojhal">Sign In </a>
          </p>
        </form>
        <hr />
        <Form />
        <hr />
        <User list={content} />
      </div >

    );
  }
}



export default App;
