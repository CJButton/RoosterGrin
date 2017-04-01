


import {RECEIVE_PATIENT_INFO,
        RECEIVE_ALL_PATIENTS,
        RECEIVE_ERRORS} from '../actions/patients_actions';

import { merge } from 'lodash';

const initialState = {
  allPatients: {},
  patientInfo: {}
};

const PatientsReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {

    case RECEIVE_PATIENT_INFO:
    newState = merge({}, state);
    merge(newState.patientInfo = action.info)
      return newState;

    case RECEIVE_ALL_PATIENTS:
    newState = merge({}, state);
    merge(newState.allPatients = action.patients)
      return newState;

    default:
      return state;
  }
};

export default PatientsReducer;
