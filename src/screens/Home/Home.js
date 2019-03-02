import React, { Component } from "react";
import RedditPost from "../../component/reddit/RedditPost";
import { Grid, Row, Col } from "react-flexbox-grid";
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
      <Grid className="Home">
        <Row className="Home-header">
          <Col xs={12}>
            <h2>Get Better Every Day</h2>
          </Col>
        </Row>
        <Row between="xs">
          {this.state.posts.map((post, index) => (
            <RedditPost post={post} index={index} />
          ))}
        </Row>
      </Grid>
    );
  }
}

export default Home;
