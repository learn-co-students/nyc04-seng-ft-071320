let mainDiv = document.querySelector("#main-div")

// Components are bundles of HTML with event listeners
    // "" -> <html></html>

class ButtonJS{

    constructor(colorVariable){
        // this -> Instance of ButtonJS
        this.color = colorVariable

        this.buttonTag = document.createElement("button")
            this.buttonTag.innerText = `Color: ${this.color}`
        mainDiv.append(this.buttonTag)

        this.buttonTag.addEventListener("click", this.handleClick)
    }



    handleClick = (evt) => {
        // `this` as a regular function gets its value from execution
            //  handleClick is executed via the addEventListener

        // because handleClick is defined an instance method (with an arrow function)
            // `this` is the instance
        document.body.style.backgroundColor = this.color
    }



}







// class ButtonJS extends React.Component{

//     handleClick = (evt) => {
//         document.body.style.color = this.props.color
//     }

//     handleSong = (evt) => {
//         console.log("I am singing");
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick={this.handleClick}>Color: {this.props.color}</button>
//                 <button onClick={this.handleSong}>Make Songs</button>
//             </div>

//         )
//     }
// }