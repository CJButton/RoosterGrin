
import { hashHistory } from 'react-router';

import {receivePatientInfo,
        REQUEST_PATIENTS_INFO,
        requestAllPatients,
        receiveAllPatients,
        receiveErrors} from '../actions/patient_actions';

import { getAllPatients, getPatientInfo} from '../util/patient_api_util';

const PatientsMiddleware = ({ getState, dispatch }) => next => action => {
  const errorCallBack = xhr => dispatch(receiveErrors(xhr.responseJSON));
  let success;

  switch(action.type) {
    case REQUEST_ALL_PATIENTS:
      success = patients => dispatch(receiveAllPatients(patients));
      getAllPatients(success, errorCallBack);
      return next(action);

    case REQUEST_PATIENTS:
    // getting an unusual error where the db was getting hit twice
    // so created an if statement to prevent an error
      success = info => dispatch(receivePatient(info));
      // if (action.type === "RECEIVE_POST" && action.id === undefined) {
      //   return next(action);
      // }
      getPatient(action.id, success, errorCallBack);
      return next(action);

    default:
      next(action);
  }
};

export default PatientsMiddleware;
