// server/routes/artisanRoutes.js

const express = require('express');
const router = express.Router();

// 🧪 Mock artisan data (we'll replace this with DB later)
const mockArtisans = [
  {
    id: 1,
    name: "Chuka Eze",
    skill: "Electrician",
    rating: 4.5,
    location: "Lekki, Lagos"
  },
  {
    id: 2,
    name: "Funmi Alabi",
    skill: "Plumber",
    rating: 4.7,
    location: "Ikeja, Lagos"
  },
  {
    id: 3,
    name: "Bola Adebayo",
    skill: "Carpenter",
    rating: 4.2,
    location: "Yaba, Lagos"
  },
  {
    id: 4,
    name: "Ifeanyi Okonkwo",
    skill: "Tiler",
    rating: 4.8,
    location: "Festac, Lagos"
  },
  {
    id: 5,
    name: "Aisha Mohammed",
    skill: "Painter",
    rating: 4.3,
    location: "Abuja, FCT"
  },
  {
    id: 6,
    name: "Daniel Uche",
    skill: "AC Technician",
    rating: 4.6,
    location: "Port Harcourt"
  },
  {
    id: 7,
    name: "Zainab Yusuf",
    skill: "Furniture Maker",
    rating: 4.9,
    location: "Surulere, Lagos"
  },
  {
    id: 8,
    name: "Emeka Umeh",
    skill: "POP Specialist",
    rating: 4.1,
    location: "Owerri, Imo"
  },
  {
    id: 9,
    name: "Blessing Enang",
    skill: "Welder",
    rating: 4.4,
    location: "Calabar"
  },
  {
    id: 10,
    name: "Mohammed Bello",
    skill: "Generator Repair",
    rating: 4.0,
    location: "Kano"
  }
];

// GET /api/artisans
router.get('/', (req, res) => {
  res.json(mockArtisans);
});

module.exports = router;
