import React from "react";
import NewPostForm from "./NewPostForm";
import { Modal } from "react-bootstrap";

class NewPostControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {formModalVisible: false};
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
  }

  showFormModal() {
    this.setState({formModalVisible: true});
  }

  hideFormModal() {
    this.setState({formModalVisible: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.showFormModal}>Add Post</button>
        <Modal
          show={this.state.formModalVisible}
          onHide={this.hideFormModal}>
          <Modal.Header>
            <Modal.Title>Add Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewPostForm
              hideFormOnSubmit = {this.hideFormModal}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default NewPostControl;
