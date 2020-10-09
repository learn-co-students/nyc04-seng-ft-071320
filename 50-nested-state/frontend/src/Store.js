import React from 'react'
import DrinksContainer from './DrinksContainer'

class Store extends React.Component{

    state ={
        open: false
    }

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
                this.props.deleteStoreFromState(this.props.store.id)
            })
    }

    
    toggleStore = (evt) => {
        this.setState({
            open: !this.state.open
        })
    }


    
    componentWillUnmount(){
        console.log("GOODBYe", this.props.store.storeName);
    }



    render(){
        let {storeName, orders, drinks, id} = this.props.store

        return(
            <li className="container">
                <img 
                    src="https://ih1.redbubble.net/image.1006770049.1439/flat,750x1000,075,f.jpg" 
                    alt='bubble tea' 
                    onClick={this.toggleStore}
                />
                <button className="delButton" onClick={this.handleDelete}>
                    x
                </button>
                <p>Store Name: <span>{storeName}</span></p>
                <button onClick={ this.handleOrderClick } >
                    Orders: {orders}
                </button>
                
                { 
                    this.state.open 
                    ? 
                    < DrinksContainer 
                        drinks={drinks} 
                        store_id={id} 
                        addDrinkToSpecificStore={this.props.addDrinkToSpecificStore}
                    />
                    :
                    <h6>Closed</h6>
                } 
            </li>
        )
    }

}



export default Store