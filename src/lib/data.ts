
import { Product } from "./types";

export const products: Product[] = [
  // Luxury Cars
  {
    id: "lc1",
    name: "Mercedes-Benz S-Class",
    category: "car",
    type: "luxury",
    brand: "Mercedes-Benz",
    price: 10800000,
    description: "Experience ultimate luxury with the Mercedes-Benz S-Class, featuring cutting-edge technology and unparalleled comfort.",
    features: ["MBUX Infotainment System", "Burmester 4D Surround Sound", "Energizing Comfort Control", "Semi-Autonomous Driving", "Multibeam LED Headlights"],
    specifications: {
      engine: "3.0L Inline-6 Turbo",
      power: "429 HP",
      torque: "520 Nm",
      transmission: "9G-TRONIC Automatic",
      acceleration: "0-100 km/h in 4.9 seconds",
      topSpeed: "250 km/h",
      fuelConsumption: "8.2L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 5
  },
  {
    id: "lc2",
    name: "BMW 7 Series",
    category: "car",
    type: "luxury",
    brand: "BMW",
    price: 11500000,
    description: "The BMW 7 Series redefines luxury driving with innovative technology and sophisticated design.",
    features: ["BMW iDrive 8.0", "Panoramic Sky Lounge LED Roof", "Harman Kardon Surround Sound", "Remote Control Parking", "Executive Lounge Seating"],
    specifications: {
      engine: "3.0L Twin-Turbo Inline-6",
      power: "375 HP",
      torque: "540 Nm",
      transmission: "8-speed Automatic",
      acceleration: "0-100 km/h in 5.2 seconds",
      topSpeed: "250 km/h",
      fuelConsumption: "8.0L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 3
  },
  {
    id: "lc3",
    name: "Audi A8",
    category: "car",
    type: "luxury",
    brand: "Audi",
    price: 10200000,
    description: "The Audi A8 combines elegant design with advanced technology for a sophisticated driving experience.",
    features: ["MMI Touch Response", "Predictive Active Suspension", "Matrix LED Headlights", "Bang & Olufsen 3D Sound", "Rear Seat Remote Control"],
    specifications: {
      engine: "3.0L V6 TFSI",
      power: "340 HP",
      torque: "500 Nm",
      transmission: "8-speed Tiptronic",
      acceleration: "0-100 km/h in 5.6 seconds",
      topSpeed: "250 km/h",
      fuelConsumption: "8.5L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 4
  },
  {
    id: "lc4",
    name: "Bentley Continental GT",
    category: "car",
    type: "luxury",
    brand: "Bentley",
    price: 35000000,
    description: "The Bentley Continental GT offers unmatched craftsmanship and performance in a grand touring package.",
    features: ["Rotating Dashboard Display", "Diamond-in-Diamond Quilting", "Naim Audio System", "Continuous Damping Control", "Active All-Wheel Drive"],
    specifications: {
      engine: "6.0L W12 Twin-Turbo",
      power: "626 HP",
      torque: "900 Nm",
      transmission: "8-speed Dual-Clutch",
      acceleration: "0-100 km/h in 3.7 seconds",
      topSpeed: "333 km/h",
      fuelConsumption: "14.8L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 2
  },
  {
    id: "lc5",
    name: "Rolls-Royce Ghost",
    category: "car",
    type: "luxury",
    brand: "Rolls-Royce",
    price: 69500000,
    description: "The Rolls-Royce Ghost represents the pinnacle of automotive luxury and refinement.",
    features: ["Planar Suspension System", "Starlight Headliner", "Bespoke Audio", "Satellite Aided Transmission", "Illuminated Fascia"],
    specifications: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 HP",
      torque: "850 Nm",
      transmission: "ZF 8-speed",
      acceleration: "0-100 km/h in 4.8 seconds",
      topSpeed: "250 km/h",
      fuelConsumption: "15.0L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 5.0,
    stock: 1
  },
  {
    id: "lc6",
    name: "Lexus LS",
    category: "car",
    type: "luxury",
    brand: "Lexus",
    price: 18300000,
    description: "The Lexus LS blends Japanese craftsmanship with luxury and cutting-edge technology.",
    features: ["Kiriko Glass Interior Trim", "Mark Levinson Audio", "Shiatsu Massage Seats", "Climate Concierge", "Adaptive Variable Suspension"],
    specifications: {
      engine: "3.5L V6 Twin-Turbo",
      power: "416 HP",
      torque: "600 Nm",
      transmission: "10-speed Direct-Shift",
      acceleration: "0-100 km/h in 5.0 seconds",
      topSpeed: "250 km/h",
      fuelConsumption: "9.5L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 4
  },
  {
    id: "lc7",
    name: "Maserati Quattroporte",
    category: "car",
    type: "luxury",
    brand: "Maserati",
    price: 17500000,
    description: "The Maserati Quattroporte combines Italian flair with luxurious comfort and spirited performance.",
    features: ["MIA Infotainment System", "Ermenegildo Zegna Interior", "Skyhook Suspension", "Active Blind Spot Assist", "Bowers & Wilkins Sound"],
    specifications: {
      engine: "3.8L V8 Twin-Turbo",
      power: "580 HP",
      torque: "730 Nm",
      transmission: "ZF 8-speed Automatic",
      acceleration: "0-100 km/h in 4.5 seconds",
      topSpeed: "307 km/h",
      fuelConsumption: "12.0L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 3
  },
  {
    id: "lc8",
    name: "Genesis G90",
    category: "car",
    type: "luxury",
    brand: "Genesis",
    price: 8900000,
    description: "The Genesis G90 delivers sophisticated luxury and advanced technology at exceptional value.",
    features: ["Road Preview Electronic Control Suspension", "Lexicon Audio System", "VIP Rear Seating", "Mood Curator", "Ergo Motion Seats"],
    specifications: {
      engine: "3.5L V6 Twin-Turbo",
      power: "375 HP",
      torque: "530 Nm",
      transmission: "8-speed Automatic",
      acceleration: "0-100 km/h in 5.3 seconds",
      topSpeed: "240 km/h",
      fuelConsumption: "10.5L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.6,
    stock: 6
  },
  
  // Sports Cars
  {
    id: "sc1",
    name: "Ferrari 488 GTB",
    category: "car",
    type: "sport",
    brand: "Ferrari",
    price: 42000000,
    description: "The Ferrari 488 GTB is a mid-engine sports car that delivers exhilarating performance and iconic design.",
    features: ["Side Slip Control 2", "F1-Trac Traction Control", "Active Aerodynamics", "Carbon Ceramic Brakes", "Manettino Dial"],
    specifications: {
      engine: "3.9L V8 Twin-Turbo",
      power: "661 HP",
      torque: "760 Nm",
      transmission: "7-speed F1 Dual-Clutch",
      acceleration: "0-100 km/h in 3.0 seconds",
      topSpeed: "330 km/h",
      fuelConsumption: "11.4L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 2
  },
  {
    id: "sc2",
    name: "Lamborghini Huracán",
    category: "car",
    type: "sport",
    brand: "Lamborghini",
    price: 32500000,
    description: "The Lamborghini Huracán combines aggressive design with breathtaking performance.",
    features: ["Lamborghini Dynamic Steering", "All-Wheel Drive", "ANIMA Drive Mode Selector", "Carbon-Ceramic Brakes", "Lifting System"],
    specifications: {
      engine: "5.2L V10",
      power: "631 HP",
      torque: "600 Nm",
      transmission: "7-speed LDF Dual-Clutch",
      acceleration: "0-100 km/h in 2.9 seconds",
      topSpeed: "325 km/h",
      fuelConsumption: "13.7L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    discount: 5,
    available: true,
    rating: 4.8,
    stock: 3
  },
  {
    id: "sc3",
    name: "Porsche 911 Turbo S",
    category: "car",
    type: "sport",
    brand: "Porsche",
    price: 21500000,
    description: "The Porsche 911 Turbo S represents the pinnacle of sports car engineering with everyday usability.",
    features: ["Porsche Active Suspension Management", "Rear-Axle Steering", "Active Aerodynamics", "Porsche Ceramic Composite Brakes", "Launch Control"],
    specifications: {
      engine: "3.8L Flat-6 Twin-Turbo",
      power: "640 HP",
      torque: "800 Nm",
      transmission: "8-speed PDK Dual-Clutch",
      acceleration: "0-100 km/h in 2.7 seconds",
      topSpeed: "330 km/h",
      fuelConsumption: "11.1L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 4
  },
  {
    id: "sc4",
    name: "McLaren 720S",
    category: "car",
    type: "sport",
    brand: "McLaren",
    price: 29000000,
    description: "The McLaren 720S delivers supercar performance with distinctive design and cutting-edge technology.",
    features: ["Proactive Chassis Control II", "Variable Drift Control", "Active Dynamics Panel", "Carbon Fiber Monocage II", "Folding Driver Display"],
    specifications: {
      engine: "4.0L V8 Twin-Turbo",
      power: "710 HP",
      torque: "770 Nm",
      transmission: "7-speed SSG",
      acceleration: "0-100 km/h in 2.9 seconds",
      topSpeed: "341 km/h",
      fuelConsumption: "12.2L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 2
  },
  {
    id: "sc5",
    name: "Aston Martin Vantage",
    category: "car",
    type: "sport",
    brand: "Aston Martin",
    price: 30000000,
    description: "The Aston Martin Vantage is a sports car that combines British craftsmanship with thrilling performance.",
    features: ["Adaptive Damping", "Electronic Rear Differential", "Dynamic Stability Control", "Sport, Sport+ and Track Modes", "Premium Audio System"],
    specifications: {
      engine: "4.0L V8 Twin-Turbo",
      power: "503 HP",
      torque: "685 Nm",
      transmission: "8-speed ZF Automatic",
      acceleration: "0-100 km/h in 3.6 seconds",
      topSpeed: "314 km/h",
      fuelConsumption: "11.4L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 3
  },
  {
    id: "sc6",
    name: "Audi R8 V10",
    category: "car",
    type: "sport",
    brand: "Audi",
    price: 20500000,
    description: "The Audi R8 V10 combines everyday usability with supercar performance and distinctive styling.",
    features: ["Quattro All-Wheel Drive", "Magnetic Ride", "Virtual Cockpit", "Drive Select Modes", "Carbon Ceramic Brakes"],
    specifications: {
      engine: "5.2L V10",
      power: "562 HP",
      torque: "560 Nm",
      transmission: "7-speed S tronic Dual-Clutch",
      acceleration: "0-100 km/h in 3.4 seconds",
      topSpeed: "324 km/h",
      fuelConsumption: "13.1L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 4
  },
  {
    id: "sc7",
    name: "Nissan GT-R NISMO",
    category: "car",
    type: "sport",
    brand: "Nissan",
    price: 21000000,
    description: "The Nissan GT-R NISMO delivers track-focused performance with everyday practicality.",
    features: ["NISMO-tuned Suspension", "Carbon Ceramic Brakes", "ATTESA E-TS All-Wheel Drive", "Carbon Fiber Aero Package", "Recaro Seats"],
    specifications: {
      engine: "3.8L V6 Twin-Turbo",
      power: "600 HP",
      torque: "652 Nm",
      transmission: "6-speed Dual-Clutch",
      acceleration: "0-100 km/h in 2.5 seconds",
      topSpeed: "315 km/h",
      fuelConsumption: "12.5L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    discount: 3,
    available: true,
    rating: 4.7,
    stock: 5
  },
  {
    id: "sc8",
    name: "Chevrolet Corvette C8",
    category: "car",
    type: "sport",
    brand: "Chevrolet",
    price: 7300000,
    description: "The Chevrolet Corvette C8 introduces a mid-engine layout for unprecedented performance and value.",
    features: ["Magnetic Ride Control 4.0", "Front Lift System", "Performance Data Recorder", "Z51 Performance Package", "Bose 14-Speaker Audio"],
    specifications: {
      engine: "6.2L V8",
      power: "495 HP",
      torque: "637 Nm",
      transmission: "8-speed Dual-Clutch",
      acceleration: "0-100 km/h in 2.9 seconds",
      topSpeed: "312 km/h",
      fuelConsumption: "12.5L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 7
  },
  
  // Superbikes
  {
    id: "sb1",
    name: "Ducati Panigale V4",
    category: "bike",
    type: "superbike",
    brand: "Ducati",
    price: 2300000,
    description: "The Ducati Panigale V4 is a superbike that combines Italian design with MotoGP-derived technology.",
    features: ["Desmosedici Stradale Engine", "Öhlins Electronic Suspension", "Ducati Power Launch", "Ducati Traction Control EVO 2", "Cornering ABS"],
    specifications: {
      engine: "1,103cc V4",
      power: "214 HP",
      torque: "124 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.6 seconds",
      topSpeed: "299 km/h",
      fuelConsumption: "8.0L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 5
  },
  {
    id: "sb2",
    name: "BMW S 1000 RR",
    category: "bike",
    type: "superbike",
    brand: "BMW",
    price: 1950000,
    description: "The BMW S 1000 RR is a precision-engineered superbike with German engineering excellence.",
    features: ["Dynamic Traction Control", "Shift Assistant Pro", "Dynamic Damping Control", "Hill Start Control", "Four Riding Modes"],
    specifications: {
      engine: "999cc Inline-4",
      power: "205 HP",
      torque: "113 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.6 seconds",
      topSpeed: "299 km/h",
      fuelConsumption: "6.4L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 7
  },
  {
    id: "sb3",
    name: "Kawasaki Ninja H2R",
    category: "bike",
    type: "superbike",
    brand: "Kawasaki",
    price: 7500000,
    description: "The Kawasaki Ninja H2R is a track-only superbike featuring a supercharged engine and aerodynamic innovations.",
    features: ["Supercharged Engine", "Carbon Fiber Bodywork", "Aerodynamic Winglets", "Brembo Brakes", "Launch Control"],
    specifications: {
      engine: "998cc Supercharged Inline-4",
      power: "310 HP",
      torque: "165 Nm",
      transmission: "6-speed Dog-Ring",
      acceleration: "0-100 km/h in 2.5 seconds",
      topSpeed: "400 km/h",
      fuelConsumption: "N/A (Track Only)"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 5.0,
    stock: 2
  },
  {
    id: "sb4",
    name: "Aprilia RSV4 Factory",
    category: "bike",
    type: "superbike",
    brand: "Aprilia",
    price: 2200000,
    description: "The Aprilia RSV4 Factory is a race-derived superbike with advanced electronics and potent performance.",
    features: ["APRC Electronics Suite", "Öhlins Smart EC 2.0 Suspension", "Brembo Stylema Brakes", "Carbon Fiber Components", "Six Riding Modes"],
    specifications: {
      engine: "1,099cc V4",
      power: "217 HP",
      torque: "125 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.9 seconds",
      topSpeed: "305 km/h",
      fuelConsumption: "7.2L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 4
  },
  {
    id: "sb5",
    name: "Honda CBR1000RR-R Fireblade SP",
    category: "bike",
    type: "superbike",
    brand: "Honda",
    price: 2350000,
    description: "The Honda CBR1000RR-R Fireblade SP is a MotoGP-inspired superbike with precision engineering and advanced technology.",
    features: ["Öhlins Electronic Suspension", "Brembo Stylema Brakes", "Launch Control", "Wheelie Control", "Multiple Power Modes"],
    specifications: {
      engine: "1,000cc Inline-4",
      power: "214 HP",
      torque: "113 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.8 seconds",
      topSpeed: "299 km/h",
      fuelConsumption: "6.6L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    discount: 5,
    available: true,
    rating: 4.7,
    stock: 6
  },
  {
    id: "sb6",
    name: "Yamaha YZF-R1M",
    category: "bike",
    type: "superbike",
    brand: "Yamaha",
    price: 2000000,
    description: "The Yamaha YZF-R1M is a limited-edition superbike with electronic racing suspension and carbon fiber bodywork.",
    features: ["Öhlins Electronic Racing Suspension", "Carbon Fiber Bodywork", "Communication Control Unit", "Ride Control System", "Titanium Connecting Rods"],
    specifications: {
      engine: "998cc Crossplane Inline-4",
      power: "200 HP",
      torque: "113 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.9 seconds",
      topSpeed: "299 km/h",
      fuelConsumption: "7.2L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 3
  },
  {
    id: "sb7",
    name: "Suzuki GSX-R1000R",
    category: "bike",
    type: "superbike",
    brand: "Suzuki",
    price: 1900000,
    description: "The Suzuki GSX-R1000R is a balanced superbike with race-winning capability and Suzuki's renowned reliability.",
    features: ["Balance Free Suspension", "Variable Valve Timing", "Bidirectional Quickshifter", "Motion Track Brake System", "Launch Control"],
    specifications: {
      engine: "999.8cc Inline-4",
      power: "202 HP",
      torque: "117.6 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.9 seconds",
      topSpeed: "299 km/h",
      fuelConsumption: "7.1L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 8
  },
  {
    id: "sb8",
    name: "MV Agusta F4 RC",
    category: "bike",
    type: "superbike",
    brand: "MV Agusta",
    price: 3500000,
    description: "The MV Agusta F4 RC is a limited-edition superbike that combines Italian craftsmanship with racing technology.",
    features: ["Titanium Connecting Rods", "Carbon Fiber Bodywork", "Öhlins NIX 30 Fork", "Brembo GP Brakes", "SC-Project Titanium Exhaust"],
    specifications: {
      engine: "998cc Inline-4",
      power: "212 HP",
      torque: "115 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.8 seconds",
      topSpeed: "302 km/h",
      fuelConsumption: "8.0L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 2
  },
  
  // Additional products to reach 48 total

  // More Luxury Cars
  {
    id: "lc9",
    name: "Jaguar XJ",
    category: "car",
    type: "luxury",
    brand: "Jaguar",
    price: 9900000,
    description: "The Jaguar XJ combines British elegance with modern technology and dynamic performance.",
    features: ["Touch Pro Duo Infotainment", "Meridian Surround Sound", "Adaptive Dynamics", "All-Surface Progress Control", "Soft Door Close"],
    specifications: {
      engine: "5.0L V8 Supercharged",
      power: "575 HP",
      torque: "700 Nm",
      transmission: "8-speed Automatic",
      acceleration: "0-100 km/h in 4.4 seconds",
      topSpeed: "280 km/h",
      fuelConsumption: "11.1L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.6,
    stock: 4
  },
  {
    id: "lc10",
    name: "Porsche Panamera",
    category: "car",
    type: "luxury",
    brand: "Porsche",
    price: 15000000,
    description: "The Porsche Panamera delivers sports car performance with luxury sedan comfort.",
    features: ["Adaptive Air Suspension", "Porsche Communication Management", "LED Matrix Headlights", "Massage Seats", "Burmester High-End Audio"],
    specifications: {
      engine: "4.0L V8 Twin-Turbo",
      power: "542 HP",
      torque: "770 Nm",
      transmission: "8-speed PDK",
      acceleration: "0-100 km/h in 3.7 seconds",
      topSpeed: "315 km/h",
      fuelConsumption: "10.6L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 5
  },
  {
    id: "lc11",
    name: "Land Rover Range Rover Autobiography",
    category: "car",
    type: "luxury",
    brand: "Land Rover",
    price: 21000000,
    description: "The Range Rover Autobiography combines ultimate luxury with exceptional off-road capability.",
    features: ["Semi-Aniline Leather Seats", "Executive Class Rear Seats", "Terrain Response 2", "Meridian Signature Sound System", "Head-Up Display"],
    specifications: {
      engine: "5.0L V8 Supercharged",
      power: "518 HP",
      torque: "625 Nm",
      transmission: "8-speed Automatic",
      acceleration: "0-100 km/h in 5.4 seconds",
      topSpeed: "250 km/h",
      fuelConsumption: "13.1L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    discount: 4,
    available: true,
    rating: 4.8,
    stock: 3
  },
  {
    id: "lc12",
    name: "Cadillac Escalade",
    category: "car",
    type: "luxury",
    brand: "Cadillac",
    price: 12000000,
    description: "The Cadillac Escalade is a full-size luxury SUV with imposing presence and advanced technology.",
    features: ["38-inch Curved OLED Display", "AKG Studio Reference Sound", "Super Cruise", "Magnetic Ride Control", "Night Vision"],
    specifications: {
      engine: "6.2L V8",
      power: "420 HP",
      torque: "624 Nm",
      transmission: "10-speed Automatic",
      acceleration: "0-100 km/h in 6.1 seconds",
      topSpeed: "210 km/h",
      fuelConsumption: "14.5L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 6
  },
  {
    id: "lc13",
    name: "Lincoln Navigator",
    category: "car",
    type: "luxury",
    brand: "Lincoln",
    price: 11500000,
    description: "The Lincoln Navigator offers American luxury at its finest with spacious comfort and modern technology.",
    features: ["30-Way Perfect Position Seats", "Revel Ultima Audio System", "Lincoln Drive Modes", "Illuminated Lincoln Star", "Active Noise Control"],
    specifications: {
      engine: "3.5L V6 Twin-Turbo",
      power: "450 HP",
      torque: "691 Nm",
      transmission: "10-speed Automatic",
      acceleration: "0-100 km/h in 5.9 seconds",
      topSpeed: "209 km/h",
      fuelConsumption: "14.7L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.6,
    stock: 5
  },
  {
    id: "lc14",
    name: "Maybach S-Class",
    category: "car",
    type: "luxury",
    brand: "Mercedes-Maybach",
    price: 25000000,
    description: "The Maybach S-Class represents the pinnacle of Mercedes-Benz luxury with extended wheelbase and ultimate comfort.",
    features: ["Executive Rear Seats with Leg Rests", "Champagne Flutes", "4D Surround Sound", "Rear Entertainment System", "Magic Body Control"],
    specifications: {
      engine: "4.0L V8 Twin-Turbo",
      power: "496 HP",
      torque: "700 Nm",
      transmission: "9G-TRONIC",
      acceleration: "0-100 km/h in 4.8 seconds",
      topSpeed: "250 km/h",
      fuelConsumption: "10.2L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 2
  },
  {
    id: "lc15",
    name: "Bentley Bentayga",
    category: "car",
    type: "luxury",
    brand: "Bentley",
    price: 39000000,
    description: "The Bentley Bentayga is a luxury SUV that combines craftsmanship with performance and technology.",
    features: ["Bentley Dynamic Ride", "All-Terrain Specification", "Naim for Bentley Audio", "Panoramic Roof", "Bentley Rotating Display"],
    specifications: {
      engine: "4.0L V8 Twin-Turbo",
      power: "542 HP",
      torque: "770 Nm",
      transmission: "8-speed Automatic",
      acceleration: "0-100 km/h in 4.5 seconds",
      topSpeed: "290 km/h",
      fuelConsumption: "13.3L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 3
  },
  {
    id: "lc16",
    name: "Lexus LX",
    category: "car",
    type: "luxury",
    brand: "Lexus",
    price: 13500000,
    description: "The Lexus LX combines luxury with go-anywhere capability in a full-size premium SUV.",
    features: ["Adaptive Variable Suspension", "Mark Levinson Reference Sound", "Multi-Terrain Select", "Cool Box", "Rear Seat Entertainment"],
    specifications: {
      engine: "5.7L V8",
      power: "383 HP",
      torque: "546 Nm",
      transmission: "8-speed Automatic",
      acceleration: "0-100 km/h in 7.3 seconds",
      topSpeed: "220 km/h",
      fuelConsumption: "14.8L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 4
  },
  
  // More Sports Cars
  {
    id: "sc9",
    name: "Jaguar F-Type R",
    category: "car",
    type: "sport",
    brand: "Jaguar",
    price: 17500000,
    description: "The Jaguar F-Type R combines British elegance with raw performance and emotional design.",
    features: ["Active Sports Exhaust", "Configurable Dynamics", "Adaptive Dynamics", "Electronic Active Differential", "Switchable Active Exhaust"],
    specifications: {
      engine: "5.0L V8 Supercharged",
      power: "575 HP",
      torque: "700 Nm",
      transmission: "8-speed Quickshift",
      acceleration: "0-100 km/h in 3.7 seconds",
      topSpeed: "300 km/h",
      fuelConsumption: "11.2L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 3
  },
  {
    id: "sc10",
    name: "Mercedes-AMG GT R",
    category: "car",
    type: "sport",
    brand: "Mercedes-AMG",
    price: 24000000,
    description: "The Mercedes-AMG GT R is a track-focused sports car with aggressive styling and potent performance.",
    features: ["AMG RIDE CONTROL Sport Suspension", "Active Rear-Wheel Steering", "AMG Traction Control", "Ceramic Composite Brakes", "AMG Performance Exhaust"],
    specifications: {
      engine: "4.0L V8 Biturbo",
      power: "577 HP",
      torque: "700 Nm",
      transmission: "7-speed AMG SPEEDSHIFT DCT",
      acceleration: "0-100 km/h in 3.6 seconds",
      topSpeed: "318 km/h",
      fuelConsumption: "12.4L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 2
  },
  {
    id: "sc11",
    name: "Ford GT",
    category: "car",
    type: "sport",
    brand: "Ford",
    price: 35000000,
    description: "The Ford GT is a modern interpretation of the iconic Le Mans winner with cutting-edge aerodynamics and technology.",
    features: ["Carbon Fiber Monocoque", "Active Aerodynamics", "Hydraulic Suspension", "Drive Modes", "Gorilla Glass Windshield"],
    specifications: {
      engine: "3.5L V6 EcoBoost",
      power: "660 HP",
      torque: "746 Nm",
      transmission: "7-speed Dual-Clutch",
      acceleration: "0-100 km/h in 3.0 seconds",
      topSpeed: "348 km/h",
      fuelConsumption: "14.9L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 1
  },
  {
    id: "sc12",
    name: "Acura NSX",
    category: "car",
    type: "sport",
    brand: "Acura",
    price: 22000000,
    description: "The Acura NSX is a hybrid supercar that combines electric motors with a twin-turbo V6 for advanced performance.",
    features: ["Sport Hybrid SH-AWD", "Integrated Dynamics System", "Carbon Ceramic Brakes", "EV Mode", "Launch Control"],
    specifications: {
      engine: "3.5L V6 Twin-Turbo Hybrid",
      power: "573 HP",
      torque: "645 Nm",
      transmission: "9-speed Dual-Clutch",
      acceleration: "0-100 km/h in 2.9 seconds",
      topSpeed: "307 km/h",
      fuelConsumption: "10.6L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    discount: 7,
    available: true,
    rating: 4.7,
    stock: 2
  },
  {
    id: "sc13",
    name: "Lexus LC 500",
    category: "car",
    type: "sport",
    brand: "Lexus",
    price: 9800000,
    description: "The Lexus LC 500 is a grand touring sports car with stunning design and naturally aspirated V8 power.",
    features: ["Adaptive Variable Suspension", "Mark Levinson Audio", "Active Sport Exhaust", "Carbon Fiber Roof", "Color Head-Up Display"],
    specifications: {
      engine: "5.0L V8",
      power: "471 HP",
      torque: "540 Nm",
      transmission: "10-speed Direct-Shift",
      acceleration: "0-100 km/h in 4.4 seconds",
      topSpeed: "270 km/h",
      fuelConsumption: "11.6L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 4
  },
  {
    id: "sc14",
    name: "Maserati MC20",
    category: "car",
    type: "sport",
    brand: "Maserati",
    price: 38000000,
    description: "The Maserati MC20 is a mid-engine supercar that marks Maserati's return to building exotic sports cars.",
    features: ["Carbon Fiber Monocoque", "Butterfly Doors", "Drive Modes", "Double Wishbone Suspension", "Digital Rear-View Mirror"],
    specifications: {
      engine: "3.0L V6 Twin-Turbo",
      power: "621 HP",
      torque: "730 Nm",
      transmission: "8-speed Dual-Clutch",
      acceleration: "0-100 km/h in 2.9 seconds",
      topSpeed: "325 km/h",
      fuelConsumption: "11.6L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 2
  },
  {
    id: "sc15",
    name: "BMW M4 Competition",
    category: "car",
    type: "sport",
    brand: "BMW",
    price: 11500000,
    description: "The BMW M4 Competition offers track-capable performance in a practical coupe package.",
    features: ["M xDrive", "Adaptive M Suspension", "M Drive Professional", "Carbon Bucket Seats", "M Carbon Ceramic Brakes"],
    specifications: {
      engine: "3.0L Inline-6 Twin-Turbo",
      power: "503 HP",
      torque: "650 Nm",
      transmission: "8-speed M Steptronic",
      acceleration: "0-100 km/h in 3.9 seconds",
      topSpeed: "290 km/h",
      fuelConsumption: "10.2L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 6
  },
  {
    id: "sc16",
    name: "Mercedes-AMG C63 S",
    category: "car",
    type: "sport",
    brand: "Mercedes-AMG",
    price: 13500000,
    description: "The Mercedes-AMG C63 S combines luxury with high-performance in a practical sedan package.",
    features: ["AMG RIDE CONTROL", "AMG Performance Seats", "Electronic Limited-Slip Differential", "AMG TRACK PACE", "Burmester Surround Sound"],
    specifications: {
      engine: "4.0L V8 Biturbo",
      power: "510 HP",
      torque: "700 Nm",
      transmission: "9-speed AMG SPEEDSHIFT MCT",
      acceleration: "0-100 km/h in 4.0 seconds",
      topSpeed: "290 km/h",
      fuelConsumption: "10.8L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 5
  },
  
  // More Superbikes
  {
    id: "sb9",
    name: "KTM 1290 Super Duke R",
    category: "bike",
    type: "superbike",
    brand: "KTM",
    price: 1950000,
    description: "The KTM 1290 Super Duke R is a naked sports bike with aggressive styling and stunning performance.",
    features: ["Lean-Angle Sensitive Electronics", "Supermoto Mode", "WP APEX Suspension", "Brembo Stylema Brakes", "TFT Dashboard"],
    specifications: {
      engine: "1,301cc V-Twin",
      power: "180 HP",
      torque: "140 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.8 seconds",
      topSpeed: "290 km/h",
      fuelConsumption: "7.2L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 4
  },
  {
    id: "sb10",
    name: "Triumph Daytona Moto2 765",
    category: "bike",
    type: "superbike",
    brand: "Triumph",
    price: 1500000,
    description: "The Triumph Daytona Moto2 765 is a limited-edition superbike with Moto2 racing technology.",
    features: ["Öhlins NIX30 Fork", "Öhlins TTX36 Rear Shock", "Brembo Stylema Brakes", "Titanium Arrow Exhaust", "Carbon Fiber Bodywork"],
    specifications: {
      engine: "765cc Inline-3",
      power: "130 HP",
      torque: "80 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 3.2 seconds",
      topSpeed: "275 km/h",
      fuelConsumption: "5.8L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    discount: 5,
    available: true,
    rating: 4.7,
    stock: 3
  },
  {
    id: "sb11",
    name: "Ducati Streetfighter V4",
    category: "bike",
    type: "superbike",
    brand: "Ducati",
    price: 2100000,
    description: "The Ducati Streetfighter V4 is a naked superbike with aggressive styling and MotoGP-derived technology.",
    features: ["Biplane Wings", "Öhlins Suspension", "Ducati Power Launch", "Ducati Wheelie Control", "TFT Display"],
    specifications: {
      engine: "1,103cc V4",
      power: "208 HP",
      torque: "123 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.8 seconds",
      topSpeed: "280 km/h",
      fuelConsumption: "8.2L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 5
  },
  {
    id: "sb12",
    name: "Kawasaki Z H2",
    category: "bike",
    type: "superbike",
    brand: "Kawasaki",
    price: 1850000,
    description: "The Kawasaki Z H2 is a supercharged naked bike with aggressive styling and incredible performance.",
    features: ["Supercharged Engine", "TFT Color Instrumentation", "Multiple Power Modes", "Showa Suspension", "Electronic Cruise Control"],
    specifications: {
      engine: "998cc Supercharged Inline-4",
      power: "200 HP",
      torque: "137 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.8 seconds",
      topSpeed: "265 km/h",
      fuelConsumption: "7.9L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 6
  },
  {
    id: "sb13",
    name: "BMW M 1000 RR",
    category: "bike",
    type: "superbike",
    brand: "BMW",
    price: 4200000,
    description: "The BMW M 1000 RR is BMW's first M motorcycle, developed for track performance and homologation racing.",
    features: ["Carbon Fiber Winglets", "M Carbon Wheels", "Titanium Exhaust", "ShiftCam Technology", "M Competition Package"],
    specifications: {
      engine: "999cc Inline-4",
      power: "212 HP",
      torque: "113 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 3.1 seconds",
      topSpeed: "306 km/h",
      fuelConsumption: "6.8L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 2
  },
  {
    id: "sb14",
    name: "Aprilia Tuono V4 Factory",
    category: "bike",
    type: "superbike",
    brand: "Aprilia",
    price: 1850000,
    description: "The Aprilia Tuono V4 Factory is a naked superbike with racing DNA and advanced electronics.",
    features: ["Öhlins Smart EC 2.0 Suspension", "APRC Electronics Suite", "Brembo Stylema Brakes", "TFT Display", "Cornering ABS"],
    specifications: {
      engine: "1,077cc V4",
      power: "175 HP",
      torque: "121 Nm",
      transmission: "6-speed with Quickshifter",
      acceleration: "0-100 km/h in 2.9 seconds",
      topSpeed: "269 km/h",
      fuelConsumption: "7.8L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.7,
    stock: 4
  },
  {
    id: "sb15",
    name: "Norton V4 RR",
    category: "bike",
    type: "superbike",
    brand: "Norton",
    price: 2800000,
    description: "The Norton V4 RR is a hand-built British superbike with exotic materials and limited production.",
    features: ["Carbon Fiber Frame", "Öhlins NIX30 Forks", "Brembo Monobloc Brakes", "Titanium Exhaust System", "Carbon Bodywork"],
    specifications: {
      engine: "1,200cc V4",
      power: "200 HP",
      torque: "130 Nm",
      transmission: "6-speed Cassette-type",
      acceleration: "0-100 km/h in 3.0 seconds",
      topSpeed: "300 km/h",
      fuelConsumption: "8.5L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.8,
    stock: 1
  },
  {
    id: "sb16",
    name: "Bimota Tesi H2",
    category: "bike",
    type: "superbike",
    brand: "Bimota",
    price: 7000000,
    description: "The Bimota Tesi H2 combines innovative hub-center steering with Kawasaki's supercharged engine.",
    features: ["Hub-Center Steering", "Supercharged Engine", "Carbon Fiber Bodywork", "Öhlins Suspension", "Brembo Brakes"],
    specifications: {
      engine: "998cc Supercharged Inline-4",
      power: "231 HP",
      torque: "141 Nm",
      transmission: "6-speed",
      acceleration: "0-100 km/h in 2.7 seconds",
      topSpeed: "299 km/h",
      fuelConsumption: "8.0L/100km"
    },
    images: ["/placeholder.svg", "/placeholder.svg"],
    available: true,
    rating: 4.9,
    stock: 1
  }
];

// Function to format price in Indian Rupees
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

// Function to calculate discounted price
export const calculateDiscountedPrice = (price: number, discount?: number): number => {
  if (!discount) return price;
  return price - (price * (discount / 100));
};

// Get featured products (mix of types with some discount)
export const getFeaturedProducts = (): Product[] => {
  const featuredProducts = products.filter(product => product.discount || product.rating >= 4.8);
  return featuredProducts.slice(0, 6);
};

// Get products by category and type
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByType = (type: string): Product[] => {
  return products.filter(product => product.type === type);
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Search products
export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.brand.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.type.toLowerCase().includes(lowerQuery)
  );
};

// Filter products
export const filterProducts = (
  categoryFilter?: string,
  typeFilter?: string,
  brandFilter?: string,
  minPrice?: number,
  maxPrice?: number,
  inStock?: boolean
): Product[] => {
  return products.filter(product => {
    if (categoryFilter && product.category !== categoryFilter) return false;
    if (typeFilter && product.type !== typeFilter) return false;
    if (brandFilter && product.brand !== brandFilter) return false;
    if (minPrice && product.price < minPrice) return false;
    if (maxPrice && product.price > maxPrice) return false;
    if (inStock && product.stock <= 0) return false;
    return true;
  });
};

// Get unique brands
export const getBrands = (): string[] => {
  const brands = products.map(product => product.brand);
  return Array.from(new Set(brands)).sort();
};

// Get price range
export const getPriceRange = (): { min: number; max: number } => {
  const prices = products.map(product => product.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};
