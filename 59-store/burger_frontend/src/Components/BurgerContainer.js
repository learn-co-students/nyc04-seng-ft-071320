import React from 'react';
import CurrentOrder from '../LeftPage/CurrentOrder'
import MenuContainer from '../MiddlePage/MenuContainer'
import PastOrders from '../RightPage/PastOrders'


function BurgerContainer(props){

    return(
      <div className="container">
        <CurrentOrder 
          current_cart={props.current_cart} 
          makeCurrentCartIntoPastOrderAndGetNewCart={props.makeCurrentCartIntoPastOrderAndGetNewCart}/>
        <MenuContainer burgers={props.burgers} creatingBurgerOrder={props.creatingBurgerOrder}/>
        <PastOrders past_orders={props.past_orders}/>
      </div>
    )
}

export default BurgerContainer;
