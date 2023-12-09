import {initMongoose} from "../../lib/mongoose";
import Product from "../../models/Product";
import Order from "../../models/Order";
// Get the Stripe secret key from environment variables
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req,res) {
  // Initialize the database connection
  await initMongoose();
  // Check if the request method is POST, otherwise return an error
  if (req.method !== 'POST') {
    res.json('should a post but its not!');
    return;
  }
  // Destructure necessary fields from the request body
  const {email,name,address,city} = req.body;
  // Split the product IDs from the request body and create a unique set to avoid duplicates
  const productsIds = req.body.products.split(',');
  const uniqIds = [...new Set(productsIds)];
  
  // Retrieve the products from the database based on the provided IDs
  const products = await Product.find({_id:{$in:uniqIds}}).exec();

  // Prepare line items for the order
  let line_items = [];
  for (let productId of uniqIds) {
    // Calculate the quantity of each product
    const quantity = productsIds.filter(id => id === productId).length;
    // Find the product details
    const product = products.find(p => p._id.toString() === productId);
    // Push the product details into the line items array
    line_items.push({
      quantity,
      price_data: {
        currency: 'USD',
        product_data: {name:product.name},
        unit_amount: Math.round(product.price * 100),
      },
    });
  }

  // Create a new order in the database
  const order = await Order.create({
    products:line_items,
    name,
    email,
    address,
    city,
    paid:0,
  });

  // Create a new Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: 'payment',
    customer_email: email,
    success_url: `${req.headers.origin}/?success=true`,
    cancel_url: `${req.headers.origin}/?canceled=true`,
    metadata: {orderId:order._id.toString()},
  });

  // Redirect the client to the Stripe checkout page
  res.redirect(303, session.url);
}