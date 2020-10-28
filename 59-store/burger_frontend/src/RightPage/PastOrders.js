import React from 'react';
import SingleOrder from './SingleOrder'

class PastOrder extends React.Component{
 
  render(){
    let arrayOfComps = this.props.past_orders.map(past_order => {
      return <SingleOrder key={past_order.id} past_order={past_order} />
    })
  
    return (
      <div className="custom">
        <h2>See Past Orders</h2>
  
        <div id="ordersDiv">
          {arrayOfComps}
        </div>
      </div>
    )
  }
}

export default PastOrder;
