import React, { useState, useEffect } from "react";
import { axios } from '../node_modules/axios'
import { Route, Switch } from "react-router";

import Form from './OrderForm'

const App = () => {
const [order,setOrder] = useState([])

  return (
    <div>
      <h1>Chuck's Dessert Pizza</h1>

      <Switch>
        <Route path = '/pizza-order'>
          <Form />
        </Route>
      </Switch>
    </div>
  );
};

export default App;