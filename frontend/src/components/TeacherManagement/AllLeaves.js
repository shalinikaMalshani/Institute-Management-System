import React from "react";
import axios from "axios";
import SideMenu from "../../SideMenu.js";

export default class AllLeaves extends React.Component{

constructor(props){
  super(props);

  this.state={//All the teachers stores in a array
    leaves:[]
  };
} 

componentDidMount(){
  this.retrieveTeachersLeaves();//this method gather the all sub comp and comps
  
}


retrieveTeachersLeaves(){
axios.get("http://localhost:8091/AllLeaves")
.then(res=>{
if(res.data.success){
this.setState({
  leaves:res.data.existingLeaves
})
console.log(this.state.leaves);

}
})
}

  

onDelete =(id)=>{
  axios.delete(`http://localhost:8091/deleteLeave/${id}`).then((res)=>{
  alert("Teacher deleted");
        this.retrieveTeachersLeaves();
        
    
            })

}

filterData(leaves,searchKey){
  const result=leaves.filter((leave)=>
  leave.fDate.toString().toLowerCase().includes(searchKey) ||
  leave.name.toString().toLowerCase().includes(searchKey) 
  
  )

  this.setState({leaves:result})
}

handleSearch = (e)=>{
const searchKey=e.target.value;

axios.get("http://localhost:8091/AllLeaves")
.then(res=>{
if(res.data.success){
this.filterData(res.data.existingLeaves,searchKey);
}
})
}



 render(){
   return(
     <div><SideMenu/>
  <div style={{marginLeft:"325px",width:"76%"}}><br></br>
    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'45px', width:'80px'}}>
                  <a href="/navTeacher" style={{textDecoration:'none', color:'white',display:'flex'}}><i class="fa-solid fa-angles-left"
                   style={{marginTop:'5px'}}></i>&nbsp;Back</a>
                </button>

<br></br><br></br>
             

         {/* <div className="container">   */}
   <div className="row">
 <div className="col-lg-12"> 
    <h2>Absent Teachers</h2>
    <div className="col-lg-9 mt-2 mb-2">
      <input className="form-control" type="search" placeholder="search" name="search" onChange={this.handleSearch} ></input>
    </div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Teacher Name</th>
      <th scope="col">Leave Type</th>
      <th scope="col">Leave Duration</th>
      <th scope="col">From Date</th>
      <th scope="col">To Date</th>
      <th scope="col">Reason</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {this.state.leaves.map((leaves,index)=>(
      <tr key={index}>
      <th scope="row">{index+1}</th>
     
      <td>
      
        {leaves.name}
        
        </td>
  
  <td>{leaves.type}</td>
      <td>{leaves.duration}</td>
      <td>{leaves.fDate}</td>
      <td>{leaves.tDate}</td>
      <td>{leaves.reason}</td>
    
      <td>
     
      <a className="btn btn-danger" role="button" href="" onClick={()=>this.onDelete(leaves._id)} ><i className="far fa-trash-alt"></i>&nbsp;Delete</a>
      
       
      </td>
    </tr>
    ))}
  </tbody>
</table>


  </div>
   </div>
    </div>
    </div>
 );
   }
 }

