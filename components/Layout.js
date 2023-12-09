import Footer from "./Footer";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "./ProductsContext";

// Import React and context utilities
export default function Layout({children}) {
  // Access the setSelectedProducts function from ProductsContext
  const {setSelectedProducts} = useContext(ProductsContext);
  // State to track the success status of an action
  const [success,setSuccess] = useState(false);
  useEffect(() => {
    // Check if the current URL includes 'success'
    if (window.location.href.includes('success')) {
      // Clear the selected products list
      setSelectedProducts([]);
       // Update the success state to true
      setSuccess(true);
    }
  }, []);
  // Return the JSX for the layout
  return (
    <div>
      <div className="p-5">
        {success && (
          <div className="mb-5 bg-green-400 text-white text-lg p-5 rounded-xl">
            Thanks for your order!
          </div>
        )}
        {children}
      </div>
      <Footer />
    </div>
  );
}