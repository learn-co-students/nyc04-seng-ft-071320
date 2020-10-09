import React from 'react'

// Consider using props first before considering state

// Ternaries:
    // CONDITION ? WHAT TO DO IF TRUE : WHAT TO DO IF FALSE 

class Pig extends React.Component{

    state={
        showDetails: false
    }



    handleClick = (evt) => {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }




    render(){
        let imageName = this.props.pig.name.toLowerCase().replace(/ /g,"_")
        let pigImage = require(`../hog-imgs/${imageName}.jpg`)

        return(
            <li>
                <h2>{this.props.pig.name} </h2>
                <img src={pigImage} alt={this.props.pig.name} onClick={this.handleClick} />

                { this.state.showDetails ? 
                    <div>
                        <p>Weight: {this.props.pig.weight} TONS</p>
                        <p>
                            {this.props.pig.greased ? "GREASY" : "Clean"}
                        </p>
                        <p>Medal: {this.props.pig["highest medal achieved"]}</p>
                    </div>
                    : 
                    null }
            </li>
        )
    }
}

export default Pig