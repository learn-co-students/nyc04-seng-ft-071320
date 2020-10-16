import React, { Component } from 'react';

class NewSnackForm extends Component {

  state = {
    name: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.token, this.state.name)

    fetch('http://localhost:3000/snacks', {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
        "authorization": this.props.token
      },
      body: JSON.stringify({
        name: this.state.name
      })
    })
    .then(res => res.json())
    .then(createdSnack => {
      this.props.addSnack(createdSnack)
    })


  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Snack Name:</label>
        <input type="text" autoComplete="off" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="submit" value="Create New Snack" />
      </form>
    );
  }

}

export default NewSnackForm;
