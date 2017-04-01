

import {connect} from 'react-redux';

import MainComponent from './main';

// import {submitPost} from '../../actions/posts_actions';

import values from 'lodash/values';

const mapStateToProps = ({patient}) => ({
  patients: values(patient)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
