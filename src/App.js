import React, { useState, useEffect } from "react";
import { axios } from '../node_modules/axios'
import { Route, Switch } from "react-router";

import Pizza from './Pizza'

const App = () => {
const [order,setOrder] = useState([])

  return (
    <div>
      <h1>Lambda Eats</h1>

      <Switch>
        <Route path = '/pizza-order'>
          <Pizza />
        </Route>
      </Switch>
    </div>
  );
};

export default App;