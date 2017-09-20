import React from "react";
import { connect } from "react-redux";
import c from "./../constants";
import PropTypes from "prop-types";

function Downvotes(props) {

  function addDownvote(postId) {
    const { dispatch } = props;
    const action = {
      type: c.DOWNVOTE,
      id: postId
    };
    dispatch(action);
  }

  return(
    <div>
      <p>Downvotes: {props.downvotes}</p>
      <button onClick={() => {addDownvote(props.id)}}>Downvote</button>
    </div>
  );
}

Downvotes.propTypes = {
  downvotes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default connect()(Downvotes);
