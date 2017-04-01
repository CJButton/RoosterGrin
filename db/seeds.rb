# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
patients = [[1,"Tadd","Williams","5555555555","tadd@example.com","123 Main Street","New York City","New York","10001"],
[2,"Gregorio","Walsh","8953642320","gregorio@example.com","1950 Rice Brooks","Keeganmouth","Oregon","24020"],
[3,"Antoinette","Kling","8138519488","antoinette@example.com","9730 Kyle Garden","Kovacekport","Texas","60115"],
[4,"Eula","Oberbrunner","4000112819","eula@example.com","15448 Amina Drives","Johnstonmouth","Maine","49369"],
[5,"Alden","Gutmann","6720059891","alden@example.com","765 Schimmel Hill","Bechtelarhaven","Colorado","27634"],
[6,"Gregoria","Grady","1315891590","gregoria@example.com","55757 Green Circles","North Coltenfort","Montana","27989"],
[7,"Mia","Nolan","3039445943","mia@example.com","2180 White Forks","Lake Xander","Nevada","26345"],
[8,"Emmanuel","Gleason","3202411656","emmanuel@example.com","5398 Alicia Summit","North Petramouth","Missouri","39854"],
[9,"Esperanza","Hayes","4591926081","esperanza@example.com","336 Purdy Dam","Schultzchester","Florida","43628"],
[10,"Kade","McClure","8694034011","kade@example.com","1919 Vance Grove","Blicktown","Maryland","95642"]]

patients.each do |patient|
  Patient.create(
  patient_id: patient[0],
  first_name: patient[1],
  last_name: patient[2],
  phone_number: patient[3],
  email: patient[4],
  street_address: patient[5],
  city: patient[6],
  state: patient[7],
  zip: patient[8]
  )
end
