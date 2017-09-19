import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return(
    <div>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p>{props.timeStamp}</p>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timeStamp: PropTypes.number.isRequired
}

export default Post;
