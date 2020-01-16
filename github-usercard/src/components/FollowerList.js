import React from "react";
import Axios from "axios";
import { UserCard } from "./UserCard";

export class FollowerList extends React.Component {
  state = {
    followers: []
  };

  componentDidMount() {
    Axios.get("https://api.github.com/users/hayesdev/followers")
      .then(res => {
        // set state
        const follower = res.data;
        this.setState({
          followers: follower
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.followers.map(res => (
          <UserCard key={res.id} username={res.login} />
        ))}
      </div>
    );
  }
}
