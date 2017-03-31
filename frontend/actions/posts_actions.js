

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REQUEST_ALL_POSTS = "REQUEST_ALL_POSTS";
export const RECEIVE_POSTS_ERRORS = "RECEIVE_POSTS_ERRORS";
export const SUBMIT_POST = "SUBMIT_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const REQUEST_POST = "RECEIVE_POST";
export const DELETE_POST = "DELETE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const EDIT_POST = "EDIT_POST";
export const RECEIVE_EDIT = "RECEIVE_EDIT";

export const editPost = (post) => ({
  type: EDIT_POST,
  post
});

export const receiveEdit = (post) => ({
  type: RECEIVE_EDIT,
  post
});

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId
});

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
});

export const requestPost = (id) => ({
  type: REQUEST_POST,
  id
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const submitPost = (postInfo) => ({
  type: SUBMIT_POST,
  postInfo
});

export const requestAllPosts = (posts) => ({
  type: REQUEST_ALL_POSTS,
  posts
});

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_POSTS_ERRORS,
  errors
});
