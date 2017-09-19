import React from "react";
import { connect } from "react-redux";
import c from "./../constants";
import PropTypes from "prop-types";

class Upvotes extends React.Component {
  constructor(props) {
    super(props);
    this.addUpvote = this.addUpvote.bind(this);
  }

  addUpvote(){
    const { dispatch } = this.props;

    const action = {
      type: c.UPVOTE,
      upvote: this.props.upvote
    };
    dispatch(action);
  }

  render() {
    return(
      <div>
        <button onClick={this.addUpvote}>Upvote</button>
      </div>
    );
  }
}

Upvotes.propTypes = {
  upvotes: PropTypes.number.isRequired
};

Upvotes = connect()(Upvotes);

export default Upvotes;
