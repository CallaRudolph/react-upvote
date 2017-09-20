import React from "react";
import NewPostControl from "./NewPostControl";
import PostList from "./PostList";
import {connect} from "react-redux";

class MasterPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log(this.props.location.pathname);
    return(
      <div>
        <h2>The landing page of fun.</h2>
        <NewPostControl/>
        <PostList postList = {this.props.masterPostList}
                  currentRoute= {this.props.location.pathname} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};

export default connect(mapStateToProps)(MasterPost);
