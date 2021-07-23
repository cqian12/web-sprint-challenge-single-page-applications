import React from '../node_modules/react'

export default function Form(props) {
    const { values, change, submit, disabled, errors } = props

    const submitEvt = event => {
        event.preventDefault()
        submit()
    }

    const changeEvt = event => {
        const { name, value, type, checked } = event.target
        const useThis = type === 'checkbox' ? checked : value
        change(name, useThis)
    }

    return (
        <form id ='pizza-form' onSubmit={submitEvt}>
            <h2>Add a Pizza to Your Order</h2>
            <button id = 'order-button' disabled = {disabled}>Submit</button>
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
                <h2>Toppings</h2>
                <label>Nuts
                    <input 
                    name = 'nuts'
                    type = 'checkbox'
                    checked = {values.toppings}
                    onChange={changeEvt}
                    />
                </label>
                <label>Chocolate Chips
                    <input 
                    name = 'chips'
                    type = 'checkbox'
                    checked = {values.toppings}
                    onChange={changeEvt}
                    />
                </label>
                <label>Marshmallows
                    <input 
                    name = 'marsh'
                    type = 'checkbox'
                    checked = {values.toppings}
                    onChange={changeEvt}
                    />
                </label>
                <label>Chocolate Drizzle
                    <input 
                    name = 'choc'
                    type = 'checkbox'
                    checked = {values.toppings}
                    onChange={changeEvt}
                    />
                </label>
                <label>Caramel Drizzle
                    <input 
                    name = 'caramel'
                    type = 'checkbox'
                    checked = {values.toppings}
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