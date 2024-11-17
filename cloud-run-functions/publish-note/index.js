
const functions = require('@google-cloud/functions-framework');
const express = require('express');
const cors = require('cors');

// Create an express instance to use middleware
const app = express();

// Add middleware
app.use(cors());
app.use(express.json());

// Main function handler
const handler = async (req, res) => {
  try {
    // Enable CORS headers
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    console.log('Request headers:', req.headers);
    console.log('Request body:', req.body);
    console.log('Request method:', req.method);
    console.log('Request query:', req.query);

    res.status(200).json({
      receivedHeaders: req.headers,
      receivedBody: req.body,
      receivedMethod: req.method,
      receivedQuery: req.query
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Apply middleware and register the function
functions.http('publishNote', app.use(handler));
