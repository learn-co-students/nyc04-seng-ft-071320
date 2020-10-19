import React, { useState, useEffect } from 'react'
import StoreContainer from '../StoreContainer'
import FuncFoodForm from './FuncFoodForm'
import Header from '../Header'
import Search from '../Search'

// useState (imported from the 'react' library) 
    // allows us to use state in functional components
    // useState's initial argument is the initial state 
        // (initial state does not have to be a POJO)

        // let [state, setState] = useState(initialState)

        

// useEffect (imported from the 'react' library)
    // allows us to use lifecycle methods in functional components
    // useEffect's first argument is a function definition
    // useEffect's second argument is the array of dependencies

    // General Rule:
        // To use useEffect as componentDidMount, array of dependencies should be []

        // To use useEffect as componentWillUnmount, return a function definition from the first callback

function FuncApp(){
    let [stores, setStores] = useState([])
    let [searchTerm, setSearchTerm] = useState("") 

    
    useEffect(() => {
        console.log("Component Did Mount");
        fetch("http://localhost:3000/stores")
            .then(res => res.json())
            .then((arrOfStores) => {
                setStores(arrOfStores)
            })
    }, [])


    useEffect(() => {
        return () => {
            console.log("Component will unmount");
            console.log("THIS FUNCTION WILL FIRE WHEN THE COMPONENT UNMOUNTS");
        }
    }, [])


    let addStore = (newStore) => {
        let copyOfStore = [...stores, newStore]
        setStores(copyOfStore)  

        // setStores((prevState) => {return [...prevState, newStore]})
    }

    return(
        <div className="App">
            < Header title="React Hooks"/>
            < Search 
                searchTerm={searchTerm}
                changeSearchTerm={() => {}}
            />
            < FuncFoodForm 
                addStore={addStore}
            />
            < StoreContainer 
                stores={stores} 
            />
        </div>
    )
}

export default FuncApp