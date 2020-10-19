import React from 'react'
import Store from './Store'

// Inside a functional component, `this` is undefined

function StoreContainer(props){

    let arrayOfComponents = props.stores.map((singularStoreObj) => {
        return <Store 
            key={singularStoreObj.id} 
            store={singularStoreObj} 
            deleteStoreFromState={props.deleteStoreFromState}
            updateStoreFromState={props.updateStoreFromState}
            addDrinkToSpecificStore={props.addDrinkToSpecificStore}
        />
    })
    
    return(
        <ul>

            { arrayOfComponents }

        </ul>
    )
}

export default StoreContainer