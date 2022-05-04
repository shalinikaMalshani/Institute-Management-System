import React from "react";
import axios from "axios";

export default class AllTeachers extends React.Component{

constructor(props){
  super(props);

  this.state={//All the teachers stores in a array
    teachers:[]
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

  

onDelete =(id)=>{
  axios.delete(`http://localhost:8091/delete/${id}`).then((res)=>{
    
   alert("Teacher deleted");
  this.retrieveTeachers();
        
    }).catch((error)=>{
              alert("Error occoured");
    
            })

}

filterData(teachers,searchKey){
  const result=teachers.filter((teacher)=>
  teacher.name.toString().toLowerCase().includes(searchKey) ||
  teacher.age.toString().toLowerCase().includes(searchKey) ||
  teacher.gender.toString().toLowerCase().includes(searchKey) ||
  teacher.subject.toString().toLowerCase().includes(searchKey)
  )

  this.setState({teachers:result})
}

handleSearch = (e)=>{
const searchKey=e.target.value;

axios.get("http://localhost:8091/AllTeachers")
.then(res=>{
if(res.data.success){
this.filterData(res.data.existingTeachers,searchKey);
}
})
}



 render(){
   return(
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
    <h2>All Teachers</h2>
    <div className="col-lg-9 mt-2 mb-2">
      <input className="form-control" type="search" placeholder="search" name="search" onChange={this.handleSearch} ></input>
    </div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Photo</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Subject</th>
      <th scope="col">Qulifications</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Join Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {this.state.teachers.map((teachers,index)=>(
      <tr key={index}>
      <th scope="row">{index+1}</th>
     
      <td>
      <a href={`/teacher/${teachers._id}`} style={{textDecoration:"none"}}>
        {teachers.name}
        </a>
        </td>
  <td><img src={teachers.photo} width="90px" height="90px" ></img></td>
  <td>{teachers.age}</td>
      <td>{teachers.gender}</td>
      <td>{teachers.subject}</td>
      <td>{teachers.qualification}</td>
      <td>{teachers.email}</td>
      <td>{teachers.mobile}</td>
      <td>{teachers.date}</td>
      <td>
      <a className="btn btn-warning"  role="button" href={`/teacherEdit/${teachers._id}`} ><i className="fas fa-edit"></i>&nbsp;Edit</a>
      &nbsp;
      <a className="btn btn-danger" role="button" href="" onClick={()=>this.onDelete(teachers._id)} ><i className="far fa-trash-alt"></i>&nbsp;Delete</a>
      
       
      </td>
    </tr>
    ))}
  </tbody>
</table>


  </div>
   </div>
    </div>
 );
   }
 }

