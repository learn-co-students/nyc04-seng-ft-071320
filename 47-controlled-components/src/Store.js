import React from 'react'

class Store extends React.Component{

    handleOrderClick = (evt) => {
        console.log("Will come back to this later");
    }

    render(){
        let {storeName, orders} = this.props.store

        return(
            <li className="container">
                <img src="https://ih1.redbubble.net/image.1006770049.1439/flat,750x1000,075,f.jpg" alt='bubble tea' />
                
                <p>Store Name: <span>{storeName}</span></p>
                <button onClick={ this.handleOrderClick } >
                    Orders: {orders}
                </button>
            </li>
        )
    }

}



export default Store