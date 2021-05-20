import React, { Component } from 'react'



class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "blue" }}>Screen2: SingUp Form</h1>
        <form className="container">
          <p>UserName:</p>
          <input
            name="name"
            text="text"
            placeholder="Enter Username"

          />
          <br />
          <p>Email:</p>
          <input
            name="name"
            text="text"
            placeholder="Enter Email"

          />
          <br />
          <p>Password:</p>
          <input
            name="name"
            text="text"
            placeholder="Enter Password"

          />
          <br />
          <p>Confirm Password:</p>
          <input
            name="name"
            text="text"
            placeholder="Enter confirm password"

          />
          <br />
          <p>Address:</p>
          <input
            name="name"
            text="text"
            placeholder="Enter address"

          />
          <br />

        </form>

      </div >

    );
  }
}












export default Form;