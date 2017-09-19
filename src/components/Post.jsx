import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Post(props){
  var time = props.timeStamp.format("MMM Do, h:mm a");
  return(
    <div>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p><em>Posted: {time}</em></p>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timeStamp: PropTypes.object.isRequired
}

export default Post;
