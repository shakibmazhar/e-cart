import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/errorImg.svg";

const Error = () => {
    return (
        <div className="flex flex-col justify-evenly items-center">
            <h1 className="text-4xl font-bold p-2 mt-10">Oops!</h1>
            <img className="p-2 w-3/5 mt-10 mb-10" src={errorImg} alt="" />
            <h4 className="font-semibold p-2 text-xl">
                The page you are looking for does not exist.
            </h4>
            <Link to="/">
                <button className="text-lg font-semibold bg-blue-500 p-2 mt-10 mb-10 rounded-md transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-110">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default Error;
