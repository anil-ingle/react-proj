import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as styled from 'styled-components';

import { Route, Router, Switch } from 'react-router-dom';
import * as Rebass from 'rebass';
// import { CartView } from '../container/cartView';
// import { Checkout } from '../container/checkout';
// import { Footer } from '../container/footer';
// import { Header } from '../container/header';
// import { HomePage } from '../container/homePage';
// import { Body } from '../container/homePageBody/styled';
// import { NavBar } from '../container/navBar';
// import { OrderPlaced } from '../container/orderPlaced';
// import { OrderView } from '../container/orderView';
// import { OrderCard } from '../container/orders';
// import { ProductView } from '../container/productView';
// import { ProductsGridView } from '../container/productsViews';
// import { Profile } from '../container/profile';
import LoginPage from '../component/LoginPage';
// const Body = styled.div`
// max-width: 1184px;
// width: 90%;
// height: auto;

// margin: 6px auto 0;`;
const history = createBrowserHistory();

export default (
    <Router history={history}>
        <Rebass.Provider>
            {/* <Header />
            <NavBar /> */}
            <div>
                <Switch>
                    <Route path="/" component={LoginPage} />
                    {/* <Route exact path="/" component={HomePage} /> */}
                    {/* <Route path="/my-profile/:part" component={Profile} />
                    <Route path="/my-orders" component={OrderCard} />
                    <Route path="/order/:id" component={OrderView} /> }
                    <Route path="/product/:id" component={ProductView} />
                    <Route path="/:groupName/:id/items" component={ProductsGridView} />
                    <Route path="/cart" component={CartView} />
                    <Route path="/order-placed" component={OrderPlaced} />
                    <Route path="/checkout" component={Checkout} /> */}
                </Switch>
            </div>
            {/* <Footer /> */}
        </Rebass.Provider>
    </Router>
);