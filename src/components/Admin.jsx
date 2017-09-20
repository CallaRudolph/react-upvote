import React from "react";
import PostList from "./PostList";
import {connect} from "react-redux";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h3>This is the Admin page!</h3>
        <PostList
          postList = {this.props.adminMasterPostList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminMasterPostList : state
  }
}

export default connect(mapStateToProps)(Admin);
