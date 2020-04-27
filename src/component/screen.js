import React from 'react';



// const Screen = (props) =>{
//     return (
//         <div className ="screen">
//             <input type='text' readOnly
//             value ={props.result}/>
//         </div>
//     )
// }
// export default Screen;

class Screen extends React.Component{
    constructor(props){
        super(props)
    
   
    }
    
    render(){
        return(
            <div className = "screen">
                <input type = 'text' readOnly value={this.props.result? this.props.result: ""}             
                />
            </div>
        )
    }
}
export default Screen;