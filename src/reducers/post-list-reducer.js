export default (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      const { title, content, timeStamp, upvotes, downvotes, id } = action;
      return [
        ...state,
        {
          title : title,
          content : content,
          timeStamp: timeStamp,
          upvotes: upvotes,
          downvotes : downvotes,
          id : id
        }
      ];
    case "UPVOTE":
      let upState = state.slice();
      for (var i = 0; i < upState.length; i ++){
        if (upState[i].id === action.id) {
          upState[i].upvotes++;
        }
      }
      return upState;
    case "DOWNVOTE":
      let downState = state.slice();
      for (var i = 0; i < downState.length; i ++){
        if (downState[i].id === action.id) {
          downState[i].downvotes++;
        }
      }
      return downState;
    default:
      return state;
  }
};
