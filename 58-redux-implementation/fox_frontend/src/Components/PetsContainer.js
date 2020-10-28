import React from 'react'
import {connect} from 'react-redux'
import Pet from './Pet'

class PetsContainer extends React.Component{
    render(){
        let arrayOfComponents = this.props.pets.map(pet => {
            return <Pet key={pet.id} pet={pet}/>
        })

        return(
            <ul>
                {arrayOfComponents}
            </ul>
        )
    }
}

let mstp = (sevenEleven) => {
    return {
        pets: sevenEleven.infoAboutUser.pets
    }
}

export default connect(mstp)(PetsContainer)