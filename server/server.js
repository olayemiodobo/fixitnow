// server/server.js

// Load all required modules
const express = require('express');      // Handles routes and requests
const cors = require('cors');            // Allows frontend connection
const dotenv = require('dotenv');        // Loads .env secrets

// Configure environment variables
dotenv.config();

// Initialize express app
const app = express();

// Use middlewares
app.use(cors());                         // Enables CORS
app.use(express.json());                 // Parses incoming JSON data

// Define a test route
app.get('/', (req, res) => {
  res.send('✅ FixItNow Backend is running...');
});

// Define the server port (from .env or fallback to 5000)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
