import React from 'react'

//this isn't currently in use but would be used to show a summary of each order
//I thought we were outputting the orders to the page but they are in console log instead

export default function Order({info}) {
    if (!info) {
        return <h2>Getting order info...</h2>
    }

    return (
        <div>
          <h3>Order from: {info.name}</h3>
          <p>Size: {info.size}</p>
          <ul>Toppings</ul>
          <li>Nuts: {info.nuts ? 'Yes' : 'No'}</li>
          <p>Special instructions: {info.special}</p>
        </div>
      )
}