import React from 'react'
import {connect} from 'react-redux'
import AddFoxForm from './AddFoxForm'

function ShowFox(props){
    let {foundFox} = props
    return(
        <div>
            <h2>{foundFox.species}</h2>
            <AddFoxForm fox={foundFox}/>
            <img src={foundFox.image} alt={foundFox.species}/>
        </div>
    )
}


let mapStateToProps = (globalState, ownProps) => {
    console.log(ownProps)
    // ownProps is the props of the ShowFox component


    return {}

    // let id = ownProps.match.params.id
    // let num_id = parseInt(id)
    // let foundFox = globalState.foxesInformation.foxes.find(fox => fox.id === num_id)
    // return {
    //     singleFox: foundFox
    // }
}


export default connect(mapStateToProps)(ShowFox)