import React from "react";
import PropTypes from "prop-types";
import Upvotes from "./Upvotes";
import Downvotes from "./Downvotes";
import {connect} from "react-redux";

function Post(props){
  var time = props.timeStamp.format("MMM Do, h:mm a");
  let postDetails =
    <div>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p><em>Posted: {time}</em></p>
    </div>
  if (props.currentRoute === "/") {
    return (
      <div>
        {postDetails}
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
  else {
    return(
      <div>
        {postDetails}
        <p>Upvotes: {props.upvotes}</p>
        <p>Downvotes: {props.downvotes}</p>
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timeStamp: PropTypes.object.isRequired,
  upvotes: PropTypes.number.isRequired,
  downvotes: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  currentRoute: PropTypes.string
};

export default connect()(Post);
