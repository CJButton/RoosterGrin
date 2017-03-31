


export const getPatientInfo = (id, success, errors) => {
  $.ajax({
    type: 'GET',
    url: `api/posts/${id}`,
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
