import React, { useState, useEffect } from "react";
import axios from '../node_modules/axios'
import { Route, Link, Switch } from "react-router-dom";
import schema from './Schema'
import { reach } from '../node_modules/yup'

//imports from other components:
import Form from './OrderForm'
import Order from './Order'

//initializations:
const initialVals = {
  name:'',
  size:'',
  nuts:false,
  chips: false,
  marsh: false,
  caramel: false,
  special:''
}

const initialErrors = {
  name:''
}

const initialOrders = []
const initialDisabled = true

const App = () => {
  //setting of state:
  const [orders,setOrders] = useState(initialOrders)
  const [formVals, setVals] = useState(initialVals)
  const [formErrs, setErrs] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postOrder = newOrder => {
    //this function posts orders to the database and then console logs all of the orders
    axios.post('https://reqres.in/api/orders',newOrder)
    .then (res => {
      setOrders([res.data,...orders])
      console.log(orders)
    })
    .catch(err => console.log(err))
    .finally(() => setVals(initialVals)) //form is emptied after each submission
  }

  const validate = (name, val) => {
    //this function uses the schema to confirm inputs before form submission
    reach(schema,name)
    .validate(val)
    .then(() => setErrs({...formErrs,[name]:''}))
    .catch(err => setErrs({...formErrs,[name]:err.errors[0]}))
  }

  const inputEvt = (name, val) => {
    //this input event function is passed down to the form
    validate(name,val)
    setVals({
      ...formVals,[name]:val
    })
  }

  const submitForm = () => {
    //when a submission is made, this function creates a new order and then posts it to the database with postOrder
    const newOrder = {
      name:formVals.name.trim(),
      size:formVals.size,
      nuts:formVals.nuts,
      chips:formVals.chips,
      marsh:formVals.marsh,
      caramel:formVals.caramel,
      special:formVals.special
    }

    postOrder(newOrder)
  }

  useEffect(() => {
    //whenever the form values are changed, the schema is checked to see whether the submit button should be enabled
    schema.isValid(formVals)
    .then(valid => setDisabled(!valid))
  }, [formVals])

  return ( //this is the home page output, with a link to the order form
    <div> 
      <nav>
        <h1>Chuck's Dessert Pizza</h1>
        <div>
          <Link to='/'>Home</Link><br></br>
          <Link to='/pizza' id = 'order-pizza'>Order Pizza</Link>
        </div>
      </nav>
      <Switch>
        <Route path = '/pizza'>
          <Form values = {formVals} change={inputEvt} submit={submitForm} disabled={disabled} errors={formErrs} />
        </Route>
        <Route exact path = '/'>
          {
            orders.map(order => {
              return (<Order key = {order.id} info = {order} />)
            })
          }
        </Route>
      </Switch>
    </div>
  );
};

export default App;