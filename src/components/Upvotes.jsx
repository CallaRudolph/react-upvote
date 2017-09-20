import React from "react";
import { connect } from "react-redux";
import c from "./../constants";
import PropTypes from "prop-types";

function Upvotes(props) {

  function addUpvote(postId){
    const { dispatch } = props;
    const action = {
      type: c.UPVOTE,
      id: postId
    };
    dispatch(action);
  }

  return(
    <div>
      <button onClick={() => {addUpvote(props.id)}}>Upvote</button>
    </div>
  );
}

Upvotes.propTypes = {
  id: PropTypes.string.isRequired
};

export default connect()(Upvotes);
