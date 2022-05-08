import React from "react";
import axios from "axios";
import "./css/SideMenu.css";
import SideMenu from "./SideMenu.js";


export default class dashboard extends React.Component{

    constructor(props){
        super(props);
      
        this.state={//All the teachers stores in a array
          teachers:[],
          students:[],
          classes:[],
          admins:[]
        };
      } 
      
      componentDidMount(){
        this.retrieveTeachers();//this method gather the all sub comp and comps
        this.retrieveStudents();
        this.retrieveClasses();
        this.retrieveAdmins();
      }
      
      
      retrieveTeachers(){
      axios.get("http://localhost:8091/AllTeachers")
      .then(res=>{
      if(res.data.success){
      this.setState({
        teachers:res.data.existingTeachers
      })
      console.log(this.state.teachers);
      
      }
      })
      }
      retrieveStudents(){
        axios.get("http://localhost:8091/student/students")
        .then(res=>{
        if(res.data.success){
        this.setState({
            students:res.data.existingPost
        })
        console.log(this.state.students);
        
        }
        })
      }
      retrieveClasses(){
        axios.get("http://localhost:8091/AllTeachers")
        .then(res=>{
        if(res.data.success){
        this.setState({
          teachers:res.data.existingTeachers
        })
        console.log(this.state.teachers);
        
        }
        })
      }
      retrieveAdmins(){
        axios.get("http://localhost:8091/Admin/getAllAdmin")
        .then(res=>{
        if(res.data.success){
        this.setState({
          admins:res.data.existingAdmins
        })
        console.log(this.state.existingAdmins);
        
        }
        })
      }
      

    render(){
        return(
            <div>
              <SideMenu/>  
            <div style={{marginLeft:"325px",width:"76%"}}><br></br>

            <h3 className="iName">
    Dashboard
</h3>
<div className="values">

<div className="valBox">
<i class="fa-solid fa-user-gear"></i>
    <div>
        <h3>{this.state.admins.length}</h3>
        <span>Admins</span>
        
    </div>
    </div>


    <div className="valBox">
    <i class="fa-solid fa-person-chalkboard"></i>
    <div>
        <h3>{this.state.teachers.length}</h3>
        <span>Teachers</span>
        
    </div>
    </div>

    <div className="valBox">
    <i className="fa-solid fa-people-group"></i>
    <div>
        <h3>{this.state.students.length}</h3>
        <span>Students</span>
        
    </div>
    </div>

    <div className="valBox">
    <i className="fa-solid fa-building-columns"></i>
    <div>
        <h3>8,345</h3>
        <span>Classes</span>
        
    </div>
    </div>

    
    </div>
    <div className="board">
<table width="100%">
<thead>
    <tr>
        <td>Name</td>
        <td>Title</td>
        <td>Status</td>
        <td>Role</td>
        <td></td>
    </tr>
</thead>
<tbody>
{this.state.admins.map((admins,index)=>(
    <tr key={index}>
        <td className="people">
        <img src={admins.logo}></img>
    <div className="peopleDe">
        <h5>{admins.firstName} {admins.lastName}</h5>
        <p>{admins.email}</p>
    </div>
    </td>
    <td className="peopleDes">
        <h5>Admin</h5>
        
    </td>
    <td className="active">
        <p>Active</p>
    </td>
    <td className="role">
<p>Admin</p>

        
    </td>
    <td className="edit"><a href="">Edit</a></td>
    </tr>
))}
</tbody>


</table>


    </div>
    </div>
    </div>
        )
    }
}