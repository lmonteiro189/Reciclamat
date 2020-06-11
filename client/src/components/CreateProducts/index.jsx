import React from 'react';
import { Form } from 'react-bootstrap';
import Dropzone from '../DropZone';

const PostProducts = (props) => {
  function handleTextArea(event) {
    const { name, value } = event.target;
    props.handleFormData(name, value);
  }

  function productFileUploaded(file) {
    props.handleFormData('image', file);
  }

  return (
    <div className="post-products-container">
      <Form>
        <Form.Group>
          <Dropzone onFileUploaded={productFileUploaded} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description of your post: </Form.Label>
          <Form.Control as="textarea" rows="3" name="description" onChange={handleTextArea} />
        </Form.Group>
      </Form>
    </div>
  );
};
export default PostProducts;
