import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      Email: '',
      password: '',
      address: '',
      show: false

    };
  }

  // myChangeHandler = (event) => {
  //   this.setState({
  //     username: event.target.value, num: event.target.value
  //   });
  //   console.log("edit and delete")
  // }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      show: !this.state.show

    })

  }



  render() {
    const contentItem = this.props.list.map((contents) =>
      <li>{contents}{this.props.name}</li>
    );
    return (
      <div>
        <h1 style={{ color: "blue" }}>Screen3: User Detail Page</h1>
        <form className="container" >
          <p>UserName:</p>
          <input
            name="username"
            text="text"
            type="text"
            placeholder="Enter Username"
            onChange={this.myChangeHandler}


          />
          <p style={{ color: "blue" }}>{this.state.username}</p>
          <br />
          <p>Email:</p>
          <input
            name="age"
            text="text"
            type="text"
            placeholder="Enter Email"
            onChange={this.myChangeHandler}


          />
          <p style={{ color: "blue" }}>{this.state.age}</p>
          <br />

          <p>Password:</p>
          <input
            name="Email"
            text="text"
            type="text"
            placeholder="Enter Password"
            onChange={this.myChangeHandler}

          />
          <p style={{ color: "blue" }}>{this.state.Email}</p>

          <br />
          <p>Confirm Password:</p>
          <input
            name="password"
            text="text"
            type="text"
            placeholder="Enter confirm password"
            onChange={this.myChangeHandler}

          />
          <p style={{ color: "blue" }}>{this.state.password}</p>

          <br />
          <p>Address:</p>
          <input
            name="address"
            text="text"
            type="text"
            placeholder="Enter address"
            onChange={this.myChangeHandler}

          />
          <p style={{ color: "blue" }}>{this.state.address}</p>
          <br />
          < button className="btn" onClick={this.handleClick}>
            LogOut
          </button >





          {this.state.show ? <ul style={{ color: "blue" }}>{contentItem}</ul> : null}
          {/* <button className="btn"  >LogOut</button> */}

        </form>
      </div>


    );
  }
}














export default User;