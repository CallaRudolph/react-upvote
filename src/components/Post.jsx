import React from "react";
import PropTypes from "prop-types";
import Upvotes from "./Upvotes";

function Post(props){
  var time = props.timeStamp.format("MMM Do, h:mm a");
  return(
    <div>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p><em>Posted: {time}</em></p>
      <p>Upvotes: {props.upvotes}</p>
      <Upvotes post={props}/>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timeStamp: PropTypes.object.isRequired,
  upvotes: PropTypes.number.isRequired
};

export default Post;
