




import { combineReducers } from 'redux';

import PatientsReducer from './patients_reducer';

const RootReducer = combineReducers({
  patient: PatientsReducer
});

export default RootReducer;
