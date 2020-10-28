import React from 'react';
import CurrentOrder from '../LeftPage/CurrentOrder'
import MenuContainer from '../MiddlePage/MenuContainer'
import PastOrders from '../RightPage/PastOrders'


function BurgerContainer(props){

    return(
      <div className="container">
        <CurrentOrder />
        <MenuContainer burgers={props.burgers}/>
        <PastOrders />
      </div>
    )
}

export default BurgerContainer;
