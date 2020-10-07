import React from 'react'

class Store extends React.Component{

    handleOrderClick = (evt) => {
        fetch(`http://localhost:3000/stores/${this.props.store.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({
                orders: this.props.store.orders + 1
            })
        })
            .then(res => res.json())
            .then(updatedStore => {
                this.props.updateStoreFromState(updatedStore)
            })
    }


    handleDelete = (evt) => {

        fetch(`http://localhost:3000/stores/${this.props.store.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedObj) => {
                this.props.deleteStoreFromState(deletedObj.id)
            })

    }



    render(){
        let {storeName, orders} = this.props.store

        return(
            <li className="container">
                <img src="https://ih1.redbubble.net/image.1006770049.1439/flat,750x1000,075,f.jpg" alt='bubble tea' />
                <button className="delButton" onClick={this.handleDelete}>
                    x
                </button>
                <p>Store Name: <span>{storeName}</span></p>
                <button onClick={ this.handleOrderClick } >
                    Orders: {orders}
                </button>
            </li>
        )
    }

}



export default Store