import React from "react";
import Axios from "axios";

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
        <h2>Followers</h2>
        {this.state.followers.map(props => (
          <h3 key={props.login}>
            <a href="#">{props.login}</a>
          </h3>
        ))}
      </div>
    );
  }
}
