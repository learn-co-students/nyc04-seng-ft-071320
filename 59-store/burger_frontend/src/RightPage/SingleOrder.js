import React from 'react'

class SingleOrder extends React.Component{

    state = {
        clicked: false
    }

    handleClick = (evt) => {
        this.setState(prevState => {
            return {
                clicked: !prevState.clicked
            }
        })
    }

    render(){
        let allPastBurgers = this.props.past_order.burger_orders.map(b_order => {
            return <li>{b_order.burger_name_plx}</li>
        })
        return(
            <>
                <p onClick={this.handleClick}>{this.props.past_order.nice_timestamp}</p>
                { this.state.clicked
                    ?
                <ul>
                    {allPastBurgers}
                </ul>
                    :
                null
                }
            </>
        )
    }
}

export default SingleOrder