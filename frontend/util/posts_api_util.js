
export const editPostAPI = (post, success, error) => {
  $.ajax({
    type: 'PUT',
    url: `api/posts/${post.id}`,
    data: {post},
    success,
    error
  });
};

export const getPost = (id, success, error) => {
  $.ajax({
    type: 'GET',
    url: `api/posts/${id}`,
    success,
    error
  });
};

export const deletePostAPI = (postId, success, errors) => {
  $.ajax({
    type: 'DELETE',
    url: `api/posts/${postId}`,
    success,
    errors
  });
};

export const getAllPosts = (success, error) => {
  $.ajax({
    type: 'GET',
    url: `api/posts`,
    success,
    error
  });
};

export const sendPost = (postInfo, success, error) => {
  $.ajax({
    type: 'POST',
    url: `api/posts`,
    data: postInfo,
    success,
    error
  });
};
