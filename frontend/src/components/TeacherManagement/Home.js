import React from "react";
import axios from "axios";

export default class Home extends React.Component{

    constructor(props){
        super(props);
      
        this.state={//All the teachers stores in a array
          username:""
        };
      } 
      

componentDidMount(){
   this.setState({
    username:localStorage.getItem("username")

   }) 
        
}

    render(){
        return(
            <div style={{marginLeft:"325px",width:"76%"}}><br></br>
                <h2>Hello,I am {this.state.username}</h2>
            </div>
        )
    }
}