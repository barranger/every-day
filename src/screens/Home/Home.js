import React, { Component } from "react";
import RedditPost from "../../component/reddit/RedditPost";
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
          <h2>Get Better Every Day</h2>

          {this.state.posts.map((post, index) => (
            <RedditPost post={post} index={index} />
          ))}
        </header>
      </div>
    );
  }
}

export default Home;
