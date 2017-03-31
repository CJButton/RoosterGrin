

export const sendComment = (comment, success, error) => {
  $.ajax({
    type: 'POST',
    url: `api/comments`,
    data: comment,
    success,
    error
  });
};

export const deleteCommentAPI = (commentId, success, errors) => {
  $.ajax({
    type: 'DELETE',
    url: `api/comments/${commentId}`,
    success,
    errors
  });
};

export const getComments = (postId, success, errors) => {
  $.ajax({
    type: 'GET',
    url: `api/comments/`,
    data: postId,
    success,
    errors
  });
};

export const getUserComment = (comments, success, error) => {
  $.ajax({
    type: 'GET',
    url: `api/comments/${comments.id}`,
    comments,
    success,
    error
  });
};

export const editCommentAPI = (comment, success, error) => {
  $.ajax({
    type: 'PUT',
    url: `api/comments/${comment.id}`,
    data: comment,
    success,
    error
  });
};
