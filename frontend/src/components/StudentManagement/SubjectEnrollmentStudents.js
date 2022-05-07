import React, {Component} from "react";
import axios from "axios";


export default class SubjectEnrollmentStudents extends Component{
  constructor(props){
    super(props);
  
    this.state={
      subjectList:[]
    };
  
  }
  
  componentDidMount(){
    this.retriveStudentList();
  }
  
  retriveStudentList(){
    axios.get(" http://localhost:8091/payment/payments").then(res =>{
      if(res.data.success){
        this.setState({
          subjectList:res.data.existingPost
        });
        console.log(this.state.subjectList)
      }
  
    });
  }

  //search function
filterData(subjectList,searchKey){
    const result = subjectList.filter((studentList) =>
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

    axios.get("http://localhost:8091/payment/payments").then(res =>{
        if(res.data.success){
          this.filterData(res.data.existingPost,searchKey)
        } 
      });
}


    //Delete Function
    onDelete = (id) =>{
        axios.delete(`http://localhost:8091/payment/deletePayment/${id}`).then((res) =>{
            alert("Delete Successfully");
            this. retriveStudentList();
        })
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

         <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                    <h4><i>All Students Enrolled Subjects</i></h4>
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
                <th scope="col">Email</th>
                <th scope="col">Stream</th>
                <th scope="col">Subject 1</th>
                {/* <th scope="col">Teacher 1</th> */}
                <th scope="col">Subject 2</th>
                {/* <th scope="col">Teacher 2</th> */}
                <th scope="col">Subject 3</th>
                {/* <th scope="col">Teacher 3</th> */}
                <th scope="col">Subject 4</th>
                {/* <th scope="col">Teacher 4</th> */}
                <th scope="col">Register Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody style={{fontSize:"13px"}} >
              {this.state.subjectList.map((subjectList,index) => (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                  <td >
                    <a href={`/getPayment/${subjectList._id}`} style={{textDecoration:"none"}}>
                      {subjectList.stuName}
                      </a>
                  </td>
                  <td >{subjectList.email}</td> 
                  <td >{subjectList.stream}</td> 
                  <td >{subjectList.subject1}</td>
                  {/* <td >{subjectList.teacher1}</td> */}
                  <td >{subjectList.subject2}</td>
                  {/* <td >{subjectList.teacher2}</td> */}
                  <td >{subjectList.subject3}</td>
                  {/* <td >{subjectList.teacher3}</td> */}
                  <td >{subjectList.subject4}</td>
                  {/* <td >{subjectList.teacher4}</td> */}
                  <td >{subjectList.rdate}</td>
                  <td style={{size:"12px"}}>
                      <a  className="btn btn-danger" style={{fontSize:"12px",width:"80px", height:"30px"}} href="#" onClick={() => this.onDelete(subjectList._id)}>
                         <i className="fas fa-trash-alt"></i>&nbsp;Delete
                       </a>
                     </td> 
                     <td>
                       <a className="btn btn-warning"  style ={{width:"75px", height:"40px"}}href={`/updatePayment/${subjectList._id}`}>
                         <i className="fas fa-edit"></i>&nbsp;Edit
                       </a>
                       &nbsp;

                     </td>
              </tr>
            ))}
          </tbody>

    </table>

      </div>
      </div>
    )
  }

  
}