import React from 'react'

class Form extends React.Component{

    state = {
        storeName: "",
        orders: 0
    }

    handleInputChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }


    handleSubmit = (evt) => {
        evt.preventDefault()

        fetch("http://localhost:3000/stores", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                storeName: this.state.storeName,
                orders: this.state.orders
            })
        })
            .then(res => res.json())
            .then((newlyCreatedStore)=> {
                this.props.addStoreToState(newlyCreatedStore)
            })
    }


    

    render(){
        return(
            <div>
                <h2>Open up a Franchise!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="s_name">Name</label>
                    <input type="text" 
                        id="s_name" 
                        value={this.state.storeName} 
                        onChange={this.handleInputChange}
                        name="storeName"
                    />
                    <label htmlFor="s_order">Order</label>
                    <input type="number" 
                        id="s_order" 
                        value={this.state.orders} 
                        onChange={this.handleInputChange}
                        name="orders"
                    />
                    <input type="submit" value="Create a store" />
                </form>
            </div>
        )
    }

}



export default Form