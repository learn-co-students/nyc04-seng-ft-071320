import React from 'react'


// Any time that you define a function in a functional component
    // You need variable declaration

function Search(props){

    const handleInput = (evt) => {
        props.changeSearchTerm(evt.target.value)
    }

    return(
        <>
            <input type="text" 
                name="search" 
                className="search"
                value={props.searchTerm}
                onChange={handleInput}
            />
        </>
    )

}

export default Search