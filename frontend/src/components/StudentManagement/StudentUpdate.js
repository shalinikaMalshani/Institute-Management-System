import React, {Component} from "react";
import axios from "axios";
// import "./SideMenu.css";

export default class StudentUpdate extends Component{

    constructor(props){
        super(props);
      
        this.state={
          studentList:[]

            // name:"",
            // address:"",
            // birthDay:"",
            // gender:"",
            // email:"",
            // phone:"",
            // school:"",
            // stream:"",
            // guardianName:"",
            // admissionFees:"",
            // regDate:""

        };
      
      }
      
      componentDidMount(){
        this.retriveStudentList();

        // const id = this.props.match.params.id; 

        // axios.get(`http://localhost:9000/student/update/${id}`).then((res) =>{
        //     if(res.data.success){
        //         this.setState({
        //             name:res.data.studentList.name,
        //             address:res.data.studentList.address,
        //             birthDay:res.data.studentList.birthDay
        //         });

        //         console.log(this.state.studentList);
        //     }
        // });

      }
      
      retriveStudentList(){
        axios.get("http://localhost:8091/student/students").then(res =>{
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
        studentList.email.toLowerCase().includes(searchKey)
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

    // hadleInputChange =(e) =>{
    //     const {name, value} = e.target;

    //     this.setState({
    //         ...this.state,
    //         [name]:value
    //     })
    // }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     const id = this.props.match.params.id; 
       

    //     const {name,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,regDate} =  this.state;

    //     const data = {
    //         name:name,
    //         address:address,
    //         birthDay:birthDay,
    //         gender:gender,
    //         email:email,
    //         phone:phone,
    //         school:school,
    //         stream:stream,
    //         guardianName:guardianName,
    //         admissionFees:admissionFees,
    //         regDate:regDate
    //     }

    //     console.log(data)

    //     axios.put(`http://localhost:9000/student/update/${id}`, data).then((res) =>{
    //         if(res.data.success){
    //             alert("Student Update Successfully")
    //             this.setState(
    //                 {
    //                     name:"",
    //                     address:"",
    //                     birthDay:"",
    //                     gender:"",
    //                     email:"",
    //                     phone:"",
    //                     school:"",
    //                     stream:"",
    //                     guardianName:"",
    //                     admissionFees:"",
    //                     regDate:""
    //                 }
    //             )
    //         }
    //     })


    // }

 
    
    
      render(){
        return(
          <div className="container" style={{padding:"40px",marginLeft:"259px",width:"76%"}}>
             <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'40px', width:'120px', marginTop:"-10px", marginLeft:"20px"}}>
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
            <h4 style={{marginLeft:"20px"}}>Update Student Details</h4>
            </div>
            <div className="search col-lg-3 mt-2 mb-2">
           
                <input 
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  name="seachQuery"
                  onChange={this.hadleSearchArea}>
               </input>
            </div>
          </div> 




           <div className="table-responsive-lg" >
              <table className="table table-responsive-lg" style={{width:"100%"}}>
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
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody style={{fontSize:"14px"}}>
                {this.state.studentList.map((studentList,index) => (
                   <tr key={index}>
                     <th scope="row">{index+1}</th>
                     <td>{studentList.stuName}</td>
                     <td>{studentList.address}</td>
                     <td>{studentList.birthDay}</td>
                     <td>{studentList.gender}</td>
                     <td>{studentList.email}</td>
                     <td>{studentList.phone}</td>
                     <td>{studentList.school}</td>
                     <td>{studentList.stream}</td>
                     <td>{studentList.guardianName}</td>
                     <td>{studentList.admissionFees}</td>
                     <td>{studentList.rdate}</td>
                     <td>
                       <a className="btn btn-warning"  style ={{width:"75px", height:"40px"}}href={`/update/${studentList._id}`}>
                         <i className="fas fa-edit"></i>&nbsp;Edit
                       </a>
                       &nbsp;
                       {/* <a className="btn btn-danger" href="#" onClick={() => this.onDelete(studentList._id)}>
                         <i className="fas fa-trash-alt"></i>&nbsp;Delete
                       </a> */}
                     </td>
                   </tr>
                ))}
              </tbody>
             </table>


             {/* <form className="needs-validation" noValidate>
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Name</lable>
                    <input type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChange={this.hadleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Address</lable>
                    <input type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter Address"
                    value={this.state.address}
                    onChange={this.hadleInputChange}/>
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Birth Day</lable>
                    <input type="date"
                    className="form-control"
                    name="birthDay"
                    placeholder="Enter Birth Day"
                    value={this.state.birthDay}
                    onChange={this.hadleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Address</lable>
                    <input type="text"
                    className="form-control"
                    name="gender"
                    placeholder="Enter Gender"
                    value={this.state.gender}
                    onChange={this.hadleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Email</lable>
                    <input type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.hadleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Phone</lable>
                    <input type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Enter Contact Number"
                    value={this.state.phone}
                    onChange={this.hadleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>School Nmae</lable>
                    <input type="text"
                    className="form-control"
                    name="school"
                    placeholder="Enter School Name"
                    value={this.state.school}
                    onChange={this.hadleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Address</lable>
                    <input type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter Address"
                    value={this.state.address}
                    onChange={this.hadleInputChange}/>
                </div>


                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>A/L Stream</lable>
        
                   
                    <select class="form-select" aria-label="Default select example"
                     className="form-control"
                     name="stream"
                     value={this.state.stream}
                     onChange={this.hadleInputChange}>
                    <option selected>Select the A/L Stream</option>
                    <option value="1">Biology</option>
                    <option value="2">Mathematics</option>
                    <option value="3">Commers</option>
                    <option value="4">Arts</option>
                    <option value="5">Technology</option>
                    </select>

                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Guardian Name</lable>
                    <input type="text"
                    className="form-control"
                    name="guardianName"
                    placeholder="Enter Guardian Name"
                    value={this.state.guardianName}
                    onChange={this.hadleInputChange}/>
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Admission Fee</lable>
                    <input type="text"
                    className="form-control"
                    name="admissoinFee"
                    placeholder="Enter Admoission Fee Amount"
                    value={this.state.admissionFees}
                    onChange={this.hadleInputChange}/>
                </div>

                
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <lable style={{marginBottom:'5px'}}>Register Date</lable>
                    <input type="date"
                    className="form-control"
                    name="regDate"
                    placeholder="Enter Register Date"
                    value={this.state.regDate}
                    onChange={this.hadleInputChange}/>
                </div>

                <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                    <i className="far fa-check-square"></i>
                    &nbsp; Update

                </button>

            </form> */}
          </div>
          </div>

        

          


        )
      }
    

    
    
}