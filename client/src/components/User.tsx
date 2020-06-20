import React, { Component } from "react";

class User extends Component<{ user: string }, {}> {
  render() {
    return <h1>{this.props.user}</h1>;
  }
}

export default User;
