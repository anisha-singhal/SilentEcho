// Sample data for quiet spaces
export const mockSpaces = [
  {
    id: "1",
    name: "Tranquil Garden Library",
    description: "A peaceful library surrounded by a beautiful garden, perfect for reading or studying.",
    address: "123 Serenity Ave, Calmville",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194
    },
    photos: [
      "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    noiseLevel: 1, // Scale from 1 (very quiet) to 5 (noisy)
    rating: 4.8,
    reviews: [
      {
        id: "r1",
        userId: "u1",
        username: "BookLover",
        rating: 5,
        noiseRating: 1,
        comment: "Perfect quiet spot for deep focus. The garden area is especially peaceful.",
        date: "2025-02-15T08:30:00Z"
      },
      {
        id: "r2",
        userId: "u2",
        username: "StudyPro",
        rating: 4.5,
        noiseRating: 1,
        comment: "Almost silent except for occasional page turning. Great atmosphere!",
        date: "2025-02-10T14:45:00Z"
      }
    ],
    hours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed"
    },
    amenities: ["wifi", "power_outlets", "restrooms", "coffee", "indoor_seating", "outdoor_seating"],
    type: "library"
  },
  {
    id: "2",
    name: "Whisper Park",
    description: "A hidden gem in the city with secluded benches and peaceful walking paths.",
    address: "456 Quiet Lane, Peaceville",
    coordinates: {
      latitude: 37.7739,
      longitude: -122.4312
    },
    photos: [
      "https://images.pexels.com/photos/1477430/pexels-photo-1477430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1598075/pexels-photo-1598075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    noiseLevel: 2,
    rating: 4.5,
    reviews: [
      {
        id: "r3",
        userId: "u3",
        username: "NatureLover",
        rating: 5,
        noiseRating: 2,
        comment: "Bird songs and distant water fountains create the perfect natural soundtrack.",
        date: "2025-01-20T10:15:00Z"
      },
      {
        id: "r4",
        userId: "u4",
        username: "MeditationMaster",
        rating: 4,
        noiseRating: 2,
        comment: "Great for morning meditation, though it gets a bit busier around lunch time.",
        date: "2025-01-18T08:00:00Z"
      }
    ],
    hours: {
      monday: "6:00 AM - 8:00 PM",
      tuesday: "6:00 AM - 8:00 PM",
      wednesday: "6:00 AM - 8:00 PM",
      thursday: "6:00 AM - 8:00 PM",
      friday: "6:00 AM - 8:00 PM",
      saturday: "6:00 AM - 8:00 PM",
      sunday: "6:00 AM - 8:00 PM"
    },
    amenities: ["outdoor_seating", "restrooms", "water_fountains", "walking_paths"],
    type: "park"
  },
  {
    id: "3",
    name: "Serenity Café",
    description: "A small, quiet café with a no-music policy and comfortable workspaces.",
    address: "789 Hush Street, Silentville",
    coordinates: {
      latitude: 37.7833,
      longitude: -122.4167
    },
    photos: [
      "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    noiseLevel: 3,
    rating: 4.2,
    reviews: [
      {
        id: "r5",
        userId: "u5",
        username: "RemoteWorker",
        rating: 4.5,
        noiseRating: 3,
        comment: "My go-to spot for work calls. Quiet enough but with just enough ambient noise.",
        date: "2025-02-05T13:20:00Z"
      },
      {
        id: "r6",
        userId: "u6",
        username: "CoffeeEnthusiast",
        rating: 3.9,
        noiseRating: 3,
        comment: "Great coffee and mostly quiet, though the espresso machine can be loud at times.",
        date: "2025-02-01T09:30:00Z"
      }
    ],
    hours: {
      monday: "7:00 AM - 6:00 PM",
      tuesday: "7:00 AM - 6:00 PM",
      wednesday: "7:00 AM - 6:00 PM",
      thursday: "7:00 AM - 6:00 PM",
      friday: "7:00 AM - 7:00 PM",
      saturday: "8:00 AM - 7:00 PM",
      sunday: "8:00 AM - 5:00 PM"
    },
    amenities: ["wifi", "power_outlets", "coffee", "food", "indoor_seating", "restrooms"],
    type: "cafe"
  },
  {
    id: "4",
    name: "Stillness Art Museum",
    description: "A modern art museum known for its peaceful atmosphere and quiet contemplation spaces.",
    address: "101 Gallery Road, Artville",
    coordinates: {
      latitude: 37.7850,
      longitude: -122.4000
    },
    photos: [
      "https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    noiseLevel: 1,
    rating: 4.7,
    reviews: [
      {
        id: "r7",
        userId: "u7",
        username: "ArtAficionado",
        rating: 5,
        noiseRating: 1,
        comment: "You can hear a pin drop in some of the galleries. Perfect for deep thinking.",
        date: "2025-01-28T15:00:00Z"
      },
      {
        id: "r8",
        userId: "u8",
        username: "QuietSeeker",
        rating: 4.5,
        noiseRating: 1,
        comment: "The meditation room on the top floor is absolutely silent. A true sanctuary.",
        date: "2025-01-22T11:45:00Z"
      }
    ],
    hours: {
      monday: "Closed",
      tuesday: "10:00 AM - 5:00 PM",
      wednesday: "10:00 AM - 5:00 PM",
      thursday: "10:00 AM - 5:00 PM",
      friday: "10:00 AM - 8:00 PM",
      saturday: "10:00 AM - 5:00 PM",
      sunday: "10:00 AM - 5:00 PM"
    },
    amenities: ["indoor_seating", "restrooms", "gift_shop", "wheelchair_accessible"],
    type: "museum"
  },
  {
    id: "5",
    name: "Echo Valley Sanctuary",
    description: "A nature preserve with secluded trails and quiet meditation spots.",
    address: "202 Valley Path, Naturetown",
    coordinates: {
      latitude: 37.7700,
      longitude: -122.4300
    },
    photos: [
      "https://images.pexels.com/photos/572780/pexels-photo-572780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    noiseLevel: 2,
    rating: 4.9,
    reviews: [
      {
        id: "r9",
        userId: "u9",
        username: "HikingEnthusiast",
        rating: 5,
        noiseRating: 1,
        comment: "The east trail is so peaceful you can hear your own thoughts. Amazing!",
        date: "2025-02-18T09:15:00Z"
      },
      {
        id: "r10",
        userId: "u10",
        username: "WildlifeWatcher",
        rating: 4.8,
        noiseRating: 2,
        comment: "Occasional bird calls and rustling leaves create the perfect natural ambiance.",
        date: "2025-02-15T16:30:00Z"
      }
    ],
    hours: {
      monday: "Sunrise to Sunset",
      tuesday: "Sunrise to Sunset",
      wednesday: "Sunrise to Sunset",
      thursday: "Sunrise to Sunset",
      friday: "Sunrise to Sunset",
      saturday: "Sunrise to Sunset",
      sunday: "Sunrise to Sunset"
    },
    amenities: ["hiking_trails", "restrooms", "parking", "visitor_center"],
    type: "nature_preserve"
  },
  {
    id: "6",
    name: "Calm Coworking",
    description: "A coworking space dedicated to providing a quiet, productive environment.",
    address: "303 Focus Drive, Productiveville",
    coordinates: {
      latitude: 37.7898,
      longitude: -122.4050
    },
    photos: [
      "https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    noiseLevel: 2,
    rating: 4.6,
    reviews: [
      {
        id: "r11",
        userId: "u11",
        username: "ProductivityNinja",
        rating: 5,
        noiseRating: 2,
        comment: "The quiet policy is strictly enforced. Phone booths available for calls.",
        date: "2025-02-12T14:00:00Z"
      },
      {
        id: "r12",
        userId: "u12",
        username: "RemoteDeveloper",
        rating: 4.2,
        noiseRating: 2,
        comment: "Almost silent workspace with great amenities. Coffee machine can be noisy.",
        date: "2025-02-08T10:45:00Z"
      }
    ],
    hours: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 8:00 PM",
      saturday: "9:00 AM - 5:00 PM",
      sunday: "Closed"
    },
    amenities: ["wifi", "power_outlets", "coffee", "restrooms", "printer", "meeting_rooms", "phone_booths"],
    type: "coworking"
  }
];

export const amenitiesOptions = [
  { id: "wifi", label: "WiFi", icon: "wifi" },
  { id: "power_outlets", label: "Power Outlets", icon: "plug" },
  { id: "restrooms", label: "Restrooms", icon: "bath" },
  { id: "coffee", label: "Coffee", icon: "coffee" },
  { id: "food", label: "Food", icon: "utensils" },
  { id: "indoor_seating", label: "Indoor Seating", icon: "chair" },
  { id: "outdoor_seating", label: "Outdoor Seating", icon: "tree" },
  { id: "meeting_rooms", label: "Meeting Rooms", icon: "users" },
  { id: "printer", label: "Printer", icon: "print" },
  { id: "parking", label: "Parking", icon: "car" },
  { id: "hiking_trails", label: "Hiking Trails", icon: "hiking" },
  { id: "water_fountains", label: "Water Fountains", icon: "tint" },
  { id: "walking_paths", label: "Walking Paths", icon: "road" },
  { id: "gift_shop", label: "Gift Shop", icon: "gift" },
  { id: "wheelchair_accessible", label: "Wheelchair Accessible", icon: "wheelchair" },
  { id: "phone_booths", label: "Phone Booths", icon: "phone" },
  { id: "visitor_center", label: "Visitor Center", icon: "info" }
];

export const timeOfDayOptions = [
  { id: "morning", label: "Morning (5AM-11AM)" },
  { id: "afternoon", label: "Afternoon (12PM-5PM)" },
  { id: "evening", label: "Evening (6PM-10PM)" },
  { id: "night", label: "Night (11PM-4AM)" }
];

export const noiseOptions = [
  { value: 1, label: "Silent" },
  { value: 2, label: "Very Quiet" },
  { value: 3, label: "Quiet" },
  { value: 4, label: "Moderate" },
  { value: 5, label: "Somewhat Noisy" }
];