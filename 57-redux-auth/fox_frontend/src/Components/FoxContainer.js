import React from 'react'
// Any component that needs to get/set information from our global state needs the line below
import {connect} from 'react-redux'

class FoxContainer extends React.Component{

    render(){
        let arrayOfComponents = this.props.foxes.map(fox => {
            return <li key={fox.id}>{fox.species}</li>
        })

        return(
            <div>
                <h2>Fox Container</h2>
                <ul>
                    {arrayOfComponents}
                </ul>
            </div>
        )
    }
}



// First argument of the first ():
    // mapStateToProps (Get information)
    // mapStateToProps is a callback:
        // mapStateToProps' first argument is the globalStateObj 
        // mapStateToProps returns a POJO that will be merged into the props of the component


let mapStateToProps = (globalState) => {
    return {
        foxes: globalState.foxesInformation.foxes
    }
}

export default connect(mapStateToProps)(FoxContainer)