


import {RECEIVE_COMMENT,
        RECEIVE_ERRORS,
        RECEIVE_ALL_COMMENTS} from '../actions/comments_actions';

import { merge } from 'lodash';


const CommentsReducer = (state = {}, action) => {

  switch(action.type) {

    case RECEIVE_COMMENT:
    const newPost = merge({}, action.comments);
      return merge(newPost);

    case RECEIVE_ALL_COMMENTS:
      return merge({}, action.comments);

    default:
      return state;
  }
};

export default CommentsReducer;
