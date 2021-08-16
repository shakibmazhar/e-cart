import React, { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";

// Create app context
const appContext = createContext();

// Initial state
let initialState = {
    products: [],
    searchTerm: "",
    userCart: [],
    totalPrice: 0,
};

// App provider function
const AppProvider = ({ children }) => {
    //Use reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    // Add an item to cart
    const addToCart = (id, name, image, price, rating) => {
        const newCartItem = {
            orderId: Date.now(),
            productId: id,
            name: name,
            image: image,
            price: price,
            rating: rating,
            quantity: 1,
        };
        dispatch({
            type: "ADDTOCART",
            payload: newCartItem,
        });
    };

    // Increase quantity
    const increaseQuantity = (orderId) => {
        dispatch({
            type: "INCREASE_QTY",
            payload: orderId,
        });
    };

    // Decrease qunatity
    const decreaseQuantity = (orderId) => {
        dispatch({
            type: "DECREASE_QTY",
            payload: orderId,
        });
    };

    // Remove Item
    const removeItem = (orderId) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: orderId,
        });
    };

    return (
        <appContext.Provider
            value={{
                ...state,
                dispatch,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
            }}
        >
            {children}
        </appContext.Provider>
    );
};

// Custom hook for using app context
const useAppContext = () => {
    return useContext(appContext);
};

export { AppProvider, useAppContext };
