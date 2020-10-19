import React from 'react'
import NewDrinkForm from './NewDrinkForm'

function DrinksContainer(props){
    // [{}, {}, {}] -> [<>, <>, <>]

    let arrayOfLis = props.drinks.map((drink) => {
        return <li key={drink.id}>{drink.name}</li>
    })

    return(
        <ol>
            {arrayOfLis}
            < NewDrinkForm store_id={props.store_id} addDrinkToSpecificStore={props.addDrinkToSpecificStore}/>
        </ol>
    )
}

export default DrinksContainer