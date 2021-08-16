import React from "react";
import { useAppContext } from "../contextAPI/context";
import CartItem from "./CartItem";
import Subtotal from "./Subtotal";

const Cart = () => {
    // Getting userCart from context
    const { userCart } = useAppContext();

    return (
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between w-screen">
            {/* Cart List */}
            <div className="m-2 flex flex-col w-11/12 sm:w-3/5 items-center">
                <h2 className="text-xl font-bold w-full text-center border-b-2 p-2">
                    Your Cart
                </h2>

                <div className="w-full">
                    {userCart.length > 0 ? (
                        userCart.map((item) => {
                            return (
                                <CartItem
                                    key={item.orderId}
                                    productId={item.productId}
                                    orderId={item.orderId}
                                    name={item.name}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    quantity={item.quantity}
                                />
                            );
                        })
                    ) : (
                        <h4 className="text-lg font-semibold w-full text-center p-2">
                            Your cart is empty
                        </h4>
                    )}
                </div>
            </div>
            {/* Subtotal Section */}
            <div className="w-11/12 sm:w-2/5 mt-14 ml-2 mr-2 mb-14">
                <Subtotal />
            </div>
        </div>
    );
};

export default Cart;
