import React from 'react'

export default function Order({info}) {
    if (!info) {
        return <h2>Getting order info...</h2>
    }

    return (
        <div>
          <h2>Order from: {info.name}</h2>
          <p>Size: {info.size}</p>
          <ul>Toppings</ul>
          <li>Nuts: {info.nuts ? 'Yes' : 'No'}</li>
          <p>Special instructions: {info.special}</p>
        </div>
      )
}