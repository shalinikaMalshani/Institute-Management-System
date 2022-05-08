import React, { Component } from 'react';
import axios from 'axios';




export default class ClassHome extends Component{
constructor(props){
super(props);

this.state={
posts:[]
};
}





render() {
return (

<div style={{marginLeft:"325px",width:"76%"}}>
    <div className="row">
<div className="col-lg-9 mt-2 mb-2">

<center>
<h1 style = {{color:"black", marginTop:"10px", textAlign:"right", marginRight:"-70px"}}><b><i>WELCOME TO THE CLASS MANAGEMENT </i></b></h1></center>

<br></br>

</div>
</div>

<center>
<img src={require('../../images/pho3.jpg')} width="900px" height="400px" />
</center>

<br></br>
<br></br>


<center>
<table>
<th><button className="btn btn-secondary" style={{marginLeft:"100px"}}><a href="/classDetailsHome" style={{textDecoration:'none',color:'white',marginBottom:"50px"}}> <h4>Class Details</h4></a></button></th>
<th><button className="btn btn-secondary" style={{marginLeft:"100px"}}><a href="/feeHome" style={{textDecoration:'none',color:'white',marginBottom:"50px" }}><h4>Class Fee Details</h4></a></button></th>
<center>
<th><button className="btn btn-secondary" style={{marginLeft:"100px"}}><a href="/freeCards" style={{textDecoration:'none',color:'white',marginBottom:"50px" }}><h4>About Free Cards</h4></a></button></th></center>

</table>
</center>
<br></br>



</div>

)
}
}
