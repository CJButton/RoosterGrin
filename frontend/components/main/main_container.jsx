

import {connect} from 'react-redux';
import Main from './main';

// import {submitPost} from '../../actions/posts_actions';

import values from 'lodash/values';

// if user is logged in, then redirect them elsewhere
const mapStateToProps = ({}) => ({
  // user: session.currentUser,
  // posts: values(posts).reverse()
});

const mapDispatchToProps = dispatch => ({
  // submitPost: (userId, title, text, username) =>
  //       dispatch(submitPost(userId, title, text, username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
