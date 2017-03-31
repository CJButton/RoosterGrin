




import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PostsReducer from './posts_reducer';
import CommentsReducer from './comments_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  comments: CommentsReducer
});

export default RootReducer;
