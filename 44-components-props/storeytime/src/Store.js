import React from 'react'

// Class Components: Need a function called `render` that returns ONE chunk of JSX
    // Class Components should be capitalized
    // Class Components gets their props via `this.props`


class Store extends React.Component{

    render(){
        console.log(this.props)
        // In class components, write your console.log above your return, below your render
        return(
            <div>
                <p>Store Name: {this.props.storeName}</p>
                <p>Price: { 5+5 }</p>
            </div>
        )
    }

}



export default Store