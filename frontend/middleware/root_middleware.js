

import { applyMiddleware } from 'redux';

import PatientsMiddleware from './patients_middleware';

const RootMiddleware = applyMiddleware(
  PatientsMiddleware
);

export default RootMiddleware;
