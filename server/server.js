// server/server.js
import express, { json } from 'express';
import cors from 'cors';
import { config } from 'dotenv';

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// Load environment variables
config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json()); // Parses incoming JSON requests

// Base route
app.get('/', (req, res) => {
  res.send('🚀 Backend is running... FixItNow API ready!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
