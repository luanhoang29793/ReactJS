import React  from 'react';
// const Button =(props) => {
//     return (
//         <button className = {props.className}
//         type ="button"
//         value={props.label}
//         onClick={props.clickbutton}>{props.label}</button>

//     )
// }
// export default Button;

class Button extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <button className ={this.props.className}
            type ="button"
            value={this.props.label}
            onClick ={this.props.clickbutton}>{this.props.label}</button>
        )
    }
}
export default Button;
