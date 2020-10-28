import React from 'react'
import './App.css'
import NavBar from './Components/Navbar'
import LoginForm from './Components/LoginForm'
import BurgerContainer from './Components/BurgerContainer'
import Home from './Components/Home'


import {Switch, Route} from 'react-router-dom'

class App extends React.Component{

  state={
    burgers: [],
    token: "",
    username: "",
    current_cart: {
      id: 0,
      burger_orders: []
    },
    past_orders: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/burgers")
      .then(res => res.json())
      .then(burgers => {
        this.setState({
          burgers: burgers
        })
      })

    if(localStorage.token){
      fetch("http://localhost:3000/keep_logged_in", {
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then(this.helpHandleResponse)
    }

  }

  handleLoginSubmit = (userInfo) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        username: userInfo.username,
        password: userInfo.password
      })
    })
      .then(res => res.json())
      .then(this.helpHandleResponse)
  }

  helpHandleResponse = (resp) => {
    if(resp.error){
      console.log(resp.error)
    } else {
      localStorage.token = resp.token
      this.setState({
        token: resp.token,
        username: resp.user.username,
        current_cart: resp.user.current_cart_pls,
        past_orders: resp.user.past_orders_plz
      })
      // What else do we do with the response?
    }
  }

  renderForm = (routerProps) => {
    return <LoginForm handleSubmit={this.handleLoginSubmit}/>
  }

  renderBurgerContainer = (routerProps) => {
    return <BurgerContainer 
      burgers={this.state.burgers} 
      token={this.state.token} 
      past_orders={this.state.past_orders}
      current_cart={this.state.current_cart}
      creatingBurgerOrder={this.creatingBurgerOrder}
      makeCurrentCartIntoPastOrderAndGetNewCart={this.makeCurrentCartIntoPastOrderAndGetNewCart}
    />
  }


  creatingBurgerOrder = (burger_id) => {
    fetch("http://localhost:3000/burger_orders", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        burger_id: burger_id,
        order_id: this.state.current_cart.id
      })
    })
    .then(res => res.json())
    .then(newlyCreatedBurgerOrder => {
      let copyOfBurgerOrdersForCart = [...this.state.current_cart.burger_orders, newlyCreatedBurgerOrder]
      let copyOfCart = {
        ...this.state.current_cart, 
        burger_orders: copyOfBurgerOrdersForCart
      }
      this.setState({
        current_cart: copyOfCart
      })

    })
  }



  makeCurrentCartIntoPastOrderAndGetNewCart = () => {
    fetch(`http://localhost:3000/orders/${this.state.current_cart.id}/transform`, {
      method: "PATCH",
      headers: {
        "Authorization": this.state.token
      }
    })
      .then(res => res.json())
      .then((resp) => {
        let copyOfPastOrders = [...this.state.past_orders, resp.transformed_cart]
        this.setState({
          current_cart: resp.current_cart,
          past_orders: copyOfPastOrders
        })
      })
  }




  render(){
    return(
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" render={this.renderForm}/>
          <Route path="/burgers" render={this.renderBurgerContainer}/>

        </Switch>
      </div>
    )
  }
}

export default App