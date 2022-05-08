import React, { Component } from 'react';
import axios from 'axios';




export default class classReport extends Component{
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
this.setState({
posts:res.data.existingClass,



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
    
        axios.get(`http://localhost:8091/class`).then(res =>{
    if(res.data.success){
    
        this.filterData(res.data.existingClass,searchKey)
    }
    });
    
    
    
    }


  


render() {
return (

<div style={{marginLeft:"325px",width:"76%"}}>
<div className="card-box" style={{marginTop:"20px", marginBottom:"50px"}}>
<center><h1><b>Monthly Report For Class Details Management</b></h1></center>


<br></br>
<br></br>
<div style={{marginLeft:"80px", marginBottom:"500px"}}>
<h6>From</h6>
<h6><b>Tharushi Ranaweera</b></h6>
<h6>tharushi@gmail.com</h6>

</div>


<div style={{marginLeft:"820px", marginTop:"-580px"}}>To</div>
<div style={{marginLeft:"820px"}}><b>Amzo Learning Educational Center</b></div>
<div style={{marginLeft:"820px"}}>Galle Road,Colombo 3</div>
<div style={{marginLeft:"820px"}}>0112020310</div>
<div style={{marginLeft:"820px"}}>amzolearning.edu@gmail.com</div>
<br></br>
<div style={{marginLeft:"80px"}}>-----------------------------------------------------------------------------------------------------------------------------------------------------</div>
<div style={{textAlign:"center"}}>Month of May</div>


<br></br>

<table className="table" style={{width:"80%", marginLeft:"150px"}}>
<tr>
    <th ></th>
  </tr>
  <thead>
<tr>
<th className="col1" style={{textAlign:"center"}}>Class_Type</th>
<th className="col1" style={{textAlign:"center"}}>Subject</th>
<th className="col1" style={{textAlign:"center"}}>Teacher_Name</th>
<th className="col1" style={{textAlign:"center"}}>Starting_Time</th>
<th className="col1" style={{textAlign:"center"}}>Ending_Time</th>
<th className="col1" style={{textAlign:"center"}}>Contact_Number</th>
<th className="col1" style={{textAlign:"center"}}>Day</th>
</tr>
</thead>


{this.state.posts.map((posts,index) =>(
<tr className="row1" key={index} style={{}}>
<td className="col1" style={{textAlign:"center"}}>{posts.Class_Type}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Subject}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Teacher_Name}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Starting_Time}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Ending_Time}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Contact_Number}</td>
<td className="col1" style={{textAlign:"center"}}>{posts.Day}</td>

</tr>
))}

</table>
<br></br>
<br></br>
<div style={{marginLeft:"100px"}}>.........................</div>
<div style={{marginLeft:"120px", marginBottom:"60px"}}>Date</div>
<div style={{marginLeft:"840px", marginTop:"-125px"}}>........................................................</div>
<div style={{marginLeft:"860px", marginBottom:"50px"}}>(Signature )</div>


<br/>
<center>
<th><button className="btn btn-success" style={{marginLeft:"70px"}}><a href="/classDetailsHome" style={{textDecoration:'none',color:'white'}}>All Class Details Page</a></button></th>
</center>
</div>
</div>


)
}
}
