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
      let tempState = state.slice();
      for (var i = 0; i < tempState.length; i ++){
        if (tempState[i].id === action.id) {
          tempState[i].upvotes++;
        }
      }
      console.log(tempState);
      return tempState;
    default:
      return state;
  }
};
