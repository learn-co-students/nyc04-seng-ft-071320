import React, { useState } from 'react'

function FuncFoodForm(props){

    let [storeName, setStoreName] = useState("")
    let [orders, setOrders] = useState(0)


    // DON'T DO THIS:
    // let [stateObj, setStateObj] = useState({
    //     storeName: "",
    //     orders: 0
    // })
    
    // let handleInputChange = (evt) => {
        // setStateObj({
        //     ...stateObj,
        //     [evt.target.name]: evt.target.value
        // })
    // }



    let handleSubmit = (evt) => {
        evt.preventDefault()
        fetch("http://localhost:3000/stores", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                storeName,
                orders
            })
        })
            .then(res => res.json())
            .then((createdStore) => {
                props.addStore(createdStore)
            })
    }





    return(
        <div>
            <h2>Open up a Franchise!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="s_name">Name</label>
                <input type="text" 
                    id="s_name" 
                    value={storeName} 
                    onChange={e => {setStoreName(e.target.value)}}
                    name="storeName"
                />
                <label htmlFor="s_order">Order</label>
                <input type="number" 
                    id="s_order" 
                    value={orders} 
                    onChange={e => {setOrders(e.target.value)}}
                    name="orders"
                />
                <input type="submit" value="Create a store" />
            </form>
        </div>
    )
}

export default FuncFoodForm