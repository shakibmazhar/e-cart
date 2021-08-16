import React from "react";
import ecart from "../assets/e-cart.png";

const Footer = () => {
    return (
        <div className="flex flex-col bg-gray-900 w-full">
            {/* Links */}
            <div className="flex flex-col sm:flex-row text-lg text-white font-semibold items-center justify-evenly p-2">
                <h2
                    className="transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
                    href="#"
                >
                    Services
                </h2>
                <h2
                    className="transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
                    href="#"
                >
                    Careers
                </h2>
                <h2
                    className="transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
                    href="#"
                >
                    Blog
                </h2>
                <h2
                    className="transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
                    href="#"
                >
                    About
                </h2>
                <h2
                    className="transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer"
                    href="#"
                >
                    Contact
                </h2>
            </div>
            {/* Copyright Section */}
            <div className="flex flex-col justify-center items-center">
                <img className="h-14 m-2" src={ecart} alt="" />
                <h2 className="text-sm text-white font-bold p-2 mb-2">
                    © {new Date().getFullYear()} E-Cart. All rights reserved.
                </h2>
            </div>
        </div>
    );
};

export default Footer;
