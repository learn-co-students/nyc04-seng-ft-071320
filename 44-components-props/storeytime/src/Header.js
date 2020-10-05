import React from 'react'

// Functional Component: Function that returns ONE chunk of JSX (<></>)
    // The function name should be capitalized
    // Functional components gets their props from the argument of the function

    
function Header(props){
        
    // In a functional component, you can console.log above your return
    return(
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

// Write your export

export default Header