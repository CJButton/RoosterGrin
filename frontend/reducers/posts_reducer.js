


import {RECEIVE_POST,
        RECEIVE_ERRORS,
        RECEIVE_ALL_POSTS,
        REMOVE_POST,
        RECEIVE_EDIT} from '../actions/posts_actions';

import { merge } from 'lodash';


const PostsReducer = (state = {}, action) => {

  switch(action.type) {

    case RECEIVE_POST:
    const newPost = merge({}, action.post);
      return merge(newPost);

    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);

    case RECEIVE_EDIT:
      const editedPost = merge({}, state, action.post);
        return editedPost;

    case REMOVE_POST:
      let deletePostState = merge({}, state);
      delete deletePostState.allPosts[action.post.id];
      deletePostState.userPost = {};
      return deletePostState;

    default:
      return state;
  }
};

export default PostsReducer;
