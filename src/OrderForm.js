import React from '../node_modules/react'

export default function Form(props) {
    const { values, change, submit, disabled, errors } = props 

    const submitEvt = event => { //submitting should stop page reloading and submit the form
        event.preventDefault()
        submit()
    }

    const changeEvt = event => { //changes the appropriate element of the form based on user's input
        const { name, value, type, checked } = event.target
        const useThis = type === 'checkbox' ? checked : value
        change(name, useThis)
    }

    return ( 
        //returns each element of the form; any input triggers the change event
        <form id ='pizza-form' onSubmit={submitEvt}>
            <h3>Add a Pizza to Your Order</h3>
            <button id = 'order-button' disabled = {disabled}>Add to Order</button>
            <div>
                <div>{errors.name}</div> 
            </div>
            <label id = 'name-input'>Name
                <input 
                name = 'name'
                type = 'text'
                value = {values.name}
                onChange={changeEvt}
                />
            </label>
            <label id = 'size-dropdown'>Size
                <select 
                name = 'size'
                value = {values.size}
                onChange={changeEvt}>
                    <option value = ''>Select a Size</option>
                    <option value = 'small'>Small</option>
                    <option value = 'medium'>Medium</option>
                    <option value = 'large'>Large</option>
                </select>
            </label>
            <div>
                <h4>Toppings</h4>
                <label>Nuts
                    <input 
                    name = 'nuts'
                    type = 'checkbox'
                    checked = {values.nuts}
                    onChange={changeEvt}
                    />
                </label>
                <label>Chocolate Chips
                    <input 
                    name = 'chips'
                    type = 'checkbox'
                    checked = {values.chips}
                    onChange={changeEvt}
                    />
                </label>
                <label>Marshmallows
                    <input 
                    name = 'marsh'
                    type = 'checkbox'
                    checked = {values.marsh}
                    onChange={changeEvt}
                    />
                </label>
                <label>Caramel Drizzle
                    <input 
                    name = 'caramel'
                    type = 'checkbox'
                    checked = {values.caramel}
                    onChange={changeEvt}
                    />
                </label>
            </div>
            <label id = 'special-text'>Special Instructions
                <input 
                name = 'special'
                type = 'text'
                value = {values.special}
                onChange={changeEvt}
                />
            </label>
        </form>
    )
}