import {initMongoose} from "../../lib/mongoose";
import Product from "../../models/Product";

// Function to retrieve all products from the database
export async function findAllProducts() {
  // Uses Mongoose's 'find' method to retrieve all product documents
  return Product.find().exec();
}

// Define an asynchronous handler function for API requests
export default async function handle(req, res) {
  // Initialize the database connection
  await initMongoose();
  // Destructure 'ids' from the query parameters
  const {ids} = req.query;
  if (ids) {
    const idsArray = ids.split(',');
    // Find and return products matching the specified IDs
    res.json(
      await Product.find({
        '_id':{$in:idsArray}
      }).exec()
    );
  } else {
    // If no IDs are provided, return all products
    res.json( await findAllProducts() );
  }
}


