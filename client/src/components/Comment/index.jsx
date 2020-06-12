import React, { Component } from 'react';
import './style.scss';
import { Form, Button } from 'react-bootstrap';

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
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              value={this.state.message}
              onChange={this.handleChange}
              placeholder="Write your comment here"
              rows="4"
            />
          </Form.Group>

          <Button id="button" size="md" block variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Comment;
