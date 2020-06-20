import React, { Component } from "react";
import User from "./User";

class UserList extends Component<{}, { users: Array<string> }> {
  constructor(props: Array<string>) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch("/api/")
      .then((res) => res.json())
      .then((users) => this.setState({ users: users.users }));
  };

  render() {
    var users = this.state.users;
    return (
      <div>
        {users.map((userName: string, index: number) => (
          <User key={index} user={userName} />
        ))}
      </div>
    );
  }
}

export default UserList;
