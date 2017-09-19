import React from "react";
import NewPostControl from "./NewPostControl";
import PostList from "./PostList";

function MasterPost() {
  return(
    <div>
      <h2>The landing page of fun.</h2>
      <NewPostControl/>
      <PostList/>
    </div>
  );
}

export default MasterPost;
