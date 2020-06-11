import React, { Component } from 'react';
import './style.scss';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
      // messages: []
    };
  }
  //updating the comment state
  handleChange = (event) => {
    console.log(event);
    const value = event.target.value;
    this.setState({
      message: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.receiveComment(this.state.message, this.props.postId);
  };

  render() {
    return (
      <div className="comment-container">
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Write your comment here"
            cols="30"
            rows="4"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Comment;
