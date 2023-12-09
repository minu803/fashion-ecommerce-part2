import {createContext} from "react";
import useLocalStorageState from 'use-local-storage-state';

export const ProductsContext = createContext({});

export function ProductsContextProvider({children}) {
  // State hook using custom hook 'useLocalStorageState' to persist selected products in local storage
  const [selectedProducts,setSelectedProducts] = useLocalStorageState('cart', {defaultValue:[]});
  
  // Return the Provider component of ProductsContext, passing selectedProducts and setSelectedProducts in the value prop
  return (
    <ProductsContext.Provider value={{selectedProducts,setSelectedProducts}}>{children}</ProductsContext.Provider>
  );
}