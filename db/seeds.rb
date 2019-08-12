landmark_attributes = [
    {
        title: "The Broker's Building",
        address: "404 Market Street",
        city: "San Diego",
        state: "CA",
        zip: "92101",
        alcohol: false,
        latitude: "32.711797",
        longitude: "-117.159628",
        image: "placeholder"
    },
    {
        title: "Old City Hall",
        address: "672 Fifth Ave",
        city: "San Diego",
        state: "CA",
        zip: "92101",
        alcohol: false,
        latitude: "32.707771",
        longitude: "-117.159628",
        image: "placeholder"
    },
    {
        title: "Cole Block Building",
        address: "702 Fifth Avenue",
        city: "San Diego",
        state: "CA",
        zip: "92101",
        alcohol: true,
        latitude: "32.748568",
        longitude: "-117.160907",
        image: "placeholder"
    },
    {
        title: "The Louis Bank of Commerce",
        address: "835-837 5th Avenue",
        city: "San Diego",
        state: "CA",
        zip: "92101",
        alcohol: false,
        latitude: "33.123792",
        longitude: "-117.063208",
        image: "placeholder"
    },
]

landmark_attributes.each do |attributes|
 Landmark.find_or_create_by(attributes)
end

walk_attributes = [
    {
        name: 'Historical Sites',
        distance: '2.5 miles',
        duration: 'About 1.5 hours',
        alcohol: false
    },
    {
        name: 'The Booze Cruze',
        distance: '1.75 miles',
        duration: '3+ hours',
        alcohol: true
    }
]

walk_attributes.each do |attributes|
 Walk.find_or_create_by(attributes)
end

stop_attributes = [
    {
        landmark_id: 1,
        walk_id: 1,
    },
    {
        landmark_id: 2,
        walk_id: 1,
    },
    {
        landmark_id: 3,
        walk_id: 1,
    },
    {
        landmark_id: 4,
        walk_id: 2,
    }
]

stop_attributes.each do |attributes|
    Stop.find_or_create_by(attributes)
end 