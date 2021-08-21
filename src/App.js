import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDesc from "./components/ProductDesc";
import { useAppContext } from "./contextAPI/context";
import products from "./products/products";

function App() {
    const { userCart, setProducts, getCartData } = useAppContext();

    // Get products from products
    useEffect(() => {
        setProducts(products);
    }, [products]);

    // Push user cart to loacl storage
    useEffect(() => {
        if (userCart?.length > 0) {
            localStorage.setItem("cartData", JSON.stringify(userCart));
        }
    }, [userCart]);

    // Get user cart data from localstorage
    useEffect(() => {
        const cartData = JSON.parse(localStorage?.getItem("cartData"));
        if (cartData) {
            getCartData(cartData);
        }
    }, []);

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products/:id">
                    <ProductDesc />
                </Route>
                <Route exact path="/user/cart">
                    <Cart />
                </Route>
                <Route path="/*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
