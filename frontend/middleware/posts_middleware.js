
import { hashHistory } from 'react-router';

import {receivePost,
        REQUEST_POST,
        receiveAllPosts,
        requestAllPosts,
        REQUEST_ALL_POSTS,
        SUBMIT_POST,
        DELETE_POST,
        removePost,
        EDIT_POST,
        receiveEdit,
        receiveErrors} from '../actions/posts_actions';

import { getAllPosts, getPost, sendPost, deletePostAPI, editPostAPI
                                    } from '../util/posts_api_util';

const PostsMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCallBack = xhr => dispatch(receiveErrors(xhr.responseJSON));
  let success;

  switch(action.type) {
    case REQUEST_ALL_POSTS:
      success = posts => dispatch(receiveAllPosts(posts));
      getAllPosts(success, errorCallBack);
      return next(action);

    case REQUEST_POST:
    // getting an unusual error where the db was getting hit twice
    // so created an if statement to prevent an error
      success = post => dispatch(receivePost(post));
      if (action.type === "RECEIVE_POST" && action.id === undefined) {
        return next(action);
      }
      getPost(action.id, success, errorCallBack);
      return next(action);

    case DELETE_POST:
      success = (post) => hashHistory.replace(`/`);
      deletePostAPI(action.postId, success, errorCallBack);
      return next(action);

    case SUBMIT_POST:
      success = (post) => hashHistory.replace(`posts/${post.id}`);
      sendPost(action.postInfo, success, errorCallBack);
      return next(action);

    case EDIT_POST:
      success = (post) => dispatch(receiveEdit(post));
      editPostAPI(action.post, success, errorCallBack);
      return next(action);

    default:
      next(action);
  }
};

export default PostsMiddleware;
