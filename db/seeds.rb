# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@broker=Landmark.create(title:"The Broker's Building" , address: "404 Market Street", city: "San Diego", state: "CA", zip: "92101", alcohol: false, latitude: "32.711797", longitude: "-117.119791", image: "placeholder")
@oldhall=Landmark.create(title:"Old City Hall" , address: "672 Fifth Ave", city: "San Diego", state: "CA", zip: "92101", alcohol: false, latitude: "32.707771", longitude: "-117.159628", image: "placeholder")
@coleblock=Landmark.create(title:"Cole Block Building" , address: "702 Fifth Avenue", city: "San Diego", state: "CA", zip: "92101", alcohol: true, latitude: "32.748568", longitude: "-117.160907", image: "placeholder")
@louisbank=Landmark.create(title:"The Louis Bank of Commerce" , address: "835-837 5th Avenue", city: "San Diego", state: "CA", zip: "92101", alcohol: false, latitude: "33.123792", longitude: "-117.063208", image: "placeholder")