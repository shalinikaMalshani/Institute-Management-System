import React from "react";
import axios from "axios";
import "./css/SideMenu.css";

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

      }
      retrieveClasses(){

      }
      retrieveAdmins(){

      }
      

    render(){
        return(
            <div style={{marginLeft:"325px",width:"76%"}}><br></br>
            <h3 className="iName">
    Dashboard
</h3>
<div className="values">

<div className="valBox">
<i class="fa-solid fa-user-gear"></i>
    <div>
        <h3>8,345</h3>
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
        <h3>8,345</h3>
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
    <tr>
        <td className="people">
        <img src={require('./images/ppnn.jpg')}></img>
    <div className="peopleDe">
        <h5>John Doe</h5>
        <p>john@gmail.com</p>
    </div>
    </td>
    <td className="peopleDes">
        <h5>Software Engineer</h5>
        <p>Web dev</p>
    </td>
    <td className="active">
        <p>Active</p>
    </td>
    <td className="role">
<p>Owner</p>

        
    </td>
    <td className="edit"><a href="">Edit</a></td>
    </tr>
</tbody>


</table>


    </div>
    </div>
        )
    }
}