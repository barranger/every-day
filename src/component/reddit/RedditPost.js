import React, { Component } from "react";
import { Col } from 'react-flexbox-grid';
import "./RedditPost.css";

class RedditPost extends Component {

  render() {
    const thumbnail = this.props.post.data.thumbnail;
    const img = thumbnail !== "self" && thumbnail !== "default" ? <img alt="preview" src={thumbnail} /> : "";
    
    let text = this.props.post.data.title;
    text = text.substring(text.indexOf(']') + 1);
    
    return !this.props.post.data.stickied && <Col xs={3} className="redditPost" key={this.props.index}>{img}{text}</Col>
  }
}

export default RedditPost;
