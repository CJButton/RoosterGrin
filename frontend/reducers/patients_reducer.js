


import {RECEIVE_PATIENT_INFO,
        RECEIVE_ALL_PATIENTS,
        RECEIVE_ERRORS} from '../actions/patients_actions';

import { merge } from 'lodash';

const PatientsReducer = (state = {}, action) => {

  switch(action.type) {

    case RECEIVE_PATIENT_INFO:

    const patientInfo = merge({}, action.info);
      return merge(patientInfo);

    case RECEIVE_ALL_PATIENTS:
      return merge({}, action.patients);

    default:
      return state;
  }
};

export default PatientsReducer;
