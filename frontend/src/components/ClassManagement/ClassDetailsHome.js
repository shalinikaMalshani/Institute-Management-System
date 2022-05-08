import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from "../../SideMenu";


export default class ClassDetailsHome extends Component{
constructor(props){
super(props);

this.state={
posts:[]
};
}

componentDidMount(){
this.retrievePosts();
}

retrievePosts(){
   
axios.get("http://localhost:8091/class").then(res =>{
    
if(res.data.success){
    console.log (res);
this.setState({
posts:res.data.existingClass
});

console.log(this.state.posts)
} 
});
}

onDelete = (id) =>{
axios.delete(`http://localhost:8091/class/delete/${id}`).then((res) =>{
alert("Class Details Deleted Successfully");
this.retrievePosts();
})
}



filterData(posts,searchKey){


const result = posts.filter((post) =>
post.Class_Type.toLowerCase().includes(searchKey)||
post.Subject.toLowerCase().includes(searchKey)||
post.Teacher_Name.toLowerCase().includes(searchKey)||
post.Starting_Time.toLowerCase().includes(searchKey)||
post.Ending_Time.toLowerCase().includes(searchKey)||
post.Contact_Number.toLowerCase().includes(searchKey)||
post.Day.toLowerCase().includes(searchKey)
)
this.setState({posts:result})
}

handleSearchArea = (e) =>{
const searchKey=e.currentTarget.value;
axios.get(`http://localhost:8091/class`).then(res =>{
    
       if(res.data.success){

    this.filterData(res.data.existingClass,searchKey)
}
});



}




render() {
return (
    <div>
  <SideMenu/>

<div style={{marginLeft:"325px",width:"76%"}}>
    <div className="row">
<div className="col-lg-9 mt-2 mb-2">


<h1 style={{marginTop:"80px"}}><center><b>All Class Details</b></center></h1>


</div>

 <div className="col-lg-3 mt-2 mb-2">
    <input
    className="form-control"
    type="search"
    placeholder="Search"
    name="searchQuery"
    onChange={this.handleSearchArea}>
    </input>
    </div> 


 </div>
 <br></br>
 <br></br>


<table className="table table-hover" >
<thead>
<tr>
<th Scope="col">Class_ID</th>
<th Scope="col">Class_Type</th>
<th Scope="col">Subject</th>
<th Scope="col">Teacher_Name</th>
<th Scope="col">Starting_Time</th>
<th Scope="col">Ending_Time</th>
<th Scope="col">Contact_Number</th>
<th Scope="col">Day</th>
<th Scope="col"></th>
</tr>
</thead>

<tbody>
{this.state.posts.map((posts,index) =>(
<tr key={index}>
<th scope="row"> CID{index+1}</th>
<td>

 <a href={`/readClass/${posts._id}`} style={{textDecoration:'none'}}>
{posts.Class_Type}
</a> 
</td>


<td>{posts.Subject}</td>
<td>{posts.Teacher_Name}</td>
<td>{posts.Starting_Time}</td>
<td>{posts.Ending_Time}</td>

<td>{posts.Contact_Number}</td>
<td>{posts.Day}</td>
<td>

<a className="btn btn-warning" style={{width:"100px", height:"40px"}} href={`/updateClass/${posts._id}`}>
<i className="fas fa-edit"></i>&nbsp;Update 
</a>
&nbsp;
<a className="btn btn-danger" style={{width:"100px", height:"40px"}}href="#" onClick={() =>this.onDelete(posts._id)}>
<i className="fas fa-trash-alt"></i>&nbsp;Delete
</a>
</td>
</tr>
))}
</tbody>
</table>

 <table>
<th><button className="btn btn-success"><a href="/addDetails" style={{textDecoration:'none',color:'white',marginBottom:"50px"}}>Add Class Details</a></button></th>
<th><button className="btn btn-success" style={{marginLeft:"100px"}}><a href="/classReport" style={{textDecoration:'none',color:'white',marginBottom:"50px"}}>Report Generation</a></button></th>
<th><button className="btn btn-success" style={{marginLeft:"100px"}}><a href="/classhome" style={{textDecoration:'none',color:'white',marginBottom:"50px"}}>Home Page</a></button></th>

</table> 
</div>
</div>
)
}
}
