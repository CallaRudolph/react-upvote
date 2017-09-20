import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props){
  return(
    <div>
      <hr/>
      {props.postList.map((post) =>
        <Post title={post.title}
            content={post.content}
            timeStamp={post.timeStamp}
            upvotes={post.upvotes}
            downvotes={post.downvotes}
            key={post.id}
            id={post.id}
            currentRoute={props.currentRoute}/>
      )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  currentRoute: PropTypes.string
};

export default PostList;
