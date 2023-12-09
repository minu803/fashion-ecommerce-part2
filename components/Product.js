import {useContext} from "react";
import {ProductsContext} from "./ProductsContext";

export default function Product({_id,name,price,description,picture}) {
  // Access the setSelectedProducts function from ProductsContext
  const {setSelectedProducts} = useContext(ProductsContext);

  // Function to handle adding a product to the selected products list
  function addProduct() {
    // Update the selected products list by adding the current product's _id
    setSelectedProducts(prev => [...prev,_id]);
  }
  // Return the JSX for the Product component
  return (
    <div className="w-52">
      {/* Container for the product image */}
      <div className="bg-blue-100 p-5 rounded-xl">
        {/* Image element displaying the product picture */}
        <img src={picture} alt=""/>
      </div>
      {/* Container for the product name */}
      <div className="mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      {/* Product description */}
      <p className="text-sm mt-1 leading-4 text-gray-500">{description}</p>
      {/* Container for price and add-to-cart button */}
      <div className="flex mt-1">
        {/* Display the product price in a larger, bold font */}
        <div className="text-2xl font-bold grow">${price}</div>
        {/* Button to add the product to the cart */}
        <button onClick={addProduct} className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
      </div>
    </div>
  );
}
