import {model, models, Schema} from "mongoose";

// Define the schema for the 'Order' model
const OrderSchema = new Schema({
  products: Object,
  name: String,
  email: String,
  address: String,
  city: String,
  paid: {type:Number,defaultValue:0},
}, {timestamps: true});

// Create or retrieve the 'Order' model based on the defined schema
// 'models?' is a conditional check to handle the case where the model already exists,
// which can happen in environments like serverless functions where the module might be cached
const Order = models?.Order || model('Order', OrderSchema);

// Export the 'Order' model for use in other parts of the application
export default Order;