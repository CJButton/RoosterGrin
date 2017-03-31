

import { applyMiddleware } from 'redux';

import PostsMiddleware from './posts_middleware';

const RootMiddleware = applyMiddleware(
  PostsMiddleware
);

export default RootMiddleware;
