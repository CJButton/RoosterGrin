

// react
import React from 'react';
import { Provider } from 'react-redux';

// react/Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// containers
import App from './app';
import MainContainer from './main/main_container';
// import PostsIndexContainer from './index/posts_index_container';
// import PostContainer from './post/post_container';


// actions
// import { requestAllPosts, requestPost } from '../actions/posts_actions';
// import { requestPostComments } from '../actions/comments_actions';


  const Root = ({store}) => {

  //   const _ensureLoggedIn = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (!currentUser) {
  //     replace('/');
  //   }
  //
  // };
  // const _redirectIfLoggedIn = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (currentUser) {
  //     replace('/');
  //   }
  // };

  // const loadAllPosts = () => {
  //   store.dispatch(requestAllPosts());
  // };
  //
  // const loadPost = (nextState) => {
  //   let post_id = nextState.params.id;
  //   let user_id = null;
  //   let body = null;
  //   let username = null;
  //   let findComments = {post_id, user_id, body, username};
  //   store.dispatch(requestPost(nextState.params.id));
  //   store.dispatch(requestPostComments(findComments));
  //
  // };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path ="/" component={App}>
          <IndexRoute component={MainContainer} />


        </Route>
      </Router>
    </Provider>
  );

};

export default Root;
