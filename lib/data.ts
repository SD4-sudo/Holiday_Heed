export const POPULAR_PLACES = [
  "Gulmarg", "Dal Lake", "Srinagar", "Pahalgam", "Sonamarg", 
  "Vaishnodevi", "Amarnath", "Gurez valley", "Auru Valley", "Gondola", 
  "Betaab Valley", "Aharbal", "Mughal Gardens", "Shankaracharya Temple", 
  "Tulip Garden", "Wular Lake", "Sinthan Top", "Verinag", "Lal Chowk", "Doodhpathri"
];

export const DESTINATIONS = [
  {
    id: 1,
    name: "Srinagar",
    image: "https://images.unsplash.com/photo-1566837497312-7be7830ae9b1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Gulmarg",
    image: "https://images.unsplash.com/photo-1631693558359-f7afa9e8e883?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Pahalgam",
    image: "https://images.unsplash.com/photo-1668173443752-bdec2fbb3c79?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Sonamarg",
    image: "https://images.unsplash.com/photo-1561287437-c69a30664793?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Yusmarg",
    image: "https://images.unsplash.com/photo-1653547194257-6810a860b882?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Gurez Valley",
    image: "https://images.unsplash.com/photo-1708186320869-0a527e67023d?q=80&w=690&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export const CATEGORIES = [
  {
    id: 1,
    name: "Honeymoon Specials",
    price: "₹24,999",
    image: "https://plus.unsplash.com/premium_photo-1661328087840-4cdb358cff44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Romantic Kashmir tour package designed for newlyweds featuring enchanting houseboat stays and pristine valley views.",
  },
  {
    id: 2,
    name: "Family Packages",
    price: "₹18,500",
    image: "https://images.unsplash.com/photo-1559054109-82d938dac629?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Complete Kashmir tour package for families featuring skiing, cultural tours, and delightful Kashmir experiences.",
  },
  {
    id: 3,
    name: "Adventure Tours",
    price: "₹15,000",
    image: "https://i.pinimg.com/1200x/c4/64/fd/c464fd273e2c096c310751ef1065c264.jpg",
    description: "Thrilling Kashmir tour package including trekking, skiing in Gulmarg, and river rafting adventures.",
  },
  {
    id: 4,
    name: "Luxury Escapes",
    price: "₹35,000",
    image: "https://picsum.photos/seed/luxury/800/600",
    description: "Premium Kashmir tour package with luxury resorts and exclusive private houseboats on Dal Lake.",
  },
  {
    id: 5,
    name: "Budget Friendly",
    price: "₹9,999",
    image: "https://picsum.photos/seed/budget/800/600",
    description: "Affordable Kashmir tour package to explore enchanting valleys and destinations without compromising quality.",
  },
  {
    id: 6,
    name: "Group Tours",
    price: "₹12,500",
    image: "https://picsum.photos/seed/group/800/600",
    description: "Join our Kashmir tour package groups and experience the scenic mountains and valleys together with fellow travelers.",
  },
  {
    id: 7,
    name: "Winter Special",
    price: "₹21,000",
    image: "https://picsum.photos/seed/winter/800/600",
    description: "Experience the winter wonderland of Gulmarg with our premium Kashmir tour package featuring world-class skiing.",
  }
];

export const PACKAGES = [
  {
    id: 1,
    title: "Mesmerizing Kashmir Package",
    image: "https://images.unsplash.com/photo-1635781840149-bd74dcc84257?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "4 Nights / 5 Days",
    location: "Srinagar - Gulmarg - Pahalgam",
    price: "₹10,050",
    originalPrice: "₹25,000",
    discount: "60% OFF",
    rating: 4.9,
    destination: "Srinagar",
    category: "Family Packages",
    description: "Experience the mesmerizing beauty of Kashmir with our signature 5-day tour covering the iconic Mughal Gardens, Gulmarg, and Pahalgam.",
    highlights: ["Mughal Gardens", "Srinagar Sightseeing", "Pahalgam Tour", "Gulmarg Tour", "Shikara Ride", "Houseboat stay"],
    inclusions: ["Stay in hygienic standard hotels", "Comfortable Transportation", "Daily Breakfast & Dinner", "All Tolls & Taxes", "Expert Tour Guidance", "Pickup & Drop from Airport or Railway Station", "Dal Lake Shikara ride", "Houseboat stay"],
    exclusions: ["Airfare", "Gondola Ride Tickets", "Pony Rides", "Lunch", "Personal Expenses"],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", details: "Pickup from Airport/Railway Station and transfer to hotel/houseboat. Local sightseeing." },
      { day: 2, title: "Mughal Gardens & Dal Lake Tour", details: "Visit the famous Mughal Gardens and enjoy a relaxing Dal Lake Shikara ride." },
      { day: 3, title: "Gulmarg Excursion", details: "Full day tour to the beautiful meadows of Gulmarg." },
      { day: 4, title: "Pahalgam Trip", details: "Explore the Valley of Shepherds, Pahalgam." },
      { day: 5, title: "Departure", details: "Breakfast and drop-off at Airport/Railway Station." }
    ]
  },
  {
    id: 2,
    title: "Kashmir Winter Package",
    image: "https://plus.unsplash.com/premium_photo-1681909931907-7beaaed6a930?q=80&w=1170&auto=format&fit=crop",
    duration: "5 Nights / 6 Days",
    location: "Srinagar - Gulmarg - Pahalgam",
    price: "₹10,050",
    originalPrice: "₹25,000",
    discount: "60% OFF",
    rating: 4.8,
    destination: "Gulmarg",
    category: "Winter Special",
    description: "Embrace the magic of a Kashmiri winter with guided tours to snowy Gulmarg, scenic Pahalgam, and the classic Dal Lake.",
    highlights: ["Mughal Gardens", "Srinagar Sightseeing", "Gulmarg Tour", "Pahalgam Tour", "Shikara Ride", "Houseboat stay"],
    inclusions: ["Stay in hygienic standard hotels", "Comfortable Transportation", "Daily Breakfast & Dinner", "All Tolls & Taxes", "Expert Tour Guidance", "Pickup & Drop from Airport or Railway Station", "Dal Lake Shikara ride", "Houseboat stay"],
    exclusions: ["Activity Charges", "Gondola Tickets", "Lunches", "Tips"],
    itinerary: [
      { day: 1, title: "Arrival & Transfer", details: "Arrival at Srinagar and transfer to accommodation." },
      { day: 2, title: "Srinagar Sightseeing", details: "Explore the Mughal Gardens and local sights." },
      { day: 3, title: "Gulmarg Tour", details: "Full day excursion to the winter wonderland of Gulmarg." },
      { day: 4, title: "Pahalgam Tour", details: "Enjoy the crisp winter views of Pahalgam." },
      { day: 5, title: "Shikara Ride & Houseboat", details: "Experience the Dal Lake via Shikara and spend the night in a Houseboat." },
      { day: 6, title: "Departure", details: "Checkout and transfer for departure." }
    ]
  },
  {
    id: 3,
    title: "Kashmir Ladies Special Package",
    image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=1171&auto=format&fit=crop",
    duration: "5 Nights / 6 Days",
    location: "Srinagar - Gulmarg - Pahalgam - Sonmarg",
    price: "₹10,050",
    originalPrice: "₹25,000",
    discount: "60% OFF",
    rating: 5.0,
    destination: "Srinagar",
    category: "Group Tours",
    description: "A specially curated, safe, and comfortable Kashmir tour designed exclusively for ladies, covering all major beautiful destinations.",
    highlights: ["Mughal Gardens", "Srinagar Sightseeing", "Gulmarg Tour", "Pahalgam Tour", "Sonmarg Tour", "Shikara Ride", "Houseboat stay"],
    inclusions: ["Stay in hygienic standard hotels", "Comfortable Transportation", "Daily Breakfast & Dinner", "All Tolls & Taxes", "Expert Tour Guidance", "Pickup & Drop from Airport or Railway Station", "Dal Lake Shikara ride", "Houseboat stay"],
    exclusions: ["Entry Fees", "Personal Expenses", "Lunches"],
    itinerary: [
      { day: 1, title: "Welcome to Kashmir", details: "Arrival, pickup, and check-in. Evening at leisure." },
      { day: 2, title: "Srinagar City Tour", details: "Mughal Gardens and Dal Lake exploration." },
      { day: 3, title: "Gulmarg & Pahalgam", details: "Scenic drives and sightseeing across Gulmarg and Pahalgam." },
      { day: 4, title: "Sonmarg Excursion", details: "Visit the breathtaking Meadow of Gold, Sonmarg." },
      { day: 5, title: "Houseboat Experience", details: "Relaxing Shikara ride and a memorable houseboat stay." },
      { day: 6, title: "Farewell", details: "Departure with beautiful memories." }
    ]
  },
  {
    id: 4,
    title: "Standard Kashmir Package",
    image: "https://images.unsplash.com/photo-1680223198255-79547edecc9e?q=80&w=686&auto=format&fit=crop",
    duration: "5 Nights / 6 Days",
    location: "Srinagar - Gulmarg - Pahalgam",
    price: "₹14,500",
    originalPrice: "₹25,000",
    discount: "42% OFF",
    rating: 4.6,
    destination: "Srinagar",
    category: "Budget Friendly",
    description: "Our comprehensive standard tour offering the best balance of comfort, sightseeing, and value across Kashmir's top locations.",
    highlights: ["Mughal Gardens", "Local Sightseeing", "Gulmarg Tour", "Pahalgam Tour", "Shikara Ride", "Houseboat stay"],
    inclusions: ["Stay in hygienic standard hotels", "Comfortable Transportation", "Daily Breakfast & Dinner", "All Tolls & Taxes", "Expert Tour Guidance", "Pickup & Drop from Airport or Railway Station", "Dal Lake Shikara ride", "Houseboat stay"],
    exclusions: ["Airfare", "Activity Tickets", "Personal Expenses"],
    itinerary: [
      { day: 1, title: "Arrival", details: "Transfer to accommodation." },
      { day: 2, title: "Local Wonders", details: "Mughal Gardens and local Srinagar sights." },
      { day: 3, title: "Gulmarg Excursion", details: "Full day in Gulmarg." },
      { day: 4, title: "Pahalgam Excursion", details: "Full day in Pahalgam." },
      { day: 5, title: "Dal Lake Tour", details: "Shikara ride and houseboat check-in." },
      { day: 6, title: "Departure", details: "Transfer to Airport." }
    ]
  },
  {
    id: 5,
    title: "Kashmir Offbeat Package",
    image: "https://images.unsplash.com/photo-1651509094074-e8acaeb84d8f?q=80&w=1170&auto=format&fit=crop",
    duration: "6 Nights / 7 Days",
    location: "Gurez - Bangus - Doodhpathri",
    price: "₹14,500",
    originalPrice: "₹25,000",
    discount: "42% OFF",
    rating: 4.8,
    destination: "Gurez Valley",
    category: "Adventure Tours",
    description: "Step away from the crowds and explore the untouched, offbeat paths of Kashmir including Gurez Valley, Bangus, and Doodhpathri.",
    highlights: ["Mughal Gardens", "Srinagar Sightseeing", "Gurez Valley Trip", "Bangus Valley Trip", "Doodhpathri Trip", "Shikara Ride", "Houseboat stay"],
    inclusions: ["Stay in hygienic standard hotels", "Comfortable Transportation", "Daily Breakfast & Dinner", "All Tolls & Taxes", "Expert Tour Guidance", "Pickup & Drop from Airport or Railway Station", "Dal Lake Shikara ride", "Houseboat stay"],
    exclusions: ["Permit Fees (if any)", "Lunches", "Personal Gear"],
    itinerary: [
      { day: 1, title: "Arrival in Srinagar", details: "Srinagar local sightseeing and Mughal Gardens." },
      { day: 2, title: "Doodhpathri Visit", details: "Explore the pristine 'Valley of Milk'." },
      { day: 3, title: "Journey to Gurez", details: "Scenic drive and exploration of Gurez Valley." },
      { day: 4, title: "Gurez Exploration", details: "Local sights and majestic landscapes of Gurez." },
      { day: 5, title: "Bangus Valley", details: "Trip to the breathtaking Bangus Valley." },
      { day: 6, title: "Return to Dal Lake", details: "Houseboat stay and Shikara ride." },
      { day: 7, title: "Departure", details: "Check-out and transfer." }
    ]
  },
  {
    id: 6,
    title: "Kashmir Border Trails Package",
    image: "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "6 Nights / 7 Days",
    location: "Keran - Bangus - Karnah",
    price: "₹10,050",
    originalPrice: "₹25,000",
    discount: "60% OFF",
    rating: 4.9,
    destination: "Srinagar",
    category: "Adventure Tours",
    description: "An exhilarating trail along the beautiful border regions of Kashmir, offering untouched natural beauty and unique cultural experiences.",
    highlights: ["Srinagar Sightseeing", "Keran Valley Tour", "Bangus Valley Tour", "Karnah-Teetwal Tour", "Shikara ride", "Houseboat stay", "Mughal Gardens"],
    inclusions: ["Stay in hygienic standard hotels", "Comfortable Transportation", "Daily Breakfast & Dinner", "All Tolls & Taxes", "Expert Tour Guidance", "Pickup & Drop from Airport or Railway Station", "Dal Lake Shikara ride", "Houseboat stay"],
    exclusions: ["Airfare", "Border Permissions", "Personal Expenses"],
    itinerary: [
      { day: 1, title: "Srinagar Check-in", details: "Arrival and local Srinagar tour." },
      { day: 2, title: "Keran Valley", details: "Drive to the beautiful border village of Keran." },
      { day: 3, title: "Bangus Valley", details: "Explore the hidden meadows of Bangus." },
      { day: 4, title: "Karnah-Teetwal", details: "Sightseeing in the Karnah and Teetwal regions." },
      { day: 5, title: "Return to Srinagar", details: "Mughal Gardens tour." },
      { day: 6, title: "Houseboat Experience", details: "Shikara ride and Dal Lake stay." },
      { day: 7, title: "Departure", details: "Transfer to Airport." }
    ]
  },
  {
    id: 7,
    title: "Kashmir with Vaishnodevi Package",
    image: "https://images.unsplash.com/photo-1773965040894-330722d21ffd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "7 Nights / 8 Days",
    location: "Katra - Srinagar - Pahalgam",
    price: "₹15,500",
    originalPrice: "₹25,000",
    discount: "38% OFF",
    rating: 4.9,
    destination: "Srinagar",
    category: "Family Packages",
    description: "A spiritually fulfilling and visually stunning package combining the holy pilgrimage of Vaishnodevi with the beauty of Kashmir.",
    highlights: ["Mughal Gardens", "Srinagar Sightseeing", "Sonmarg Tour", "Pahalgam Tour", "Vaishnodevi Tour", "Shikara ride", "Houseboat stay"],
    inclusions: ["Stay in hygienic standard hotels", "Comfortable Transportation", "Daily Breakfast & Dinner", "All Tolls & Taxes", "Expert Tour Guidance", "Pickup & Drop from Airport or Railway Station", "Dal Lake Shikara ride", "Houseboat stay"],
    exclusions: ["Helicopter/Pony for Yatra", "Lunches", "Personal Expenses"],
    itinerary: [
      { day: 1, title: "Arrival in Katra", details: "Transfer to Katra hotel and rest." },
      { day: 2, title: "Vaishnodevi Yatra", details: "Holy Darshan of Mata Vaishnodevi." },
      { day: 3, title: "Katra to Srinagar", details: "Scenic drive from Katra to Srinagar." },
      { day: 4, title: "Srinagar Sightseeing", details: "Visit Mughal Gardens and local sights." },
      { day: 5, title: "Sonmarg Tour", details: "Excursion to the Meadow of Gold." },
      { day: 6, title: "Pahalgam Tour", details: "Excursion to the Valley of Shepherds." },
      { day: 7, title: "Dal Lake", details: "Shikara ride and Houseboat stay." },
      { day: 8, title: "Departure", details: "Transfer to Airport/Railway Station." }
    ]
  },
  {
    id: 8,
    title: "Kashmir Royal Offbeat Package",
    image: "https://images.unsplash.com/photo-1568889753852-196c487a536e?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "7 Nights / 8 Days",
    location: "Srinagar - Bangus - Gurez",
    price: "₹10,050",
    originalPrice: "₹25,000",
    discount: "60% OFF",
    rating: 4.8,
    destination: "Srinagar",
    category: "Luxury Escapes",
    description: "Experience the royal treatment on an extensive tour through both the famous and the untouched regions of Kashmir.",
    highlights: ["Mughal Gardens", "Local sightseeing", "Bangus Valley Tour", "Karnah-Teetwal Tour", "Gurez Valley Tour", "Shikara ride", "Houseboat stay"],
    inclusions: ["Stay in hygienic standard hotels", "Comfortable Transportation", "Daily Breakfast & Dinner", "All Tolls & Taxes", "Expert Tour Guidance", "Pickup & Drop from Airport or Railway Station", "Dal Lake Shikara ride", "Houseboat stay"],
    exclusions: ["Airfare", "Personal Expenses", "Tips"],
    itinerary: [
      { day: 1, title: "Srinagar Arrival", details: "Mughal Gardens and local sightseeing." },
      { day: 2, title: "Bangus Valley", details: "Full day tour to Bangus Valley." },
      { day: 3, title: "Karnah-Teetwal", details: "Explore the Karnah and Teetwal sectors." },
      { day: 4, title: "Travel to Gurez", details: "Scenic drive into Gurez Valley." },
      { day: 5, title: "Gurez Exploration", details: "Discover the rugged beauty of Gurez." },
      { day: 6, title: "Return to Srinagar", details: "Drive back and rest in Srinagar." },
      { day: 7, title: "Houseboat Stay", details: "Shikara ride on Dal Lake." },
      { day: 8, title: "Departure", details: "Transfer for onward journey." }
    ]
  }
];