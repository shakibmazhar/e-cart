import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useAppContext } from "../contextAPI/context";

const Subtotal = () => {
    const { userCart, totalPrice, dispatch } = useAppContext();

    // Total price calculator
    useEffect(() => {
        let total = 0;
        if (userCart.length > 0) {
            userCart?.map((item) => {
                total += item.price * item.quantity;
                return null;
            });
        }
        dispatch({
            type: "SET_TOTAL",
            payload: total,
        });
    }, [userCart]);

    return (
        <div className="flex flex-col bg-gray-900 rounded-md p-2">
            <h4 className="text-lg font-bold text-white p-2 text-center">
                Subtotal
            </h4>
            <p className="text-base font-semibold text-white p-2 border-b-2 border-blue-500">
                <span className="text-blue-500 font-bold">
                    {userCart.length}
                </span>{" "}
                items in cart{" "}
            </p>
            {/* Price Breakdown */}
            {userCart.length > 0 && (
                <div>
                    {userCart.map((item) => {
                        return (
                            <div
                                key={item.orderId}
                                className="flex items-center justify-between border-b border-opacity-50"
                            >
                                {" "}
                                <h4 className="text-white p-2 w-3/5">
                                    {item.name}
                                </h4>
                                <div className="flex justify-between w-2/5">
                                    <p className="text-blue-500 font-bold p-2">
                                        x{item.quantity}
                                    </p>
                                    <CurrencyFormat
                                        className="text-white font-bold p-2"
                                        value={
                                            (item.price * item.quantity) / 100
                                        }
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            {/* Total amount */}
            <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-white p-2">Total</h4>
                <strong className="text-white p-2">
                    <CurrencyFormat
                        value={totalPrice / 100}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
                </strong>
            </div>
        </div>
    );
};

export default Subtotal;
