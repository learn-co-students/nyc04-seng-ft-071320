import React from 'react';

const CurrentOrder = (props) => {
  let totalSum = props.current_cart.burger_orders.reduce((agg, b_order) => {
    return agg + b_order.burger_price
  }, 0)


  const handleClick = (e) => {
    props.makeCurrentCartIntoPastOrderAndGetNewCart()
  }

  let arrOfComps = props.current_cart.burger_orders.map(burger_order => {
    return <p key={burger_order.id}>{burger_order.burger_name_plx}</p>
  })

  return (
    <div className="order">
      <h2>Your Orders</h2>
      <ul id="order-list">
        {arrOfComps}
      </ul>

      <h3>Total Price: $<span id="total">{totalSum}</span></h3>
      <button onClick={handleClick} className="submit">Place an Order </button>
    </div>
  )
}

export default CurrentOrder;
