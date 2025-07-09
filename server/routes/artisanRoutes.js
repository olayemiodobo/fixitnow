const express = require('express');
const router = express.Router();

const skills = [
  "AC Technician",
  "Generator Repair",
  "Plumber",
  "Fridge Repair",
  "General Electrician",
  "Carpenter"
];

const locations = [
  "Lekki",
  "Ikeja",
  "Yaba",
  "Surulere",
  "Ajah",
  "Festac",
  "Agege"
];

const names = [
  "Chuka Eze", "Ifeoma Nwachukwu", "Tunde Bakare", "Bola Alabi", "Aisha Bello",
  "Emeka Okafor", "Funmi Adeyemi", "Zainab Yusuf", "Ibrahim Abdullahi", "Blessing Ibe",
  "Peter Onu", "Rita Uche", "John Ekanem", "Musa Lawal", "Deborah Ajayi",
  "Kenneth Obasi", "Hadiza Aliyu", "Ngozi Akpan", "Femi Ogunleye", "Maryam Danjuma"
];

// 👨🏾‍🔧 AI-generated Nigerian face URLs
const faces = [
  "https://images.generated.photos/uy1cYPWnKYgePtRVm2HbozrcKz1r8Ev8l6jsvXoEyKo/rs:fit:512:512/czM6Ly9pY29uczQxL29iamVjdHMvZDUzNjk4LmpwZw.jpg",
  "https://images.generated.photos/v7NmVvfZ6twZDWnVdAGa2dDYZsE7Lo_TPlIhX8LSklw/rs:fit:512:512/czM6Ly9pY29uczQxL29iamVjdHMvZDViYTI3LmpwZw.jpg",
  "https://images.generated.photos/tFVv3V8SYbhcETIymHGsiv4Z6hV3U2lB7RPweKn1sMI/rs:fit:512:512/czM6Ly9pY29uczQxL29iamVjdHMvZDk3NzM5LmpwZw.jpg",
  "https://images.generated.photos/LfdZCThfA-FJLV82iqAVPckqEL_lnh6RieIqDOZqRfY/rs:fit:512:512/czM6Ly9pY29uczQxL29iamVjdHMvZDk4NzE3LmpwZw.jpg",
  "https://images.generated.photos/2lI6pqXT3VfFu_KWCLrcxz4DyIU9-ZQNzPy4bFbrpFc/rs:fit:512:512/czM6Ly9pY29uczQxL29iamVjdHMvZDQzMzcyLmpwZw.jpg",
  "https://images.generated.photos/qHF0XMzKt__HeLncB4doct9Y7Cm65FgbFRC0ZrU8v9A/rs:fit:512:512/czM6Ly9pY29uczQxL29iamVjdHMvZDM4NTg4LmpwZw.jpg",
  "https://images.generated.photos/V_Le1kzOWOAhqyoPfiXwbQ_cGnHnpPRe9HgmJvNmoXg/rs:fit:512:512/czM6Ly9pY29uczQxL29iamVjdHMvZDI1MjAxLmpwZw.jpg",
  "https://images.generated.photos/OuH8T4bqW74UqBlKOU_UdoCSu0-KVUQIRWnK82n7wpg/rs:fit:512:512/czM6Ly9pY29uczQxL29iamVjdHMvZDg0NDE0LmpwZw.jpg"
];

let id = 1;
const mockArtisans = [];

locations.forEach(location => {
  skills.forEach(skill => {
    const count = Math.floor(Math.random() * 3) + 3; // 3–5 per group
    for (let i = 0; i < count; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const face = faces[Math.floor(Math.random() * faces.length)];
      mockArtisans.push({
        id: id++,
        name,
        skill,
        location,
        rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
        priceRange: `₦${Math.floor(Math.random() * 3000 + 5000)}`,
        picture: face,
        contactLocked: true,
        contact: {
          phone: `080${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`,
          email: `${name.toLowerCase().replace(/\s/g, '.')}@fixitnow.ng`
        }
      });
    }
  });
});

router.get('/', (req, res) => {
  res.json(mockArtisans);
});

module.exports = router;
