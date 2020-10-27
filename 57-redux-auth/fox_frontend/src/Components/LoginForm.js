import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


class LoginForm extends React.Component{

    state = {
        username: "",
        password: "",
        error_message: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    } 


    handleSubmit = (evt) => {
        evt.preventDefault()
        fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then(resp =>{
            if(resp.error){
                this.setState({
                    error_message: resp.error
                })
            } else {
                this.props.setUserInfo(resp)
                localStorage.token = resp.token
                // this.setState({
                //     username: "",
                //     password: ""
                // })
                this.props.history.push("/pets")

            }
        })


    }

    render(){
        return(
            <>
                <h2>Login Form</h2>
                <p>{this.state.error_message}</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" 
                        onChange={this.handleChange} 
                        value={this.state.username}
                        />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" 
                        name="password" 
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <input type="submit" value="Login"/>
                </form>
            </>
        )
    }

}
// End of Component



// ACTION CREATOR
let setUserInfo = (userInfo) => {
    return {
        type: "SET_USER_INFO",
        payload: userInfo
    }
}

let mapDispatch = {
    setUserInfo: setUserInfo
}

export default connect(null, mapDispatch)(withRouter(LoginForm))