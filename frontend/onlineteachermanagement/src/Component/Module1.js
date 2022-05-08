import React from "react";
import axios from "axios";

export default class Module1 extends React.Component{

    constructor(props){
        super(props);
      
        this.state={//All the teachers stores in a array
          userName:"",
          subject1:"",
          subject2:"",
          subject3:"",
          subject4:"",
        };
      } 
      

// componentDidMount(){
//    this.setState({
//     username:localStorage.getItem("userName")

//    }) 
        
// }

componentDidMount(){
    // const userName = localStorage.getItem("username"); 
     
     let z = localStorage.getItem('username')
     console.log(z);
    axios.get("http://localhost:8091/onlinePayment/getSubject/" + z).then((res) =>{
        console.log(res.data)
        this.setState({
                    // stuName:res.data.onlineStudents.stuName,
                    // address:res.data.onlineStudents.address,
                    // birthDay:res.data.onlineStudents.birthDay,
                    // gender:res.data.onlineStudents.gender,
                    // email:res.data.onlineStudents.email,
                    // phone:res.data.onlineStudents.phone,
                    // school:res.data.onlineStudents.school,
                    // stream:res.data.onlineStudents.stream,
                    // guardianName:res.data.onlineStudents.guardianName,
                    // admissionFees:res.data.onlineStudents.admissionFees,
                    // rdate:res.data.onlineStudents.rdate,
                    subject1: res.data.subject1,
                    subject2: res.data.subject2,
                    subject3: res.data.subject3,
                    subject4: res.data.subject4,
                    
                });
                console.log(res.data)
                console.log(this.state.onlinePayment);
                localStorage.setItem("subject1",res.data.subject1)
                localStorage.setItem("subject2",res.data.subject2)
                localStorage.setItem("subject3",res.data.subject3)
                localStorage.setItem("subject4",res.data.subject4)
            }
        
     ) }

    render(){
        return(
            <div style={{marginLeft:"325px",width:"76%"}}><br></br>
            <h1>Module:{this.state.subject1}</h1>
                <h2>Subject 1 :  {this.state.subject1}</h2>
                <h2>Subject 2 :  {this.state.subject2}</h2>
                <h2>Subject 3 : {this.state.subject3}</h2>
                <h2>Subject 4 :{this.state.subject4}</h2>
            </div>
        )
    }
}