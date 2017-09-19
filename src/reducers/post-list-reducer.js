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
    default:
    return state;
  }
};
