import React from "react"
import "./css/SideMenu.css";
import axios from "axios";



export default class SideMenu extends React.Component{
    constructor(props){
        super(props);
      
        this.state={//All the teachers stores in a array
          namei:"",
          userId:"",
          teachers:[],
          tId:""
        };
      } 
      
    
    componentDidMount(){
    this.setState({
    namei:localStorage.getItem("name")
    }) 
   
    // this.setState({
    //     userId:localStorage.getItem("userId")
    //     }) 
    

   

    
    

    }
    
        
    render(){
        return(
            <div style={{display:'flex'}}>
<section id="menu">
<div className="logo">
<img src={require('./images/logon.jpeg')} width="60px" height="60px"/>
<h2>Amzo Learning</h2>
</div>
<div className="items">
<li><i className="fa-solid fa-chart-pie"></i><a href="#">Dashboard</a></li>
<li><i className="fa-solid fa-person-chalkboard"></i><a href="/navTeacher">Teacher Management</a></li>
<li><i className="fa-solid fa-people-group"></i><a href="/studentDashboard">Student Management</a></li>
<<<<<<< HEAD


<li><i className="fa-solid fa-building-columns"></i><a href="/classhome">Class Management</a></li>
<li><i className="fa-solid fa-circle-question"></i><a href="/Student/AllInquiries">Inquire Management</a></li>
<li><i className="fa-solid fa-note-sticky"></i><a href="/Admin/AllNotices">Notice Management</a></li>

=======
<li><i className="fa-solid fa-building-columns"></i><a href="/classHome">Class Management</a></li>
<li><i className="fa-solid fa-circle-question"></i><a href="/Student/AllInquiries">Inquire Management</a></li>
<li><i className="fa-solid fa-note-sticky"></i><a href="/Admin/AllNotices">Notice Management</a></li>
>>>>>>> aad0586116ec1a860575be337479b57488bec24c
</div>

</section>

<section id="interface">
<div className="navigation">
    <div className="n1">
        <div className="search">
        <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search"></input>
        </div>
    </div>
    <div className="profile">
        <i className="far fa-bell"></i>





      <a href="/Admin/profile"><img src={require('./images/exam.jpg')} alt=""></img></a><span>{this.state.namei}</span>
       &nbsp;
       {/* <button onClick={localStorage.clear()} style={{background:"black",color:"white",borderRadius:"5px"}}>Logout</button> */}


      
       
       
       


<<<<<<< HEAD

=======
<<<<<<< HEAD
        <a href={`/teacher/${this.state.userId}`}><img src={require('./images/ppnn.jpg')} alt=""></img></a><span>{this.state.username}</span>
        <button onClick={()=>localStorage.clear()}>Logout</button>
=======

>>>>>>> 9b70781c30189ec0b8f9fc9b488b235b2aafe5fd
>>>>>>> 2b6c8f33b23249215431559037c31d6f61a735c5
    </div>
</div>


</section>
</div>




        )
    }
}