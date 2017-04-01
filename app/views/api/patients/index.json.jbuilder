


json.array! @patients do |patient|

  json.label patient.first_name + " " + patient.last_name
  json.value patient.id
end
