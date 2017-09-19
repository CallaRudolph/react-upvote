import React from "react";
import { connect } from "react-redux";
import c from "./../constants";
import { v4 } from "uuid";
import Moment from "moment";
import PropTypes from "prop-types";

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewPost = this.handleNewPost.bind(this);
  }

  handleNewPost(event) {
    event.preventDefault();
    const { _title, _content } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.ADD_POST,
      id: v4(),
      title: _title.value,
      content: _content.value,
      timeStamp: new Moment(),
      upvotes: 0,
      downvotes: 0
    };
    dispatch(action);
    this.props.hideFormOnSubmit();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleNewPost}>
          <input
            ref="_title"
            type="text"
            id="title"
            placeholder="Title"/>
          <br/>
          <textarea
            ref="_content"
            id="content"
            placeholder="What is this about"/>
          <br/>
          <button type="submit">Go for it</button>
        </form>
      </div>
    );
  }
}

NewPostForm.propTypes = {
  hideFormOnSubmit: PropTypes.func
};

NewPostForm = connect()(NewPostForm);

export default NewPostForm;
