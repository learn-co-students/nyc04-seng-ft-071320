import React from "react"
import {connect} from 'react-redux'

function Pet(props){
    return(
        <div>
            <p>{props.pet.nickname}</p>
            <img src={props.theFox.image} alt={props.pet.nickname} />
        </div>
    )
}


let mapStateToProps = (globalState, ownProps) => {
    console.log(ownProps);
    let fox_id = ownProps.pet.fox_id
    let foundFox = globalState.foxesInformation.foxes.find(fox => fox.id === fox_id)
    return {
        theFox: foundFox
    }
}

export default connect(mapStateToProps)(Pet)