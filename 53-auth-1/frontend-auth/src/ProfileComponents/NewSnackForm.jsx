import React, { Component } from 'react';

class NewSnackForm extends Component {

  state = {
    name: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
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
