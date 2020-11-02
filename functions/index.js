const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HiXz0EVMGjjym7pGQEdgf8cdXcyrKuxccI9XqmdpkT63culqpWypcXsls9ZCMzc2jAPv13JaYAh2DLv2zlFS693000pPZar34'
);

// API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Received! Amount: ', total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// (http://localhost:5001/clone-186ed/us-central1/api)
