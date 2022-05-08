import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from "../../SideMenu";


export default class feeHome extends Component{
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
   axios.get("http://localhost:8091/fee").then(res =>{
    console.log(res.data)
   
if(res.data.success){
   
this.setState({
posts:res.data.existingFee
});
console.log(this.state.posts)
} 
});
}

onDelete = (id) =>{
axios.delete(`http://localhost:8091/fee/delete/${id}`).then((res) =>{
alert("Delete Successfully");
this.retrievePosts();
})
}

filterData(posts,searchKey){

const result = posts.filter((post) =>
post.Class_Type.toLowerCase().includes(searchKey)||
post.Subject.toLowerCase().includes(searchKey)||
post.Fee.toLowerCase().includes(searchKey)||
post.Date.toLowerCase().includes(searchKey)||
post.Special_Notes.toLowerCase().includes(searchKey)
)
this.setState({posts:result})
}

handleSearchArea = (e) =>{

    const searchKey=e.currentTarget.value;

    axios.get(`http://localhost:8091/fee`).then(res =>{
if(res.data.success){

    this.filterData(res.data.existingFee,searchKey)
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
<h1 style = {{color:"red",marginBottom:"0px",marginBottom:"5px",color:"black", marginTop:"80px"}}><center><b>Welcome to the Class Fee Management</b></center></h1>
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

<center>
<img src={require('../../images/fees.jpg')} width="900px" height="300px" />
</center>




<center><h1 style = {{color:"#ff1493", marginBottom:"30px"}}><b></b></h1></center>
<table className="table table-hover">
<thead>
<tr style={{background:"#D3D3D3"}}>
<th Scope="col">ClassFee_ID</th>
<th Scope="col">Class_Type</th>
<th Scope="col">Subject</th>
<th Scope="col">Fee</th>
<th Scope="col">Date</th>
<th Scope="col">Special_Notes</th>
<th Scope="col"></th>
</tr>
</thead>

<tbody>
{this.state.posts.map((posts,index) =>(
<tr key={index}>
<th scope="row"> CF{index+1}</th>
<td>
<a href={`/readFee/${posts._id}`} style={{textDecoration:'none'}}>
{posts.Class_Type}
</a>
</td>


<td>{posts.Subject}</td>
<td>{posts.Fee}</td>
<td>{posts.Date}</td>
<td>{posts.Special_Notes}</td>
<td>
<a className="btn btn-warning" href={`/updateFee/${posts._id}`}>
<i className="fas fa-edit"></i>&nbsp;Update 
</a>

&nbsp;
<a className="btn btn-danger" href="/feeHome" onClick={() =>this.onDelete(posts._id)}>
<i className="fas fa-trash-alt"></i>&nbsp;Delete
</a>
</td>
</tr>
))}
</tbody>
</table>
<table>
<th><button className="btn btn-success"><a href="/addFee" style={{textDecoration:'none',color:'white',marginBottom:"50px"}}>Add Class Fee</a></button></th>
<th><button className="btn btn-success" style={{marginLeft:"100px"}}><a href="/feeReport" style={{textDecoration:'none',color:'white',marginBottom:"50px"}}>Report Generation</a></button></th>
<th><button className="btn btn-success" style={{marginLeft:"100px"}}><a href="/classhome" style={{textDecoration:'none',color:'white',marginBottom:"50px"}}>Home Page</a></button></th>


</table>
</div>
</div>
)
}
}
