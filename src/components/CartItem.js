import React from "react";
import CurrencyFormat from "react-currency-format";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useAppContext } from "../contextAPI/context";
import { Link } from "react-router-dom";

const CartItem = ({
    productId,
    orderId,
    name,
    image,
    price,
    rating,
    quantity,
}) => {
    // Getting functions from context
    const { increaseQuantity, decreaseQuantity, removeItem } = useAppContext();

    return (
        <div className="flex items-center bg-gray-200 mt-2 mb-2 rounded-md w-full">
            <img className="w-1/5 p-2 object-contain" src={image} alt="" />
            <div className="flex flex-col p-2 m-2 w-3/5">
                <Link to={`/products/${productId}`}>
                    <h4 className="text-lg font-semibold">{name}</h4>
                    <p>
                        <strong>
                            <CurrencyFormat
                                value={price / 100}
                                thousandSeparator={true}
                                prefix={"$"}
                                displayType={"text"}
                            />
                        </strong>
                    </p>
                    <p>
                        {Array(rating)
                            .fill()
                            .map((item) => {
                                return "⭐";
                            })}
                    </p>
                </Link>
                <div className="flex items-center p-2 mt-2 mb-2">
                    <ChevronLeftIcon
                        onClick={() => decreaseQuantity(orderId)}
                        className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer ml-2 mr-2"
                    />
                    <p className="bg-white pl-2 pr-2 rounded-md">{quantity}</p>
                    <ChevronRightIcon
                        onClick={() => increaseQuantity(orderId)}
                        className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer ml-2 mr-2"
                    />
                </div>
            </div>
            <button
                onClick={() => removeItem(orderId)}
                className="w-1/5 p-2 m-2 bg-red-400 text-white font-semibold rounded-md transition duration-300 ease-in-out hover:shadow-md"
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;
