import React from 'react'


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