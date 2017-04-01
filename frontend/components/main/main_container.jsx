

import {connect} from 'react-redux';

import MainComponent from './main';

import {requestPatientInfo} from '../../actions/patients_actions';

import values from 'lodash/values';

const mapStateToProps = ({patient}) => ({
  patients: patient.allPatients,
  patientInfo: patient.patientInfo
});

const mapDispatchToProps = dispatch => ({
  requestPatientInfo: (id) => dispatch(requestPatientInfo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
