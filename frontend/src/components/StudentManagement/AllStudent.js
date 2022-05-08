import React, {Component} from "react";
import axios from "axios";

// import Swal from "sweetalert2"

export default class AllStudent extends Component{
  constructor(props){
    super(props);
  
    this.state={
      studentList:[]
    };
  
  }
  
  componentDidMount(){
    this.retriveStudentList();
  }
  
  retriveStudentList(){
    axios.get(" http://localhost:8091/student/students").then(res =>{
      if(res.data.success){
        this.setState({
          studentList:res.data.existingPost
        });
        console.log(this.state.studentList)
      }
  
    });
  }

  //search function
filterData(studentList,searchKey){
    const result = studentList.filter((studentList) =>
    studentList.stuName.toLowerCase().includes(searchKey)||
    studentList.address.toLowerCase().includes(searchKey)||
    studentList.guardianName.toLowerCase().includes(searchKey)||
    studentList.email.toLowerCase().includes(searchKey)||
    studentList.school.toLowerCase().includes(searchKey)
    )
    this.setState({studentList:result})
}

hadleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8091/student/students").then(res =>{
        if(res.data.success){
          this.filterData(res.data.existingPost,searchKey)
        } 
      });
}


  render(){
    return(
      <div className="container" style={{padding:"40px",marginLeft:"280px",width:"76%"}}>
          <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'40px', width:'110px', marginTop:"-10px"}}>
                <a href="/studentDashboard" style={{textDecoration:'none', color:'white',display:'flex'}}>&nbsp;<i class="fa-solid fa-angles-left"
                style={{marginTop:'5px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;Back</a>
                </button>
                <br></br><br></br>

        {/* {this.state.studentList.map(studentList =>(
          <div>
            <p>{studentList.name}</p>
            <p>{studentList.address}</p>
            <p>{studentList.birthDay}</p>
            <p>{studentList.gender}</p>
            <p>{studentList.email}</p>
            <p>{studentList.phone}</p>
            <p>{studentList.school}</p>
            <p>{studentList.stream}</p>
            <p>{studentList.guardianName}</p>
            <p>{studentList.admissionFees}</p>
            <p>{studentList.regDate}</p>
           <hr></hr>
          </div>
        
        ))} */}
{/* <SideMenu/> */}
         <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                    <h4><i>All Students</i></h4>
                </div>

                <div className="col-lg-3 mt-2 mb-2">
                    <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    name="seachQuery"
                    onChange={this.hadleSearchArea}>
                   </input>
                    
                </div>
        </div>

        <div className="table-responsive-lg" style={{marginTop:"25px"}}>
          <table className="table table-responsive-lg" >
            <thead>
            <tr style={{fontSize:"15px"}}>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Birth Day</th>
                <th scope="col">Gender</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">School</th>
                <th scope="col">A/L Stream</th>
                <th scope="col">Guardian Name</th>
                <th scope="col">Admission Fee(Rs.)</th>
                <th scope="col">Register Date</th>
              </tr>
            </thead>

            <tbody style={{fontSize:"13px"}} >
              {this.state.studentList.map((studentList,index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                  <td >
                    <a href={`/get/${studentList._id}`} style={{textDecoration:"none"}}>
                      {studentList.stuName}
                      </a>
                  </td>
                  <td >{studentList.address}</td>
                  <td >{studentList.birthDay}</td>
                  <td >{studentList.gender}</td>
                  <td >{studentList.email}</td>
                  <td >{studentList.phone}</td>
                  <td >{studentList.school}</td>
                  <td >{studentList.stream}</td>
                  <td >{studentList.guardianName}</td>
                  <td >{studentList.admissionFees}</td>
                  <td >{studentList.rdate}</td>
              </tr>
            ))}
          </tbody>

    </table>

      </div>
      </div>
    )
  }

  
}