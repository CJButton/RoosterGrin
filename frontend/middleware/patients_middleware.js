
import { hashHistory } from 'react-router';

import {
        REQUEST_PATIENT_INFO,
        receivePatientInfo,
        REQUEST_ALL_PATIENTS,
        receiveAllPatients,
        receiveErrors} from '../actions/patients_actions';

import { getAllPatients, getPatientInfo} from '../util/patients_api_util';

const PatientsMiddleware = ({ getState, dispatch }) => next => action => {
  const errors = xhr => dispatch(receiveErrors(xhr.responseJSON));
  let success;

  switch(action.type) {
    case REQUEST_ALL_PATIENTS:
      success = patients => dispatch(receiveAllPatients(patients));
      getAllPatients(success, errors);
      return next(action);

    case REQUEST_PATIENT_INFO:
    // getting an unusual error where the db was getting hit twice
    // so created an if statement to prevent an error
      success = info => dispatch(receivePatientInfo(info));
      // if (action.type === "RECEIVE_POST" && action.id === undefined) {
      //   return next(action);
      // }
      getPatientInfo(action.id, success, errors);
      return next(action);

    default:
      next(action);
  }
};

export default PatientsMiddleware;
