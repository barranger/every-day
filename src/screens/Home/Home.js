import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://www.reddit.com/r/GetMotivated.json")
      .then(response => response.json())
      .then(json => {
        this.setState({ posts: json.data.children });
      });
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h2>This is the Home header</h2>
          <ul>
            {this.state.posts.map((post, index) => {
              var img = post.data.thumbnail !== "self" ? <img alt="preview" src={post.data.thumbnail} /> : "";
              return (
                !post.data.stickied && <li key={index}>{img}{post.data.title}</li>
              );
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default Home;
