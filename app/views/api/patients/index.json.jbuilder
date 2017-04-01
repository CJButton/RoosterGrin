


json.array! @patients do |patient|

  json.id patient.id
  json.patient_id patient.patient_id
  json.first_name patient.first_name
  json.last_name patient.last_name
  json.phone_number patient.phone_number
  json.street_address patient.street_address
  json.city patient.city
  json.state patient.state
  json.zip patient.zip
  
end
