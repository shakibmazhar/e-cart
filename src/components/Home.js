import React from "react";
import { useAppContext } from "../contextAPI/context";
import Footer from "./Footer";
import Product from "./Product";

const Home = () => {
    const { products, searchTerm } = useAppContext();

    return (
        <div className="flex flex-col items-center">
            {/* Sidebar */}
            {/* <div></div> */}
            {/* Product Container */}
            <div className="m-4 max-w-7xl self-center grid grid-cols-1 gap-4 sm:grid-cols-2">
                {products.map((product) => {
                    return (
                        <Product
                            key={product?.id}
                            id={product?.id}
                            name={product?.name}
                            image={product?.image}
                            price={product?.price}
                            rating={product?.rating}
                        />
                    );
                })}
            </div>
            {/* Footer */}
            <div className={searchTerm ? "hidden" : "mt-4 w-full"}>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
