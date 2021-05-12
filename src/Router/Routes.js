import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
// import ProductDetails from '../Components/Body/Products/ProductDetails';

import MainComponent from '../Components/MainComponent';

const Routes = () => {
    return (
      <Router>
      <Switch>
      <Route exact path = '/' component={MainComponent} />
      {/* <Route exact path='/product/:productId' component={ProductDetails} />  */}
      {/* <Route exact path ='/checkout' component={Checkout} /> */}
      </Switch>
      </Router>
    );
};

export default Routes;