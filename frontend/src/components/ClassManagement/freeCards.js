import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from "../../SideMenu";

export default class freeCards extends Component {


render() {

return (
  <div>
  <SideMenu/>
    
 <div style={{marginLeft:"350px",width:"70%"}}>

<h1><p style={{fontSize:"50px",color: "black", marginTop:"80px"}}><center><b>About Free Cards</b></center></p></h1>
<br>
</br>
<br></br>
 
<table class="table table-striped">
    <thead style={{color:"blue"}}>
      <tr>
        <th><i><h3>Student</h3></i></th>
        <th><i><h3>Teacher</h3></i></th>
      
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><h4>Student have to complete their notes</h4></td>
        <td><h4>Should always check the relevant student's notes</h4></td>
       
      </tr>
      <tr>
        
        <td><h4>Students have to face the examinations (If you can not face the examinations, you have to inform the relevant teacher)</h4></td>
        <td><h4>Should be aware of the marks that they get in the examinations</h4></td>
      </tr>
      <tr>
        <td><h4>Must sit in the front rows in the classroom</h4></td>
        <td><h4>Be aware of the student's attendance</h4></td>
       
       
    </tr>
    </tbody>
    </table>
    <br></br>
    <br></br>
  <center>
  <th><button className="btn btn-success" style={{marginLeft:"100px"}}><a href="/classhome" style={{textDecoration:'none',color:'white',marginBottom:"50px"}}>Home Page</a></button></th>
</center>
</div>
</div>


)


}

}
