import {initMongoose} from "../../lib/mongoose";
import Order from "../../models/Order";
import {buffer} from 'micro';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// localhost:3000/api/webhook
// Define an asynchronous handler function for the webhook
export default async function handler(req, res) {
  // Initialize the database connection
  await initMongoose();
  // Define the signing secret for Stripe webhooks (obtain from your Stripe dashboard)
  const signingSecret = 'whsec_634d3142fd2755bd61adaef74ce0504bd2044848c8aac301ffdb56339a0ca78d';
  // Retrieve the raw body of the request as a buffer
  const payload = await buffer(req);
  // Get the Stripe signature from the request headers
  const signature = req.headers['stripe-signature'];
  // Construct the event using Stripe's SDK
  const event = stripe.webhooks.constructEvent(payload, signature, signingSecret);

  // Check if the event type is 'checkout.session.completed'
  if (event?.type === 'checkout.session.completed') {
    const metadata = event.data?.object?.metadata;
    const paymentStatus = event.data?.object?.payment_status;
    if (metadata?.orderId && paymentStatus === 'paid') {
      await Order.findByIdAndUpdate(metadata.orderId, {paid:1});
    }
  }

  res.json('ok');
}

// Configuration to disable the default body parser for API routes
export const config = {
  api: {
    bodyParser: false,
  }
};