import React from 'react';
import Burger from './Burger'


function MenuContainer(props) {
    let arrayOfBurgers = props.burgers.map(burgerObj => {
        return <Burger key={burgerObj.id} burger={burgerObj} />
    })

    return (
        <div className="menu">
            <h2>Good Burger Menu</h2>
            <div id="burger-menu">
                {arrayOfBurgers}
            </div>
        </div>

    );
}


export default MenuContainer;
