import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Customer from '../components/customer/Customer'
import Product from '../components/product/Product'
import Order from '../components/order/Order'

export default props =>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/customer" component={Customer}/>
    <Route exact path="/product" component={Product}/>
    <Route exact path="/sales-order" component={Order}/>
    <Redirect from="*" to="/" />
  </Switch>
