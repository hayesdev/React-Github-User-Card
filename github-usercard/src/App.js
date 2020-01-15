import React from "react";
import axios from "axios";
import { FollowerList } from "./components/FollowerList.js";
import "./App.css";

class App extends React.Component {
  // The constructor and super are still running under the hood
  // must use arrow functions though!!
  // constructor() {
  //   super();
  //   this.state = {
  //     githubUser: ""
  //   };
  // }

  state = {
    user: "",
    name: "",
    github: ""
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/hayesdev")
      .then(res => {
        //res.data.login
        const person = res.data;
        this.setState({
          user: person.login,
          name: person.name,
          github: person.url
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  render() {
    // import different component carrying state from followers api
    return (
      <div className="App">
        <h1>GitHub Users</h1>
        <div className="user">
          <h2>Name: {this.state.name}</h2>
          <h2>
            Handle: <a href={this.state.github}> {this.state.user}</a>
          </h2>
          <FollowerList />
        </div>
      </div>
    );
  }
}
export default App;
