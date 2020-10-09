import React from 'react'
import Pig from './Pig'

// You can always wrap your values for props in {}
    // Not neccesarily strings 
    
class PigPen extends React.Component{

    render(){
        let arrayOfComponents = this.props.piggies.map((pigObj) => {
            return <Pig key={pigObj.name} pig={pigObj}/>
        })

        return(
            <ul>
                {arrayOfComponents}
            </ul>   
        )
    }


}

export default PigPen



















































