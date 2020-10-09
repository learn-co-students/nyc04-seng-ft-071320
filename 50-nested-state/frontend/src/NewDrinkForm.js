import React from 'react'

class NewDrinkForm extends React.Component{

    state = {
        name: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()

        fetch("http://localhost:3000/drinks", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                store_id: this.props.store_id
            })
        })
        .then(res => res.json())
        .then((newlyCreatedDrink) => {
            this.props.addDrinkToSpecificStore(newlyCreatedDrink, this.props.store_id)
        })


    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="input_name">Name:</label>
                <input 
                    type="text" 
                    id="input_name" 
                    name="name" 
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Create a drink" />
            </form>
        )
    }
}

export default NewDrinkForm