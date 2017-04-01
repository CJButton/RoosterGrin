


export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const REQUEST_PATIENT_INFO = "REQUEST_PATIENT_INFO";
export const RECEIVE_PATIENT_INFO = "RECEIVE_PATIENT_INFO";

export const REQUEST_ALL_PATIENTS = "REQUEST_ALL_PATIENTS";
export const RECEIVE_ALL_PATIENTS = "RECEIVE_ALL_PATIENTS";

export const requestPatientInfo = (id) => ({
  type: REQUEST_PATIENT_INFO,
  id
});

export const receivePatientInfo = (info) => ({
  type: RECEIVE_PATIENT_INFO,
  info
});

export const requestAllPatients = () => ({
  type: REQUEST_ALL_PATIENTS
});

export const receiveAllPatients = (patients) => ({
  type: RECEIVE_ALL_PATIENTS,
  patients
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
