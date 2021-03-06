
import { hashHistory } from 'react-router';

import {
        REQUEST_PATIENT_INFO,
        receivePatientInfo,
        REQUEST_ALL_PATIENTS,
        receiveAllPatients,
        receiveErrors} from '../actions/patients_actions';

import { getAllPatients, getPatientInfo } from '../util/patients_api_util';

const PatientsMiddleware = ({ getState, dispatch }) => next => action => {
  const errors = xhr => dispatch(receiveErrors(xhr.responseJSON));
  let success;

  switch(action.type) {
    case REQUEST_ALL_PATIENTS:
      success = patients => dispatch(receiveAllPatients(patients));
      getAllPatients(success, errors);
      return next(action);

    case REQUEST_PATIENT_INFO:
      success = info => dispatch(receivePatientInfo(info));
      getPatientInfo(action.id, success, errors);
      return next(action);

    default:
      next(action);
  }
};

export default PatientsMiddleware;
