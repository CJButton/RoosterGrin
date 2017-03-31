

import { submitComment,
         SUBMIT_COMMENT,
         receiveCommentErrors,
         receiveComments,
         requestComments,
         REQUEST_COMMENTS,
         RECEIVE_COMMENT,
         receiveAllComments ,
         REQUEST_USER_COMMENTS,
         receiveUserComments,
         DELETE_COMMENT,
         removeComment,
         EDIT_COMMENT,
         receiveEdit} from '../actions/comments_actions';

import { sendComment, getComments, getUserComments,
         deleteCommentAPI, editCommentAPI } from '../util/comments_api_util';

const CommentsMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCallBack = xhr => dispatch(receiveCommentErrors(xhr.responseJSON));
  let success;

  switch(action.type) {
    case DELETE_COMMENT:
      success = (comment) => dispatch(removeComment(comment));
      deleteCommentAPI(action.commentId, success, errorCallBack);
      return next(action);

    case REQUEST_COMMENTS:
      success = (comments) => dispatch(receiveAllComments(comments));
      getComments(action.comment, success, errorCallBack);
      return next(action);

    case REQUEST_USER_COMMENTS:
      success = (comment) => dispatch(receiveUserComments(comment));
      getUserComments(action.comment, success, errorCallBack);
      return next(action);

    case SUBMIT_COMMENT:
      success = (comments) => dispatch(receiveAllComments(comments));
      sendComment(action.comment, success, errorCallBack);
      return next(action);

    case EDIT_COMMENT:
      success = (comment) => dispatch(receiveEdit(comment));
      editCommentAPI(action.comment, success, errorCallBack);
      return next(action);

    default:
      next(action);
  }

};

export default CommentsMiddleware;
