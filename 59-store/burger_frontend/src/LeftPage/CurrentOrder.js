import React from 'react';

const CurrentOrder = (props) => {
  let {burgers} = props
  let totalSum = 0


  const handleClick = (e) => {

  }


  return (
    <div className="order">
      <h2>Your Orders</h2>
      <ul id="order-list">
        {}
      </ul>

      <h3>Total Price: $<span id="total">{totalSum}</span></h3>
      <button onClick={handleClick} className="submit">Place an Order </button>
    </div>
  )
}

export default CurrentOrder;
