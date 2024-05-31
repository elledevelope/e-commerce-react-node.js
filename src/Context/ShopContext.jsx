import React, { createContext } from "react";
import all_products from "../Components/Assets/all_product"

// Creating a context with a default value of null
export const ShopContext = createContext(null);

// Defining a context provider component
const ShopContextProvider = (props) => {
    // Setting the context value to include all_products data
    const contextValue = { all_products };

    // Returning the provider component with the value set to contextValue
    // This makes the contextValue available to all child components
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;