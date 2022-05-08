import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from "../../SideMenu";




export default class feeReport extends Component{
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
if(res.data.success){
this.setState({
posts:res.data.existingFee,



});

console.log(this.state.posts)
} 
});
}



filterData(posts,searchKey){

    const result = posts.filter((post) =>
    post.Class_Type.toLowerCase().includes(searchKey)||
    post.DetailShortCode.toLowerCase().includes(searchKey)||
    post.Description.toLowerCase().includes(searchKey)
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

<table className="card-box" style={{marginTop:"20px", marginBottom:"-100px"}}>
<center><h1 style={{marginTop:"80px"}}><b>Monthly Report For Class Fee  Management</b></h1></center>


<br></br>
<br></br>

<div style={{marginLeft:"80px", marginBottom:"500px"}}>
<h6>From</h6>
<h6><b>Tharushi Ranaweera</b></h6>
<h6>tharushi@gmail.com</h6></div>

<tr></tr>
<br></br>
<div style={{marginLeft:"820px", marginTop:"-600px"}}>To</div>
<div style={{marginLeft:"820px"}}><b>Amzo Learning Educational center</b></div>
<div style={{marginLeft:"820px"}}>Galle Road,Colombo 3</div>
<div style={{marginLeft:"820px"}}>0112020310</div>
<div style={{marginLeft:"820px"}}>amzolearning.edu@gmail.com</div>
<br></br>
<div style={{marginLeft:"80px"}}>-----------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
<div style={{textAlign:"center"}}>Month Of May</div>


<br></br>

<table className="table" style={{width:"80%", marginLeft:"150px"}}>
<tr>
    
  </tr>
<tr className="row1" style={{}}>
<th className="col1" style={{textAlign:"center"}}>Class_Type</th>
<th className="col1" style={{textAlign:"center"}}>Subject</th>
<th className="col1" style={{textAlign:"center"}}>Fee</th>
<th className="col1" style={{textAlign:"center"}}>Date</th>
<th className="col1" style={{textAlign:"center"}}>Special_Notes</th>


</tr>

{this.state.posts.map((posts,index) =>(
<tr className="row1" key={index} style={{}}>
<td className="col1" style={{textAlign:"center"}}>{posts.Class_Type}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Subject}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Fee}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Date}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Special_Notes}</td>


</tr>
))}

</table>
<br></br>
<br></br>
<div style={{marginLeft:"120px"}}>.........................</div>
<div style={{marginLeft:"150px", marginBottom:"60px"}}>Date</div>
<div style={{marginLeft:"840px", marginTop:"-125px"}}>..........................................</div>
<div style={{marginLeft:"860px", marginBottom:"60px"}}>(Signature )</div>
</table>
<br/>
<center>
<th><button className="btn btn-success" style={{marginLeft:"80px"}}><a href="/feeHome" style={{textDecoration:'none',color:'white',marginBottom:"50px"}}>All Class Fees Page</a></button></th>
</center>
</div>
</div>
)
}
}
