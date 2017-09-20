import React from "react";
import { connect } from "react-redux";
import c from "./../constants";
import PropTypes from "prop-types";

function Upvotes(props) {
  // var upStyle = {
  //   float: "right"
  // }

  function addUpvote(postId){
    const { dispatch } = props;
    const action = {
      type: c.UPVOTE,
      id: postId
    };
    dispatch(action);
  }

  return(
    <div style={upStyle}>
      <p>Upvotes: {props.upvotes}</p>
      <button onClick={() => {addUpvote(props.id)}}>Upvote</button>
    </div>
  );
}

Upvotes.propTypes = {
  upvotes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default connect()(Upvotes);
