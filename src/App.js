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
    const { dispatch } = useAppContext();
    useEffect(() => {
        dispatch({
            type: "SET_PRODUCTS",
            payload: products,
        });
    }, [products]);

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
