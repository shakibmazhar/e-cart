import React from "react";
import CurrencyFormat from "react-currency-format";
import { useParams } from "react-router-dom";
import { useAppContext } from "../contextAPI/context";
import Footer from "./Footer";

const ProductDesc = () => {
    const { id } = useParams();
    const { products, addToCart } = useAppContext();
    const product = products?.find((item) => item.id.toString() === id);

    return (
        <div className="flex flex-col min-h-screen items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center max-w-5xl">
                <img
                    className="w-1/2 object-contain p-2 m-2"
                    src={product?.image}
                    alt=""
                />
                {/* Product Info */}
                <div className="flex flex-col w-full m-2 sm:w-1/2">
                    <h1 className="text-xl p-2 font-bold w-10/12">
                        {product?.name}
                    </h1>
                    <strong className="text-base p-2">
                        <CurrencyFormat
                            value={product?.price / 100}
                            displayType={"text"}
                            prefix={"$"}
                            thousandSeparator={true}
                        />
                    </strong>
                    <p className="p-2">
                        {Array(product?.rating)
                            .fill()
                            .map((rate) => {
                                return "⭐";
                            })}
                    </p>
                    <button
                        onClick={() =>
                            addToCart(
                                product.id,
                                product.name,
                                product.image,
                                product.price,
                                product.rating
                            )
                        }
                        className="bg-blue-500 font-semibold p-2 m-2 rounded-md transition duration-300 ease-in-out hover:shadow-xl"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
            {/* Product Description */}
            <div className="flex flex-col items-center mt-4 mb-4">
                <h2 className="text-lg font-bold border-b-2 border-blue-500 bor">
                    Description
                </h2>
                <ul className="p-2 m-2 w-full sm:w-8/12">
                    {product?.description.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="font-semibold p-2 sm:text-justify border-b-2"
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>

            <Footer />
        </div>
    );
};

export default ProductDesc;
