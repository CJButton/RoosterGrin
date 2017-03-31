


import {RECEIVE_PATIENT,
        RECEIVE_ERRORS,
        RECEIVE_ALL_PATIENTS,
        REMOVE_PATIENT,
        RECEIVE_EDIT} from '../actions/posts_actions';

import { merge } from 'lodash';


const PatientsReducer = (state = {}, action) => {

  switch(action.type) {

    case RECEIVE_PATIENT:
    const patientInfo = merge({}, action.info);
      return merge(patientInfo);

    case RECEIVE_ALL_PATIENTS:
      return merge({}, action.patients);

    case RECEIVE_EDIT:
      const editedPost = merge({}, state, action.post);
        return editedPost;

    case REMOVE_POST:
      let deletePostState = merge({}, state);
      delete deletePostState.allPatients[action.post.id];
      deletePostState.userPost = {};
      return deletePostState;

    default:
      return state;
  }
};

export default PostsReducer;
