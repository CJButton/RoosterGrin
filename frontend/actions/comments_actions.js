

export const SUBMIT_COMMENT = "SUBMIT_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REQUEST_COMMENTS = "REQUEST_COMMENTS";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REQUEST_USER_COMMENTS = "REQUEST_USER_COMMENTS";
export const RECEIVE_USER_COMMENTS = "RECEIVE_USER_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const RECEIVE_EDIT = "RECEIVE_EDIT";

export const submitComment = (comment) => ({
  type: SUBMIT_COMMENT,
  comment
});

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const requestPostComments = (comment) => ({
  type: REQUEST_COMMENTS,
  comment
});

export const deleteComment = (commentId) => ({
  type: DELETE_COMMENT,
  commentId
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const requestUserComments = (postId) => ({
  type: REQUEST_USER_COMMENTS,
  postId
});

// for the userComment prop to more readily check if the user has already
// submitted a comment for the current comic
export const receiveUserComments = (comment) => ({
  type: RECEIVE_USER_COMMENTS,
  comment
});

export const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const editComment = (comment) => ({
  type: EDIT_COMMENT,
  comment
});

export const receiveEdit = (comment) => ({
  type: RECEIVE_EDIT,
  comment
});
