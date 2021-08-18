import React from "react";
import ecart from "../assets/e-cart.png";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Avatar } from "@material-ui/core";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { useAppContext } from "../contextAPI/context";
import { Link } from "react-router-dom";

const Header = () => {
    const { searchTerm, dispatch, userCart } = useAppContext();
    return (
        <div className="bg-gray-800 flex items-center justify-between">
            {/* Header left */}
            <div className="flex items-center header-left">
                <Link to="/">
                    <img className="h-12 m-2" src={ecart} alt="" />
                </Link>
                <h2 className="text-white text-xl p-2 font-bold">E-Cart</h2>
            </div>

            {/* Header Mid */}
            <div className="flex items-center header-mid">
                <div className="p-2 bg-white w-10/12 rounded-full items-center flex justify-evenly">
                    <input
                        value={searchTerm}
                        onChange={(e) => {
                            const searchStr = e.target.value.trim();
                            if (searchStr) {
                                dispatch({
                                    type: "SET_SEARCH-TERM",
                                    payload: searchStr.toLowerCase(),
                                });
                            } else {
                                dispatch({
                                    type: "SET_SEARCH-TERM",
                                    payload: "",
                                });
                            }
                        }}
                        className="border-none outline-none w-4/5"
                        type="text"
                        placeholder="Search items"
                    />
                    <SearchRoundedIcon className="text-gray-900 cursor-pointer" />
                </div>
            </div>

            {/* Header Right */}
            <div className="flex items-center justify-evenly header-right">
                {/* User info */}
                <div className="flex items-center justify-evenly ml-2 mr-2">
                    <Avatar />
                    <div className="flex flex-col p-2">
                        <h4 className="text-sm text-white font-semibold">
                            Guest
                        </h4>
                        <h4 className="text-sm text-white font-semibold">
                            Log in
                        </h4>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex flex-col items-center p-2 justify-evenly mr-2">
                    <Link to="/user/cart">
                        <ShoppingCartRoundedIcon className="text-white cursor-pointer" />
                    </Link>
                    <h4 className="text-sm text-white font-semibold">
                        Cart{" "}
                        <span>
                            {userCart.length > 0
                                ? `(${userCart.length}) items`
                                : ""}
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Header;
