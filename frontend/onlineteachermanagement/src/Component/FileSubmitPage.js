import React from "react";
import axios from "axios";

export default class FileSubmitPage extends React.Component{

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
            <div>
                <h3>Upload your file</h3>
                <div class="file-upload-wrapper">
  <input type="file" id="input-file-max-fs" class="file-upload" data-max-file-size="2M" />
</div>
            </div>
        )
    }
}