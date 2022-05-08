import React from "react";
import axios from "axios";
import "./teacherProfile.css";

export default class TeacherProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
          userId:"",
        teacher:{}
    };
        }
    
        componentDidMount(){
             const id=this.props.match.params.id;
            
    
            axios.get(`http://localhost:8091/teacher/${id}`).then((res)=>{
            if(res.data.success){
              this.setState({
              teacher:res.data.teacher
                });
                  console.log("teacher is",this.state.teacher);
            
        }
    });
    
    this.setState({
      userId:localStorage.getItem("userId")
      }) 
    
    }


render(){
    const{name,photo,age,gender,email,qualification,mobile,subject,date}=this.state.teacher;
    return(
      <div>
    <img src={require('./images/inner_banner_3.jpg')} alt="" style={{width:"100%"}}></img>
    <div style={{position:" absolute",top: "20%",left:" 10%"}}>
      <h1 style={{fontSize:"60px"}}>My Profile</h1>
      <p style={{color:"white",marginLeft:"5px"}}>Home // My Profile</p>
    </div>
           <div class="student-profile py-4">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent text-center">
            <img class="profile_img" src={photo} alt="student dp"/>
            <h3>{name}</h3>
          </div>
          <div class="card-body">
            <p class="mb-0"><strong class="pr-1">Age:</strong>{age}</p>
            <p class="mb-0"><strong class="pr-1">Gender</strong>{gender}</p>
            
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">
                <thead></thead>
                <tbody>
                <tr>
                <th width="30%">Join Date</th>
                <td width="2%">:</td>
                <td>{date}</td>
              </tr>
              <tr>
                <th width="30%">Qualifications</th>
                <td width="2%">:</td>
                <td>{qualification}</td>
              </tr>
              <tr>
                <th width="30%">Email</th>
                <td width="2%">:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <th width="30%">Contact</th>
                <td width="2%">:</td>
                <td>{mobile}</td>
              </tr>
              <tr>
                <th width="30%">Subject</th>
                <td width="2%">:</td>
                <td>{subject}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
          <div style={{"height":" 26px"}}></div>
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Other Information</h3>
          </div>
          <div class="card-body pt-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<a className="btn btn-warning"  role="button" href={`/teacherEdit/${this.state.userId}`} style={{position:" absolute",bottom: "-70px",left:"320px",width:"130px",borderRadius:"5px",borderWidth:"1", 
    borderColor:"#ffff"}}><i className="fas fa-edit"></i>&nbsp;Edit Profile</a>
    <a className="btn btn-warning"  role="button" href="/leaveTeacher" style={{position:" absolute",bottom: "-110px",left:"320px",width:"130px",borderRadius:"5px",borderWidth:"1", 
    borderColor:"#ffff"}}><i className="fas fa-edit"></i>&nbsp;Add Leave</a>
<div class="clearfix">
      
     
    </div>
     </div>  
    )
}
}