import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Product from './Pages/Product';
import ProductSearch from './Pages/ProductSearch';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product/:id" exact component={Product} />
            <Route path="/cart" exact component={Cart} />
            <Route
                path="/product/search/:name"
                exact
                component={ProductSearch}
            />
        </Switch>
    );
}
