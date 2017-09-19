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
      // to do:
      // find correct post
      // retrieve upvote value
      //
      let newUpvotes;
      for (let i = 0; i < state.length; i ++){
        if (state[i].id === action.id) {
          newUpvotes = state[i].upvotes + 1;
          console.log(newUpvotes);
        }
        return state[i];
      }
      return [
        ...state,
        {
          title : title,
          content : content,
          timeStamp: timeStamp,
          upvotes: newUpvotes,
          downvotes : downvotes,
          id : id
        }
      ];
    default:
    return state;
  }
};
