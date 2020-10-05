import React from 'react'

// State can only exist inside of a class component

// Anything dynamically rendered in your frontend application should come from state somewhere
    // setState -> triggers a rerender -> modifies the DOM

class Store extends React.Component{

    // event listeners should be defined in the same component as its being passed in
        // your event listeners inside class components should be arrow functions

    state = {
        count: 5,
        open: true
    }


    handleOrderClick = (evt) => {
        // Using arrow functions make `this` the instance
            // Using `bind` is annoying
        
        // Any time that state needs to change, use `this.setState`
            // setState triggers a rerender
        let partialStateObj = {count: this.state.count + 1}
        this.setState(partialStateObj)
        









        // SECOND ARGUMENT OF this.setState is a callback
        // this.setState({}, () => {
            // What to do after state has changed
        // })






        // Any time that your new state is dependent on your old state, you might want to use functional setState
            // the return value of the callback is a POJO
            // That POJO gets merged into old state

        // this.setState((oldState) => {
        //     return {
        //         count: oldState.count + 1
        //     }
        // })








        // DON'T DO THIS
        // this.state.count += 100
    }



    render(){
        console.log("STATE", this.state)
        return(
            <li className="container">
                <img src="https://ih1.redbubble.net/image.1006770049.1439/flat,750x1000,075,f.jpg" alt='bubble tea' />
                
                <p>Store Name: <span>{this.props.storeName}</span></p>
                <button onClick={ this.handleOrderClick } >
                    Orders: {this.state.count}
                </button>
            </li>
        )
    }

}



export default Store