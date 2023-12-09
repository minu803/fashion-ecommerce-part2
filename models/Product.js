import {model, models, Schema} from "mongoose";

// Define the schema for the 'Product' model
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  skus: [{
    size: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  category: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  }
});
// Create or retrieve the 'Product' model based on the defined schema
// 'models?' is a conditional check to handle the case where the model already exists,
// which can happen in environments like serverless functions where the module might be cached
const Product = models?.Product || model('Product', ProductSchema);

// Export the 'Product' model for use in other parts of the application
export default Product;