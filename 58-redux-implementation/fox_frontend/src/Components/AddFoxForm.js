import React from 'react'
import {connect} from 'react-redux'

class AddFoxForm extends React.Component{

    state = {
        nickname: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        fetch("http://localhost:3000/pets", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": this.props.token
            }, 
            body: JSON.stringify({
                nickname: this.state.nickname,
                health: 5,
                fox_id: this.props.fox.id
            })
        })
        .then(res => res.json())
        .then((newPetJoiner) => {
            this.props.addPet(newPetJoiner)
        })



    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="nickname">Nickname:</label>
                <input 
                    type="text" id="nickname" 
                    name="nickname" 
                    value={this.state.nickname} 
                    onChange={this.handleChange}
                />
                <input type="submit" value="Adopt this fox" />
            </form>
        )
    }
}


let mapStateToProps = (reduxState) => {
    return {
        token: reduxState.infoAboutUser.token
    }
}



let addPet = (singlePet) => {
    return {
        type: "ADD_PET",
        payload: singlePet
    }
}

let mdtp = {addPet}

export default connect(mapStateToProps, mdtp)(AddFoxForm)