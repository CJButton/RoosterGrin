


export const getPatientInfo = (id, success, errors) => {
  $.ajax({
    type: 'GET',
    url: `api/patients/${id}`,
    success,
    errors
  });
};

export const getAllPatients = (success, errors) => {
  $.ajax({
    type: 'GET'
    url: `api/patients`
    success,
    errors
  });
};
