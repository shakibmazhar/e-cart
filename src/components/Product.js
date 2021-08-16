import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { useAppContext } from "../contextAPI/context";

const Product = ({ id, name, image, price, rating }) => {
    const { searchTerm, addToCart } = useAppContext();

    return (
        <div
            className={
                name.toLowerCase().includes(searchTerm) ? "product" : "hidden"
            }
        >
            <Link className="flex flex-col" to={`/products/${id}`}>
                {/* Product Image */}
                <img
                    className="w-full h-60 object-cover rounded-md"
                    src={image}
                    alt=""
                />
                {/* Product Info */}
                <div className="p-2 flex flex-col justify-evenly">
                    {/* Title */}
                    <h4 className="font-semibold mb-2">{name}</h4>
                    {/* Price */}
                    <p className="mb-2">
                        <strong>
                            <CurrencyFormat
                                value={price / 100}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                        </strong>
                    </p>
                    {/* Rating */}
                    <p>
                        {Array(rating)
                            .fill()
                            .map((item) => {
                                return "⭐";
                            })}
                    </p>
                </div>
            </Link>
            <button
                onClick={() => addToCart(id, name, image, price, rating)}
                className="bg-blue-500 p-2 m-2 rounded-md font-semibold transition duration-300 ease-in-out transform hover:scale-110"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Product;
