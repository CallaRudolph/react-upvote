import React from "react";
import PropTypes from "prop-types";
import Upvotes from "./Upvotes";
import Downvotes from "./Downvotes";
import {connect} from "react-redux";

function Post(props){
  var time = props.timeStamp.format("MMM Do, h:mm a");
  return(
    <div>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p><em>Posted: {time}</em></p>
      <Upvotes
        upvotes={props.upvotes}
        id={props.id}/>
      <br/>
      <Downvotes
        downvotes={props.downvotes}
        id={props.id}/>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timeStamp: PropTypes.object.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default connect()(Post);
